
import { useState } from 'react';
import './App.css'
import Colorcard from './Components/Colorcard';

function App() {
  const [value, setValue] = useState(false);

  function colorCards() {
    let a = [];
    for (var i = 0; i < 6; i++) {
      a.push(<Colorcard key={i} />)
    }
    return a;
  }
  function handleClick() {
    setValue(false);
    return colorCards()
  }

  return (
    <div className='h-screen w-full bg-white dark:bg-white'
    >
      <div>
        <h1
          className='font-serif mx-auto my-4 flex justify-center items-center font-bold text-xl md:text-3xl lg:text-3xl'
        >Generate new colors!!</h1>
      </div>
      <div className='flex flex-col justify-center bg-white dark:bg-white lg:flex-row lg:mt-4'>
        {
          value ? handleClick() : colorCards()
        }
      </div>
      <div className='flex justify-center items-center'>
        <button 
        onClick={() => setValue(true)}
        className="my-6
                bg-gray-200 text-black px-6 py-2 rounded-lg
            shadow-green-400 shadow-md transition-colors active:bg-slate-300">
        Generate
        </button>
      </div>
    </div>
  )
}

export default App
