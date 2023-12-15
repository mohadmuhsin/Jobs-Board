import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainServicesService {
  url:string = "https://hacker-news.firebaseio.com/v0"
 
  constructor( private http:HttpClient) { }

  getJobIDs(){
    return this.http.get(`${this.url}/jobstories.json`)
  }

  getJobData(id:number){
    console.log(id,"arelum ndo");
    
    return this.http.get(`${this.url}/item/${id}.json`)
  }
}
