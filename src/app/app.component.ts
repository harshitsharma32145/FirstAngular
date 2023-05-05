import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { UserService } from './service2/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  val: any = []
  parent(event: any) {
    this.val.push(event)
    console.warn(this.val)
  }
  title2 = "Directives"
  
title=''
  parent_data: any = [
    { name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { name: 'Calcium', weight: 40.078, symbol: 'Ca' }
  ]

}



