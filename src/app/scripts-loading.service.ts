import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptsLoadingService {

  constructor() { }

  Loading(files:string[]){

    for(let archive of files ){

      let script= document.createElement('script');
      script.src= "./assets/scripts/" + archive + ".js";
      let body= document.getElementsByTagName('body')[0];
      body.appendChild(script);
    }
  }

}
