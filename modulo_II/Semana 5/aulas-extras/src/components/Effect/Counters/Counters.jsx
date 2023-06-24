import { useEffect, useState } from "react";

export function Counters() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [biggerCounter, setBiggerCounter] = useState(0);

  function retornaMaior(numberOne, numberTwo) {
    if (numberOne > numberTwo) {
      return numberOne;
    } else {
      return numberTwo;
    }
  }

  useEffect(() => {
    document.title = `Clicou ${counter1 + counter2} vezes`;
    setBiggerCounter(retornaMaior(counter1, counter2));
  }, [counter1, counter2]);

  useEffect(() => {
    console.log(
      `Contador Um: ${counter1} | Contador Dois: ${counter2} | Maior contador: ${biggerCounter}`
    );
  }, [counter1, counter2, biggerCounter]);

  return (
    <>
      <div>
        <h1>Exemplo dos Números</h1>
        <p>Contador Um: {counter1}</p>
        <p>Contador Dois: {counter2}</p>
        <p>Maior Contador:{biggerCounter}</p>
      </div>

      <div>
        <button onClick={() => setCounter1(counter1 + 1)}>
          Incrementa o Contador 1
        </button>
        <button onClick={() => setCounter2(counter2 + 1)}>
          Incrementa o Contador 2
        </button>
      </div>
    </>
  );
}
