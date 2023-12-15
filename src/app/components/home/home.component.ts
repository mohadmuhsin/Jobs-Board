import { Component, OnInit } from '@angular/core';
import { MainServicesService } from 'src/app/services/main-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  jobIDs:number[] = []
  JobData:any[] =[]
  moreId:number[] = []
  count: number = 2;
  start: number = 0;
  length:number = 6
  end: number = 6;
  loading:boolean = true
  loadMoreClicked: boolean  = false;

  constructor(
    private service :MainServicesService
  ){}

  ngOnInit(): void {
    this.service.getJobIDs().subscribe({
      next:((res:any)=>{
        this.jobIDs = res
        this.moreId =  this.jobIDs.slice(0,this.length)
        this.moreId.map((id:number)=>{
          this.jobData(id)
          this.loading =  false
        })
      }),
      error:((err)=>{
        console.log(err);
        
      })
    })
  }
  

  jobData(id:number){
    this.service.getJobData(id).subscribe({
      next:(res)=>{
        this.JobData.push(res)
        this.loadMoreClicked = false
        console.log(this.JobData);
      }
    })
  }

  loadMore(){
    this.loadMoreClicked = true
    this.start +=6
    this.end +=6
    this.moreId = this.jobIDs.slice(this.start,this.end)
    this.moreId.map((id)=>{
      this.jobData(id)
    })
  }
}
