import { Component } from '@angular/core';
import { UserService } from '../service2/user.service';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component {
  constructor(private user:UserService){
    this.getAlldata();
  }
  data:any=[]
 getAlldata()
 {
  this.user.UserData().subscribe((result) =>
  {
    this.data=result;
  })
 }
  // data = [
  // { name: 'Hydrogen', weight: 10079, symbol: 'H' },
  // { name: 'Helium', weight: 4.0026, symbol: 'He' },
  // { name: 'Lithium', weight: 6.941, symbol: 'Li' },
  // { name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  // { name: 'Boron', weight: 10.811, symbol: 'B' },
  // { name: 'Carbon', weight: 12.0107, symbol: 'C' },
  // { name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  // { name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  // { name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  // { name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  // { name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  // { name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  // { name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  // { name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  // { name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  // { name: 'Sulfur', weight: 32.065, symbol: 'S' },
  // { name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  // { name: 'Argon', weight: 39.948, symbol: 'Ar' },
  // { name: 'Potassium', weight: 39.0983, symbol: 'K' },
  // { name: 'Calcium', weight: 40.078, symbol: 'Ca' }
  // ]
}
