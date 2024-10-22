/*In questo esercizio, dovrai creare una classe in JavaScript chiamata "Veicolo" con alcune proprietà e metodi.
La classe "Veicolo" dovrebbe avere le seguenti caratteristiche:
marca
anno
colore
porte
carburante
Successivamente:
Creiamo una nuova istanza di veicolo che rappresenti una Fiat 2019 blu.
Otteniamo le informazioni della vettura utilizzando il metodo informazioni()
Calcoliamo l'età della vettura utilizzando il metodo calcolaEta()*/

class Veicolo {
	marca
	anno
	colore
	porte
	carburante

	constructor(marca, anno, colore, porte, carburante) {
		this.marca = marca
		this.anno = anno
		this.colore = colore
		this.porte = porte
		this.carburante = carburante
	}
	informazioni() {
		return `La casa produttrice è ${this.marca}, costruita nel ${this.anno}, di colore ${this.colore}, il numero di porte è ${this.porte} e infine ha un sistema di alimentazione a ${this.carburante}`
	}
	calcolaEta() {
		const data_attuale = new Date().getFullYear()
		const eta = data_attuale - this.anno
		return `Il veicolo ha ${eta} anni`
	}
}

const Fiat_2019_blu = new Veicolo('fiat', 2015, 'bianca', 5, 'diesel')
console.log(Fiat_2019_blu)
console.log(Fiat_2019_blu.informazioni())
console.log(Fiat_2019_blu.calcolaEta())
