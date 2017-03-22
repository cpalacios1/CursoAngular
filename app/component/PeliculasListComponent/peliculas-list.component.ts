// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {Pelicula} from '../../model/pelicula';
import {PeliculasService} from '../../services/peliculas/peliculas.service';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'peliculas-list',
    templateUrl: "app/view/peliculas-list.html",
    providers: [PeliculasService],
    directives: [ROUTER_DIRECTIVES]
})
 
// Clase del componente donde iran los datos y funcionalidades
export class PeliculasListComponent {
    
    public pelicula:Pelicula;
    public peliculaSeleccionada:Pelicula;
    public mostrarDatos:boolean;
    public peliculas:Array<Pelicula>;
    public datoServicio;

    constructor(private _peliculasService: PeliculasService){
        this.mostrarDatos = false;
        this.peliculas = this._peliculasService.getPeliculas();

        this.pelicula =  this.peliculas[0];
        this.peliculaSeleccionada = this.pelicula ;
    }

    debug(titulo = null){
        if(titulo != null){
            console.log(this.pelicula.titulo);
        } else {
            console.log(this.pelicula);
        }
    }

    onShowHide(valor:boolean){
        this.mostrarDatos = valor;
    }

    onCambiarPelicula(valor:Pelicula){
        this.pelicula = valor;
        this.peliculaSeleccionada = valor;
    }

    estaSeleccionada(valor:Pelicula){
        return valor=== this.peliculaSeleccionada;
    }
}