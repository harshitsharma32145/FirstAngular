import { Component, EventEmitter, Input, Output } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
 @Output() arry:EventEmitter<any>=new EventEmitter();
 
useform =new FormGroup({
  user:new FormControl(''),
  dept:new FormControl('')
})


send(data:any)
{
  console.warn('working');
  this.arry.emit(this.useform.value)
  this.useform.reset()
  
}
@Input() data:any
title="parent to child"
}
