import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParasService {
  public getbatchdetails()
  {
    return
    [
        {"Name":"PPA","Fees":1800},
        {"Name":"LB","Fees":1800}
    ];
  }
  constructor() { }
}
