// cosa è una funzione (funzione pura)? dal punto di vista della fp
// funzione impura è una procedura

// Una funzione pura è una procedura che dato lo stesso input restituisce
// sempre lo stesso output e non ha alcun side effect osservabile
function double(n: number): number {
  // 1) è totale: per ogni input c'è un output
  return n * 2
}

const x = double(2)
const y = double(2)

// 2) sostituisco la funzione con il suo risultato e il programma non cambia comportamento
// trasparenza referenziale
const x2 = double(2)
const y2 = x2


// procedure
function inverse(n: number): number {
  // lancio eccezione :(
  if (n === 0) throw new Error('cannot divide by zero')
  return 1 / n
}

function log(x: any): void {
  console.log(x)
}

let i = 0
function increase(): void {
  i++
}

// ha un side effect: http request
async function getSomeData(): Promise<string> {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
}

// --

// domanda: come rendo pure queste procedure? cosa significa?
// perché renderle pure?
// Perché è così importante la trasparenza referenziale ? Perché permette di:
// ragionare localmente sul codice(ovvero non ho bisogno di conoscere un contesto più ampio per capire un frammento di codice)
// rifattorizzare senza cambiare il comportamento del programma (per la definizione stessa di trasparenza referenziale)
//
// come? creazione, manipolazione, composizioni di descrizioni (pure) degli effetti...esecuzione rimandata il più possibile, alla fine

// inverse -> Either.Option
// log -> IO
// increase -> State
// getSomeData -> TaskEither