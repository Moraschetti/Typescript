


function bubbleSort{

  let nombre:string = ["juan", "mario", "ricardo", "clotilda", "ramona"];
  let años:number = [12,87,56,34,21];
  let alturaCm: number = [178,162,183,189,176];
  
for(nombre=0; nombre < alturaCm-1; nombre++ ){
  
    for(años=0; años < alturaCm-1; años++){

      persona:Number = prompt('${nombre + 1}:');
      edad:Number = number(prompt('Tiene ${nombre + 1}:')); 
  
      if(alturaCm[nombre] > alturaCm[años+1]){
      swap(alturaCm,años,años+1);
    }
  }
}return(bubbleSort[nombre, años, alturaCm]);

}
consol.log(nombre);




