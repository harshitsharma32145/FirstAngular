import { Component } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  useForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.minLength(5)]),
    number: new FormControl(0 ,[Validators.required, Validators.pattern('^[0-9]$')])
  })
  
  clickMe() {
    console.warn(this.useForm.value);
  }

  get user() {
    return this.useForm.get('user')
  }
  get number() {
    return this.useForm.get('number')
  }
  enotvalid(e:any)
  {
    if(e.key=='e'||e.key=='+')
    {
      e.preventDefault()
    }
  }

}
