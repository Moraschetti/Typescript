console.log("hola mundo");
console.log("hola mundo");

let nombres: string = ["matias", "leo", "juan",];
 let resultado: string = nombres.pop();

 document.write("removido: " + resultado + "<br>");

 document.write(nombres + "<br>");

 let resultados: string = nombres.shift();

 document.write("removido: " resultados + "<br>");

 document.write(nombres + "<br>");

 let lesultado: string = nombres.push("marta", "maria");

 document.write(nombres + "<br>");

let numeros: number = [1,2,3,4,5];

document.write(numeros + "<br>");

let equal: number = numeros.reverse();

document.write(equal);

let ordenados: string = nombres.sort();

console.log(ordenados);

let recursividad;

console.clear();

let i : number = 59;

function impri() {
  console.log(i);
  i = i + 1 ;

  if(i <= 100){
    impri();
  }
  
}

impri();
console.log("fin");

console.clear();

//de forma recursiva

function imprimirArregloRec(arreglo:number[], indice:number,largo:number):number{
  if(indice <= largo){
    console.log('posicion ${indice} tiene: $(imprimirArregloRec(arreglo,indice+1,largo))');

  }
  return arreglo[indice - 1];
}

//de forma secuencial

console.clear();

function imprimirArregloSec(arreglo:number[],largo:number):number{
    let indice: number;

  for(indice = 0, indice <= largo, indice ++){
    console.log('posicion ${indice} tiene: ${arreglo[indice]}');

  }
}

//bubble
console.clear()

for(numCliente = 0; numCliente < 10; numCliente++){
  cliente = prompt('cliente ${numCliente + 1}:');
  fact = number(prompt('facturacion ${numCliente + 1}:'));
  i = ();
  while (i < numCliente && facturacion[i] > fact){
    i++;

  }
  for(j = numCliente; j < i; j++){
    clientes[j] = clientes[j-1];
    facturacion[j] = facturacion[j-1];
  }
  clientes[i] = cliente;
  facturacion[i] = fact;
}
