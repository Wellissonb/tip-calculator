import Input from "./Input"

import DolarIcon from '../images/icon-dollar.svg'
import PersonIcon from '../images/icon-person.svg'
import DisButton from "./DisButton"
import { useEffect } from "react"

import './Discount.css'
function Discount(){

    

    return (

        <section className="formContainer">
        <form className="form">
            <Input text='Bill' name='bill' icon={DolarIcon}/> 
            <h2 id="selectTip">Select Tip %</h2>
            <div className="buttonsContainer">
            <DisButton value={5} />
            <DisButton value={10} />
            <DisButton value={15} />
            <DisButton value={25} />
            <DisButton value={50} />
            <input type="number" placeholder="Custom" id="custom" />
            </div>
            <Input text='Number of People' icon={PersonIcon} name='person' alert={"Can't be zero"}/>
        </form>
        </section>
    )
}

export default Discount