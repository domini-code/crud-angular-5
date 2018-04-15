import { Component, OnInit } from '@angular/core';
import {RecetaService } from '../../services/receta.service';
import {RecetaInterface } from '../../models/Receta';
import {Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
recetas: RecetaInterface[];

  constructor(
    private recetaService: RecetaService
  ) { }

  ngOnInit() {
    this.todasRecetas();
  }

  todasRecetas(){
    this.recetaService.getAllRecetas().subscribe(recetas => this.recetas = recetas);
  }

}
