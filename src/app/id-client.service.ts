import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdClientService {
  public idClient: number = 0;
  constructor() { }
}
