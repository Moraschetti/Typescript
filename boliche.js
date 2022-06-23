let free = false;

const validarCliente = (time)=>{
	let edad = prompt("¿que edad tenes?");
    if(edad > 18){
    	if (time >= 2 && time < 7 && free == false) {
    		alert("podes pasar gratis");
    		free = true;
    	} 
    	else{
    		alert(`son las ${time}:00hs podes pasar, pero tenes que pagar la entrada`);
    	}
    }
    else{
    	alert("sos menor, no podes pasar");
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(1);
validarCliente(2.4);