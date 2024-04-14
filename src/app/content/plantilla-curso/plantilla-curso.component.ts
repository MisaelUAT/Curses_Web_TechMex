import { Component } from '@angular/core';
import { ScriptsLoadingService } from '../../scripts-loading.service';

@Component({
  selector: 'app-plantilla-curso',
  templateUrl: './plantilla-curso.component.html',
  styleUrl: './plantilla-curso.component.css'
})
export class PlantillaCursoComponent {

  constructor( private _loadingscripts: ScriptsLoadingService){

    _loadingscripts.Loading(["plantilla-curso"]);
  }
}
