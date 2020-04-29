import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
declare var hljs;
@Component({
  selector: 'app-formdifference',
  templateUrl: './formdifference.component.html',
  styleUrls: ['./formdifference.component.scss']
})
export class FormdifferenceComponent implements OnInit {
  favoriteColorControl = new FormControl(''); //Reactive Form
  favoriteColor = ''; //Template Driven Form
  languages;
  html_template_content;
  html_reactive_content;
  constructor() { }

  ngOnInit() {
    this.onValueChanges();
    this.languages = ['html', 'typescript'];
    this.html_template_content = hljs.highlightAuto('<input type="text" [(ngModel)]="favoriteColor">', this.languages).value;
    this.html_reactive_content = hljs.highlightAuto('<input type="text" [formControl]="favoriteColorControl">', this.languages).value;
  }

  defaultColor() {
    this.favoriteColorControl.setValue('Blue');
  }

  onValueChanges(): void {
    this.favoriteColorControl.valueChanges.subscribe(val=>{
      console.log(val);
    });
  }

}
