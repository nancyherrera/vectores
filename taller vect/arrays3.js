let frutas=new Array('๐','๐','๐','๐','๐','๐');
//push funciona para agrgar elementos al final del array
frutas.push('๐ฅ','๐');
//pop elimina el ultimo elemto de la tabla 
frutas.pop();
document.write(frutas +"<br>");
//slice devuelve un array con todos los elementos.
let profesiones=new Array('๐จโ๐ณ','๐ฎโโ๏ธ','๐ฉโ๐ซ','๐จโ๐ป').slice();
//splice Modifica el array aรฑadiendo los elementos
// it1, it2, โฆ, itN, que son insertados en la posiciรณn ind (desplazando a los existentes).

profesiones.splice(3,0,'๐ฉโ๐ง','๐ฉโ๐ฌ');
document.write(profesiones);


