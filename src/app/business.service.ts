import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  url= 'http://localhost:4000/business';

  constructor(public http:HttpClient) {

   }

   addBusiness(personName,business_name,business_gst_number){
    const data = {
      'person_name':personName,
      'business_name':business_name,
      'business_gst_number':business_gst_number
    }
    console.table(data);
    var headers = new HttpHeaders()
    .set("content-type",'application/json');
    console.log(data);
    return this.http.post('http://localhost:5556/student' , data, { headers });


    // this.http.post('{this.url}/add',data).subscribe(
    //   res=> {
    //     console.log(res);
    //   }
    // );

   }

   getBusinesses() {

    var headers = new HttpHeaders()
           .set("content-type",'application/json');
           return this.http.get('http://localhost:5556/student' );

  }
}
