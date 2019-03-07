import {from, Observable, Observer, range} from 'rxjs';
import {filter, map, reduce} from "rxjs/operators";
export const hello = (nom: string) => {
    console.log('Bienvenu ' + nom);
}

export const sourisVerte = (conteneur: Element) => {
    let source$ = new Observable((observer: Observer<any>) => {
        observer.next("Une souris vert-TEUH");
        observer.next("Qui courrait dans l'herb-BEUH,");
        observer.next("Je l'attrape par la QUEUH.");
        observer.next("Je la montre à ces messieurs.");
        observer.next("Ces messieurs me disent - EUH:");
        observer.next("Trempez la dans l'huile,");
        observer.next("Trempez la dans l'eau,");
        observer.next("Ca fera un escargot tout CHAUD.");
        observer.next("Je la mets dans mon chapeau");
        observer.next("Elle me dit qu'il fait trop chaud.");
        observer.next("Je la mets dans mon tiroir");
        observer.next("Elle me dit qu'il fait trop noir.");
        observer.next("Je la mets dans ma culotte (pas très malin)");
        observer.next("Elle me fait trois petites crottes (bah oui mais voila forcemment aussi");
    });
    source$.subscribe((str: string) => {
        let li = document.createElement('li');
        let text = document.createTextNode(str);
        li.appendChild(text);
        conteneur.appendChild(li);
    })
}


export const exo1 = (lb: number, hb: number) => {
    const numbers = range(lb, hb);
    numbers.subscribe(x => console.log(x));
}

export const exo2 = (lb: number, hb: number) => {
    const numbers = range(lb, hb);
    numbers.pipe(filter(val => val % 2 === 0)).subscribe(x => console.log(x));
}
export const exo3 = (lb: number, hb: number) => {
    const numbers = range(lb, hb);
    const nombresImpaires = numbers.pipe(filter(val => val % 2 !== 0));
    nombresImpaires.pipe(map(x => x * 2 + 1)).subscribe(x => console.log(x));
}

export const fibo = (n: number) => {
    let fibon = new Observable((observer: Observer<any>) => {
        let x1: number = 0;
        let x2: number = 1;
        observer.next(x1);
        observer.next(x2);
        let tmp: number;
        for (let i: number = 0 ; i < n ; i++) {
            tmp = x1;
            x1 = x2;
            x2 = x1 + tmp;
            observer.next(x2);
        }
        observer.complete();
    })

    fibon.subscribe( x => console.log(x));
}

export const moyenne = (notes: number[]) => {
    const tabNotes = from(notes).pipe(reduce( (x, y) => x + y ),map( x => x / notes.length)).subscribe(x => console.log(x));
}


