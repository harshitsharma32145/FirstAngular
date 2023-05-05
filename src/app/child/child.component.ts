import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../service2/user.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent 
{
  // PARENT TO CHILD
  //
  @Input() child: any = 'child';
  clickme() {
    alert(this.child)
  }

  //  CHILD TO PARENT
  //
  @Output() abc: EventEmitter<string> = new EventEmitter()

  onclick() {
    this.abc.emit('child to parent called')
  }
  ////////////////////////////////////////////////////////////////////////////////l

  value: any[]=[];
  constructor(private userdata: UserService){}

  // GetUserData()
  // {
  //   this.value = this.userdata.user();
  // }

}
