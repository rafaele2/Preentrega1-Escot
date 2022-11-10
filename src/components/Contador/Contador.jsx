import {useState} from 'react';

const Contador = () => {
    const [contador, setContador] = useState(1)

    const modificarContador = (operacion)=>{
        if(operacion === "+"){
            if(contador < 10)// establecemenos un maximo ficticio, despues se va a trabajar con stocks
            setContador(contador + 1) //no puedo usar  el operador ++ porque se trata de una constante a la cual no le puedo reasignar un valor "contador= contador +1 solo funciona con let y no es la idea en react"
        } else  {
            if(contador > 1)// para no tener negativo en el contador, no se usa 0 para que el 1 sea el minimo, no tiene sentido comprar 0 de algo
            setContador(contador - 1)
        }
        // operacion === "+"? setContador (contador + 1) : setContador(contador - 1)
function onAdd (){
    console.log(contador)
}
onAdd()
    }

   
    return (
        <>
            <button onClick={()=> modificarContador("+")} className='btn btn-dark'>+</button>
            {contador}
            <button onClick={()=> modificarContador("-")} className='btn btn-light'>-</button>
        </>
    );
}

export default Contador;
