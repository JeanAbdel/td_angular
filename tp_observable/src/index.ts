// import {exo2, exo1, hello, sourisVerte, exo3, fibo, moyenne, progress} from "./exo";
import {exo2, exo1, hello, sourisVerte, exo3, fibo, progress} from "./exo";

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
        // moyenne(this.notes);
        const canvas = <HTMLCanvasElement>document.querySelector('#progress');
        progress(canvas);
    }



}

let start = new Main();
start.exo();
