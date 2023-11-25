import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }
  public No = 4;
  public i = 1;
  public countI = 0;
  public prime = ""


  public ChkPrime() : any
  {
    for(this.i = 1;this.i<=this.No;this.i++)
    {
      if (this.No%this.i == 0)
      {
        this.countI++;
      }

      if(this.countI == 2)
      {
        this.prime = "The Number is a prime number"
      }
      else
      {
        this.prime = "The Number is not a prime number"
      }

      return this.prime;

      
    }
  }
}
