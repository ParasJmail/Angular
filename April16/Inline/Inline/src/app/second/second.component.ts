import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `<h1>
                  Inside Second Compnent TS File
             <h1>
             <h2>
                  Concept of Inline
             <h2>
  `,
  styles: [`h1
              {
                  color: red;
              }
            h2
              {
                  color: brown;
              }
        `]
})
export class SecondComponent implements OnInit{
  constructor() {}

  ngOnInit(): any {
    
  }
}
