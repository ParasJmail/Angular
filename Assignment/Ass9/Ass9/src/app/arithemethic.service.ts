import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithemethicService {

  constructor() { }
  public  i = 2;
  public  j = 4;

  public Add()
  {
    return this.i + this.j;
  }
  public Sub()
  {
    return this.i - this.j;
  }

}

