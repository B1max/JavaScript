// let numero = 5;
// let numeroConDecimal = 5.;
// let numeroNegativo = -4;
// let num;/*no se puede inisializar antes*/
// num = 3;
// let booleano = true;
// const pi = 3.14;/*no sepuede inicializar 
// despues, solo en la misma liniea que se declara*/
// let palabra = "Hola mundo";
// palabra = 'chau';
// palabra = "OK123";
// /*post-incremento*/
// numero++;
// /*pre-incremento*/
// ++numero;
// /*post-decremento*/
// numero--;
// /*pre-decremento*/
// --numero;
// console.log(palabra);
// let array = [1,2,3,4,5,6,7];
// console.log(array);
// let array2 = array;
// array2.push(array2.shift());
// console.log(array2);
// let pass;
// while(pass!='hola'){
//     pass = prompt('Introdusca contraseña');
// }
// alert('Contraseña correcta');

// do{
//     pass = prompt('Introdusca contraseña');
// }while(pass!='hola')
// alert('Contraseña correcta');
// for (let i=0;i<=3;i++){

// }

// let names=['paco','jose','paula','maria'];
// for(let name of names){
//     //imprime el valor 
//     console.log(name);
// }
// for(let name in names){
//     //imprime el indice 
//     console.log(name);
// }
// const objetoTest ={
//      name :'juan',
//      edad:43,
//      hijos:['monica','cintia']
// }
// console.log(objetoTest.name)
// for(const key in objetoTest){
//     console.log(key);
// }
// for(const key in objetoTest){
//     console.log(objetoTest[key]);
// }
//funciones
// const nombreFuncion = (parametro1, parametro2) =>{
//     //no retorna nada
// }
// const nombreFuncion = (parametro1, parametro2) => parametro1+parametro2
//const nombreFuncion = parametro1, parametro2 => parametro1+parametro2
//tambien es valido sin parentesis
//eso del retorno es porque es solo una linea y no hace faltan llaves cuando es asi
// //---------------------------------------*
// const suma1 = (num1,num2) => {
//     //otras lineas de codigo
//     return num1+num2
// }
// const suma2 = (num1,num2) => num1+num2
// const suma3 = (num1,num2) => {
//     //otras lineas de codigo
//     if(num1==2){
//         return num1+num2
//     }
//     return num1
// }
// console.log(suma1(2,3));
// console.log(suma2(2,3));
// console.log(suma3(3,4));
// //clases
// class Persona{
//     constructor (nombre, apellido, edad){
//      this.nombre = nombre
//      this.apellido = apellido
//      this.edad = edad
//     }
// }
//tp
class Libro{
    constructor(titulo, autor, año, genero){
        this.titulo = titulo
        this.autor = autor
        this.año = año
        this.genero = genero
    }
    info(){
        return  `titulo = ${this.titulo}, autor= ${this.autor}, año = ${this.año}, genero = ${this.genero}`;
    }
}
let libros = []
const validarGenero = (genero)=>{
    switch(genero){
        case 'aventura':
            return true;
        case 'terror':
            return true;
        case 'fantasia':
            return true;
        default:
            return false;
    }
}
for(let i = 0;i<=3;i++){
    let titulo = '';
    let autor = '';
    let año = 0;
    let genero = '';
    
    while(titulo==''){
        titulo = prompt('ingrese el titulo del libro');
        if(titulo=='') alert('el campo no puede quedar vacio');
    }

    while(autor==''){
        autor = prompt('Ingrese el autor');
        if(autor=='') alert('el campo no puede quedar vacio');
    }
    
    while(isNaN(año) || año.length != 4){
        año = prompt('Ingrese el año')
    }

    while(!validarGenero(genero) ){
        genero = prompt('Ingrese el genero(aventura, terror, fantasia)')
    }

    libros.push(new Libro(titulo,autor,año,genero))
}
const mostrarLibros=(libros)=>{
    //console.log(libros)
    for(let libro of libros){
        console.log(libro.info())
    }
}
const mostrarAutores=()=>{
    console.log('autores ordendos AZ')
    let listaAutores = [];
    
    for(let libro of libros){
        listaAutores.push(libro.autor)
    }
    listaAutores.sort()
    for(let autor of listaAutores){
        console.log(autor)
    }
}
const mostrarPorGenero=(genero)=>{
    console.log(`Resultados de busqueda por genero ${genero}`)
    for(let libro of libros) { if(libro.genero == genero) console.log(libro.info()); }
}
mostrarLibros(libros)
mostrarAutores()
mostrarPorGenero(prompt('ingrese el genero a buscar'))