System.register(["../../model/pelicula"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var pelicula_1;
    var PELICULAS;
    return {
        setters:[
            function (pelicula_1_1) {
                pelicula_1 = pelicula_1_1;
            }],
        execute: function() {
            exports_1("PELICULAS", PELICULAS = [
                new pelicula_1.Pelicula(1, "Batman 1", "Juan Pérez", 1999),
                new pelicula_1.Pelicula(2, "Batman 2", "Juan Gómez", 1999),
                new pelicula_1.Pelicula(3, "Batman 3", "Juan Hernández", 1999),
                new pelicula_1.Pelicula(4, "Batman 4", "Juan Rodríguez", 1999),
                new pelicula_1.Pelicula(5, "Batman 5", "Juan Martínez", 1999)
            ]);
        }
    }
});
//# sourceMappingURL=mock.peliculas.js.map