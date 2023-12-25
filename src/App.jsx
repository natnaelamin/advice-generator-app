import { useState, useEffect } from 'react'

function App() {

  const [buttonClick, setButtonClick] = useState(0)
  const [data, setData] = useState(
    { id: "", advice: "" }
  );

  const fetchAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setData({ id: data.slip.id, advice: data.slip.advice });
  };

  useEffect(() => {
    fetchAdvice();
  }, [buttonClick]);

  const newAdvice = () => {
    setButtonClick(buttonClick + 1);
  };
  

  return (
    <div className='md:px-96 px-5 py-44 bg-slate-900 h-screen bg-cover'>
      <div className='bg-slate-700 text-white py-10 md:px-12 px-5 md:mx-10 rounded-xl text-center relative'>
          <p className='text-green-400 font-bold text-center mb-6'>ADVICE #{data.id}</p>
          <p className=' text-white text-3xl text-center font-bold mb-10 '>"{data.advice}"</p>
          <img className='mb-5' src="/images/pattern-divider-desktop.svg" alt="" />
          <button className='bg-green-400 md:ml-2 right-32 mr-1  mt-3 md:left-56 px-4 py-4   left rounded-full absolute'
          onClick={newAdvice} 
          >
            <img  src="/images/icon-dice.svg" alt=" dice" /></button>
      </div>
    </div>
  )
}

export default App
