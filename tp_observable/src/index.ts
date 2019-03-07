import {hello, sourisVerte} from "./exo";

export class Main {
    constructor() {
        console.log('TypeScript Webpack starter launched')
    }

    exo() {
        hello("Robert");
        const conteneur = document.querySelector('#chanson');
        sourisVerte(conteneur);
    }

}

let start = new Main();
start.exo();
