import { style } from '@angular/animations';
import { Component ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-list1',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
 
  // @Output() childmess= new EventEmitter<string>()
  // new=''
  // showdate(value:any)
  // {
  //    this.childmess.emit("child data")
   
  // }

  title="toggle"
  title2="template reference variable"
  disable=true
  toggle()
  {
    this.disable=!this.disable
  }

  getval(item1:any)
  {
    console.warn(item1);
    
  }

  
  

}
