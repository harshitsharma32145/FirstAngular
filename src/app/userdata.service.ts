import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() {
    users()
    {
      return [
        { name: 'harshit', email: 'harshit@net.com' },
        { name: "bruce", email: 'bruce@gmail.com' }
      ]
    }
  }
}





function users() {
  throw new Error('Function not implemented.');
}

