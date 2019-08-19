import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() name: string;

  Name1: string = ' Justin Lopez';



  constructor() { }

  ngOnInit() {
    this.name = this.Name1;

  }

  onKeyUp() {
    
  }


}
