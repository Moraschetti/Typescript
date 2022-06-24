let class App{
	constructor(descargas,puntuacion,peso){
		this.descargas = descargas;
		this.puntuacion = puntuacion;
		this.peso = peso;
	}

appInfo(){
	return ` 
    Descargas: <b>${this.descargas}</b><br>
    Puntuacion: <b>${this.puntuacion}</b><br>
    Peso: <b>${this.peso}</b><br>       
	`
}
}

app = new App("30.000","5 estrellas","900mb");
app1 = new App("34.000","3 estrellas","900mb");
app2 = new App("3","2 estrellas","60mb");
app3 = new App("365","3.6 estrellas","450mb");
document.write(`
	${app.appInfo()}<br>
	${app1.appInfo()}<br>
	${app2.appInfo()}<br>
	${app3.appInfo()}<br>
	
	`)