/*----------------------------------TRACCIA----------------------------------------------

Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
 per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz” al posto del numero.
 Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.
Prima di partire a scrivere codice poniamoci qualche domanda:
 Come faccio a sapere se un numero è divisibile per un altro?
 Abbiamo visto qualcosa di particolare che possiamo usare?
 Consigli del giorno:
 Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
 Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Non complichiamoci la vita con soluzioni complesse: la strada semplice è quasi sempre la migliore
BONUS 1:
Crea un elemento che faccia da contenitore nel DOM e poi riempilo con i tuoi elementi via JS.
Puoi usare varie tecniche  (template literals, innerHTML, appendecc)
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Come abbiamo visto puoi  usare varie tecniche (style , className, classList)

---------------------------------------------------------------------------------------*/

console.log('JS OK');

/*------------------------------------TODO-----------------------------------------------

1. Create loop from 1 to 100
2. Verify if number is divisible by 3
    2.1 if true verify if it's divisible by 5
        2.1.1 if true print FizzBuzz
        2.1.2 if false print Fizz
3. Verify if number is divisible by 5
    3.1 if true print Buzz
4. If all the above is false print the number

----------------------------------------------------------------------------------------*/

//1. Create loop from 1 to 100

for ( i = 1; i <= 100; i++){

    //2. Verify if number is divisible by 3

    if (i % 3 === 0){

        //2.1 if true verify if it's divisible by 5

        if(i % 5 === 0){
            //2.1.1 if true print FizzBuzz
            console.log('FizzBuzz');
        }
        else{
             //2.1.2 if false print Fizz
             console.log('Fizz');

        }
    } 
    //3. Verify if number is divisible by 5
    else if (i % 5 === 0){
        //3.1 if true print Buzz
        console.log('Buzz');
    } 
    //4. If all the above is false print the number
    else{
        console.log(i);
    }

}