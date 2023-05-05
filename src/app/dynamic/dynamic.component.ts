import { Component } from '@angular/core';
import {FormControl,FormBuilder} from "@angular/forms"

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent {
title="Pipes in Angular"
getval(item:any)
{
  console.warn(item);
  
}
}
