// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Pelicula} from '../../model/pelicula';
import {Router, RouteParams} from 'angular2/router';
import {PeliculasService} from '../../services/peliculas/peliculas.service';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    templateUrl: "app/view/crear-pelicula.html",
    providers: [PeliculasService, ]
})
 
// Clase del componente donde iran los datos y funcionalidades
export class CrearPeliculaComponent implements OnInit{
   public tituloComponente:string = "Crear película";
   public TituloPelicula:string = "";
   public nuevaPelicula:Pelicula;

   constructor(private _peliculasService: PeliculasService, private _router: Router, private _routeParams: RouteParams){

   }

   onSubmit(){
        this._peliculasService.insertPelicula(this.nuevaPelicula);
        this._router.navigate(["Peliculas"]);
   }

   ngOnInit():any{
       var anio:number;
       if(this._routeParams.get("anio")!=null){
            anio = parseInt(this._routeParams.get("anio"));
       }
       
       this.nuevaPelicula = new Pelicula(
           0,
           this._routeParams.get("titulo"),
           this._routeParams.get("director"),
           anio
       );
   }
   
}