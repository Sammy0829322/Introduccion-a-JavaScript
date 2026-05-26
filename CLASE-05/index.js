const Libro1 = {
     Titulo: "Don Quijote de la Mancha",
     Autor: "Miguel de Cervantes",
     Año: 1605,
     Estado: "disponible",
     Capitulos: ["capitulo 1", "capitulo 2", "capitulo 3"],
     describirLibro: function () {
        console.log(`Libro titulado ${this.Titulo}, escrito por ${this.Autor}, en el año ${this.Año}, el estado es ${this.Estado}`);
     },
     agregarCapitulo: function (capitulo) {
        this.Capitulos.push(capitulo);
     },
     eliminarCapitulo: function () {
        this.Capitulos.pop(); 
     }
};

const Libro2 = {
     Titulo: "El Señor de los Anillos",
     Autor: "J.R.R. Tolkien",
     Año: 1954,
     Estado: "ocupado",
     Capitulos: ["La Comunidad del Anillo", "Las Dos Torres", "El Retorno del Rey"],
     describirLibro: function () {
        console.log(`Libro titulado ${this.Titulo}, escrito por ${this.Autor}, en el año ${this.Año}, el estado es ${this.Estado}`);
     },
     agregarCapitulo: function (capitulo) {
        this.Capitulos.push(capitulo);
     },
     eliminarCapitulo: function () {
        this.Capitulos.pop();
     }
};

const Libro3 = {
     Titulo: "El principito",
     Autor: "Antoine de Saint-Exupéry",
     Año: 1943,
     Estado: "disponible",
     Capitulos: ["capitulo 1", "capitulo 2", "capitulo 3"],
     describirLibro: function () {
        console.log(`Libro titulado ${this.Titulo}, escrito por ${this.Autor}, en el año ${this.Año}, el estado es ${this.Estado}`);
     },
     agregarCapitulo: function (capitulo) {
        this.Capitulos.push(capitulo);
     },
     eliminarCapitulo: function () {
        this.Capitulos.pop();
     }
};

const Libro4 = {
     Titulo: "Harry Potter y la piedra filosofal",
     Autor: "J.K. Rowling",
     Año: 1997,
     Estado: "ocupado",
     Capitulos: ["capitulo 1", "capitulo 2", "capitulo 3"],
     describirLibro: function () {
        console.log(`Libro titulado ${this.Titulo}, escrito por ${this.Autor}, en el año ${this.Año}, el estado es ${this.Estado}`);
     },
     agregarCapitulo: function (capitulo) {
        this.Capitulos.push(capitulo);
     },
     eliminarCapitulo: function () {
        this.Capitulos.pop();
     }
};


Libro1.describirLibro();
Libro1.eliminarCapitulo();
console.log(Libro1.Capitulos); 


Libro2.describirLibro();
Libro2.agregarCapitulo("El Hobbit (Precuela)");
console.log(Libro2.Capitulos); 