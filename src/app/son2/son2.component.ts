import { Component ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-son2',
  templateUrl: './son2.component.html',
  styleUrls: ['./son2.component.css']
})
export class Son2Component {
  @Output() son2=new EventEmitter<string>()
  latest=''
  childfun(new1:any)
  {
    this.son2.emit(this.latest)
  }

}
