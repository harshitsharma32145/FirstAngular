import { Component ,Output,EventEmitter,Input} from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent {
  title="harshit";
  menu="harshit";
  dis=false;

  color="red";
  bgcolor="yellow";
  dis1=true

  colorchange()
  {
    this.dis1=!this.dis1
    this.color= "green"
    this.bgcolor="red"
  }

  @Input() child:any




}
