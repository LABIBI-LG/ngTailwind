import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  value = '';
  constructor() { }

  setValue(val:string){
    this.value = val;
  }

  getValue(): string{
    return this.value;
  }
}
