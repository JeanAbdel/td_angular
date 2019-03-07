import {Observable, Observer} from 'rxjs';
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

}
