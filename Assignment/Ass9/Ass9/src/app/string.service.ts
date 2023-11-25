import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  public Str1 = "ASDCzscsascasADA";
  public counts = 0;
  public CountCapital()
  {
    this.counts = (this.Str1.match(/[A-Z]/g)||[]).length;

    return this.counts;
  }
}
