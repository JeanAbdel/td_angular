import {exo2, exo1, hello, sourisVerte, exo3, fibo, moyenne} from "./exo";

export class Main {
    constructor() {
        console.log('TypeScript Webpack starter launched')
    }
    notes = [19, 7, 16, 14];

    exo() {
        hello("Robert");
        const conteneur = document.querySelector('#chanson');
        sourisVerte(conteneur);
        fibo(10);
        moyenne(this.notes);
    }

}

let start = new Main();
start.exo();
