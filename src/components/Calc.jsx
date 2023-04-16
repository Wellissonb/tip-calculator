import { useEffect, useState } from "react"
import Discount from "./Discount"

import './Calc.css'

function Calc(){
    const [total,setTotal] = useState(0)
    const [amount,setAmout] = useState(0)
    const [desconto,setDesconto] = useState(0)
    const [billvalue,setBillValue] = useState(0)
    const [peopleValue,setPeople] = useState(null)

    const cianoEscuro = 'hsl(183, 100%, 15%)'
    const cianoClaro  = 'hsl(172, 67%, 45%)'

    useEffect(()=>{
        const alertError = document.querySelectorAll('.msgError')[1]
        const botoes = document.querySelectorAll('.buttons')
        Array.from(botoes).forEach((elemento)=>{
            elemento.addEventListener('click',(e)=>{
                e.preventDefault()
                for(let i = 0; i<botoes.length; i++){
                    botoes[i].style.color = 'white'
                    botoes[i].style.backgroundColor = cianoEscuro
                    
                }
                custom.value = ''
                elemento.style.backgroundColor = cianoClaro
                elemento.style.color = cianoEscuro
                setDesconto(parseFloat(elemento.id))
            })
           
        })

        const bill = document.querySelector('#bill')
        bill.addEventListener('keyup',(e => {
            setBillValue(Number(e.target.value))
        }))
        
        const people = document.querySelector('#person')
        people.addEventListener('keyup',(e => {
            setPeople(Number(e.target.value))
        }))

        const custom = document.querySelector('#custom')
        custom.addEventListener('keyup',(e)=>{
            setDesconto(Number(e.target.value))
        })

        custom.addEventListener('focus',()=>{
            for(let i = 0; i  <botoes.length; i++){
                botoes[i].style.color = 'white'
                botoes[i].style.backgroundColor = cianoEscuro
            }
        })

        if(peopleValue > 0){

            let gorjeta = (billvalue * desconto) / 100
            let total = gorjeta + billvalue
            let totalDividido = total / peopleValue

            setTotal(totalDividido)
            setAmout(gorjeta)
            alertError.style.opacity = 0;

        }else if (peopleValue === 0 || peopleValue < 0){
            alertError.style.opacity = 1;
        } 


        const resetButton = document.querySelector('.resetButton')
        if (peopleValue <= 0){
            document.querySelector('.resetButton').disabled = true
            resetButton.style.cursor = 'not-allowed'
            resetButton.style.opacity = '0.2'
        }else{
            resetButton.style.cursor = 'pointer'
            document.querySelector('.resetButton').disabled = false
            resetButton.style.opacity = '1'
        }   

        resetButton.addEventListener('click',(e)=>{
                e.preventDefault()
                setTotal(0)
                setAmout(0)
                setDesconto(0)
                setBillValue(0)
                setPeople(null)
                bill.value = ''
                people.value = ''
                custom.value = ''
        })
     
    }) 
  
    return (
        <section className="calcContainer">
            <div className="finalCusts">
                <div className="valueContainer">
                <p className="categ">Tip Amount</p>
                <p className="pPerson">/ person</p>
                </div>
                <h3 className="amountCusts">{amount}</h3>
            </div>

            <div className="finalCusts">
            <div className="valueContainer">
            <p className="categ">Total</p>
            <p className="pPerson">/ person</p>
            </div>
            <h3 className="totalCusts">{total}</h3>
            </div>
            <button className="resetButton">RESET</button>
        </section>
    )
}

export default Calc