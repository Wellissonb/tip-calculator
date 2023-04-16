import { useEffect } from 'react'
import './Input.css'

function Input({text,icon,name,handleChange,alert}){
    const msg = document.querySelector('.msgError')
    
    console.log(msg)
    useEffect(()=>{
        console.log(msg)
    })

    return (
        <>   
       <div style={{display: 'flex', justifyContent:'space-between',alignItems: 'center', width: '100%'}}> <label htmlFor={name}>{text}</label> <p className='msgError'>{alert}</p></div>
        <div className="inputContainer">
        <img className="icon" src={icon}/>
        <input type="number" name={name} id={name} placeholder="0" onChange={handleChange}/>
        </div>
        </>
    )
}

export default Input
