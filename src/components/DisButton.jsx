import './DisButton.css'

function DisButton({value}){
    return (
        <button className="buttons" id={value}><span id='porcent'>{value}</span></button>
    )
}

export default DisButton