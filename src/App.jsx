
import { useState } from 'react';
import './App.css'
import QuoteCard from './components/QuoteCard';
import Quotes from "./json/Quotes.json";
import cloud from "./assets/cloud.png";

const arrayColors = ['#504903', '#C1C249', '#CC299E', '#A9992F', '#CEE3EF', '#3D617E', '#1FFD9D', '#12D0C0', '#6DA27B', '#0CC4EB', '#8755F3', '#37D10B', '#8B3569', '#187DEE', '#BA3717', '#5EFFED', '#5E0202', '#F81975', '#E7013D', '#EA41EC', '#653681', '#89524A', '#41E3D6', '#E91B4E', '#3F29DB', '#ADD29A', '#8A81E4', '#71B9E6', '#9E578D', '#7FC4FD', '#087ED9', '#71FCC0', '#964F90', '#1F5351' , '#D7B764', '#7383B8', '#66D3D4', '#2607BC', '#D2915D', '#4F94FE', '#94C8DA', '#603172', '#6DDCC0', '#F56698', '#EAFE4E', '#02ABC5']

function App() {
  
  const getNumberRandom = arr =>{
    const numberRandom = Math.floor(Math.random() * arr.length)
    return arr[numberRandom]
  }
  
  const [quoteRandom, setQuoteRandom] = useState(getNumberRandom(Quotes))
  const [colorRandom, setColorRandom] = useState(getNumberRandom(arrayColors))

  const nextRandom = () =>{
    setQuoteRandom(getNumberRandom(Quotes))
    setColorRandom(getNumberRandom(arrayColors))
  }

  return (
    <div className="App" style={{backgroundColor: colorRandom}}>
      <div className='clouds cloud1'>
        <img src={cloud} alt="" />
      </div>
      <div className='clouds cloud2'>
        <img src={cloud} alt="" />
      </div>
      <div className='clouds cloud3'>
        <img src={cloud} alt="" />
      </div>
      <div className='clouds cloud4'>
        <img src={cloud} alt="" />
      </div>
      <QuoteCard 
      index={quoteRandom}
      nextRandom={nextRandom}
      colorRandom={colorRandom}
      />
    </div>
  )
}

export default App
