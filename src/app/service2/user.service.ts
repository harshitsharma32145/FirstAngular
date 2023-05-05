import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({ providedIn: 'root' })

export class UserService {

  constructor(private http: HttpClient) { }
  // user() {
  //   return [
  //     { name: 'harshit', email: 'harshit@gmail.com' },
  //     { name: 'bruce', email: 'bruce@gmail.com' },
  //   ]
  // }
  url="http://localhost:5028/api/ValuesController1/DisplayData"
  UserData()
  {
    return this.http.get(this.url)
  }



}

