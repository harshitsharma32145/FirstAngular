import { Component } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
constructor(private route:Router){
  localStorage.setItem('data','false');
}
  reactiveform =new FormGroup({
    user:new FormControl("",[Validators.required]),
    email : new FormControl("",[Validators.required,Validators.email])
  })
  

  login(data:any)
  {
    console.warn(this.reactiveform.value);
    if(this.reactiveform.value.user=='abc123'&& this.reactiveform.value.email=='abc@info')
    {
      console.warn('login button working');
      localStorage.setItem('data','true')
      this.route.navigate(['son']) 
    }
    else{
      this.route.navigate(['reactive'])
    }
  }
   get user()
   {
    return this.reactiveform.get('user')
   }
  get email()
  {
    return this.reactiveform.get('email')
  }

}
