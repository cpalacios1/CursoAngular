// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';
import {PeliculasListComponent} from './component/PeliculasListComponent/peliculas-list.component';
import {PeliculasFooterComponent} from './component/PeliculasFooterComponent/peliculas-footer.component';
import {ContactoComponent} from './component/Contacto/contacto.component';
import {CrearPeliculaComponent} from './component/CrearPeliculaComponent/crear-pelicula.component';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    templateUrl: "app/view/peliculas.html",
    directives: [PeliculasListComponent, 
        PeliculasFooterComponent, 
        ContactoComponent,
        CrearPeliculaComponent,
        ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: "/peliculas", name: "Peliculas", component: PeliculasListComponent, useAsDefault: true},
    {path: "/contacto", name: "Contacto", component: ContactoComponent, useAsDefault: false},
    {path: "/crearPelicula", name: "CrearPelicula", component: CrearPeliculaComponent, useAsDefault: false},
    {path: "/crearPelicula/:titulo,:director,:anio", name: "CrearPeliculaBasadaEnOtra", component: CrearPeliculaComponent, useAsDefault: false}
])
 
// Clase del componente donde iran los datos y funcionalidades
export class AppComponent {
   public tituloComponente:string = "Mis películas ¿Algún pedo?";
}