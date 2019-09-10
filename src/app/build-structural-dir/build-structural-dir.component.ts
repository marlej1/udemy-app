import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-build-structural-dir',
  templateUrl: './build-structural-dir.component.html',
  styleUrls: ['./build-structural-dir.component.css']
})
export class BuildStructuralDirComponent implements OnInit {

  constructor() { }


  names:string[];
  visible:boolean = true;
  switchText:string = "";
  ngOnInit() 
  {
    this.names = [
      'MArcin',
      'Magda',
      'Hesia',
      'Bartek'

    ]
  }



}
