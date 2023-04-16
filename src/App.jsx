import './App.css';

import Discount from './components/Discount';
import Calc from './components/Calc'
import Title from './images/logo.svg'

function App() {

  return (
    <>
    <h1 id='title'><img src={Title} alt=""/></h1>
    <section className='main'>
    <Discount />
    <Calc />
    </section>
    </>
  );
}


export default App;
