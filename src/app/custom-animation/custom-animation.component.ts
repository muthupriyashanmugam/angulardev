import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-animation',
  templateUrl: './custom-animation.component.html',
  styleUrls: ['./custom-animation.component.scss']
})
export class CustomAnimationComponent implements OnInit {
  current;
  dataSet = [
    {name:"Dog"},
    {name:"Cat"},
    {name:"Rat"},
    {name:"Fish"},
    {name:"Kangaroo"},
    {name:"Rabbit"},
    {name:"Tortoise"},
    {name:"Buffalo"},
    {name:"cow"}
  ];
  constructor() {}

  ngOnInit() {}

  previous() {
  //  this.dataSet = 
  }

  next() {
    // var i = this.getIndex(this.current.index, 1);
    // this.current = this.dataSet[i];
  }

}
