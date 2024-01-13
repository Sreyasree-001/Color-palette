
import  { useState } from 'react';
import './App.css'
import rgbHex from 'rgb-hex';
import {CopyToClipboard} from 'react-copy-to-clipboard';

function App() {
  const [value, setValue] = useState("");
  
  function generateColor(r, g, b) {
    let newColor = ``
    r = Math.floor((Math.random() * 250));
    g = Math.floor((Math.random() * 250));
    b = Math.floor((Math.random() * 250));
    newColor = `rgb(${r}, ${g}, ${b})`
    return newColor;
  }


  const handleColor = () => {
    const colorCards = document.querySelectorAll('.color-card');
    colorCards.forEach(card => {
      const newColor = generateColor();
      card.querySelector("div").style.background = newColor;
      card.querySelector("div").innerHTML ="#" + rgbHex(newColor);
    })
  }

  const handleFirst = () => {
    const val = document.querySelectorAll('.color-card')[0].children.card1.outerText;
    setValue(val)
  }
  const handleSecond = () => {
    const val = document.querySelectorAll('.color-card')[1].children.card2.outerText;
    setValue(val)
  }
  const handleThird = () => {
    const val = document.querySelectorAll('.color-card')[2].children.card3.outerText;
    setValue(val)
  }
  const handleFourth = () => {
    const val = document.querySelectorAll('.color-card')[3].children.card4.outerText;
    setValue(val)
  }
  const handleLast = () => {
    const val = document.querySelectorAll('.color-card')[4].children.card5.outerText;
    setValue(val)
  }



  return (
    <div className='h-screen bg-[url("https://images.pexels.com/photos/7135053/pexels-photo-7135053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] bg-no-repeat bg-center bg-cover flex justify-center content-center'
    >
      <div className='flex flex-col justify-center items-center w-64 h-3/4 my-10 border-solid border-2 transition duration-200 md:w-2/4 lg:w-2/4 '>
        <div>
          <h1
            className='font-serif mx-auto font-bold text-xl md:text-3xl lg:text-3xl'
          >Generate new colors!!</h1>
        </div>
        <div className=' space-x-2 my-8'>
          <button
            className='h-10 w-40 bg-purple-500  text-center text-black border-solid border-2 border-purple-800 rounded-md'
            onClick={handleColor}
          >Generate
          </button>
        </div>
        <div className='flex flex-col justify-center md:grid'>
          <div>
            <div className='color-card flex mt-1'>
              <CopyToClipboard 
              text={value}
              >
              <div
                className='bg-gray-50 w-32 h-14 mx-4 border-solid border-2 border-black text-center cursor-pointer md:w-40 lg:w-56'
                id='card1'
                onClick={handleFirst}
                >#f9fafb
              </div>
              </CopyToClipboard>
            </div>
          </div>
          <div>
            <div className='color-card flex mt-1'>
              <CopyToClipboard text={value}>
              <div
                className='bg-gray-300 w-32 h-14 mx-4 border-solid border-2 border-black text-center cursor-pointer md:w-40 lg:w-56'
                id='card2'
                onClick={handleSecond}
                >#d1d5db
              </div>
              </CopyToClipboard>
            </div>
          </div>
          <div>
            <div className='color-card flex mt-1'>
              <CopyToClipboard text={value}> 
              <div
                className='bg-gray-500 w-32 h-14 mx-4 border-solid border-2 border-black text-center cursor-pointer md:w-40 lg:w-56'
                id='card3'
                onClick={handleThird}
                >#6b7280
              </div>
              </CopyToClipboard>
            </div>
          </div>
          <div>
            <div className='color-card flex mt-1'>
              <CopyToClipboard text={value}>
              <div
                className='bg-gray-800 w-32 h-14 mx-4 border-solid border-2 border-black text-center cursor-pointer md:w-40 lg:w-56'
                id='card4'
                onClick={handleFourth}
                >#1f2937
              </div>
              </CopyToClipboard>
            </div>
          </div>
          <div>
            <div className='color-card flex mt-1'>
              <CopyToClipboard text={value}>
              <div
                className='bg-gray-950 w-32 h-14 mx-4 border-solid border-2 border-black text-center cursor-pointer md:w-40 lg:w-56'
                id='card5'
                onClick={handleLast}
                >#030712
              </div>
              </CopyToClipboard>
            </div>
          </div>
        </div>
        <p className='mt-2'>Double click on the color to copy</p>
      </div>
    </div>
  )
}

export default App






/**
 * import tkinter as tk
import random

def generate_color():
    r = random.randint(0, 255)
    g = random.randint(0, 255)
    b = random.randint(0, 255)
    color = f'#{r:02x}{g:02x}{b:02x}'
    return color

def generate_palette():
    num_colors = int(select_field.get())
    for widget in color_frame.winfo_children():
        widget.destroy()
    for i in range(num_colors):
        color = generate_color()
        color_label = tk.Label(color_frame, bg=color, width=10, height=5)
        color_label.grid(row=i, column=0, padx=5, pady=5)
        hex_label = tk.Label(color_frame, text=color, width=10)
        hex_label.grid(row=i, column=1, padx=5, pady=5)

root = tk.Tk()
root.title("Color Palette Generator")
root.geometry("300x600")

select_field = tk.StringVar(value="1")
select = tk.OptionMenu(root, select_field, "1", "2", "3", "4", "5")
select.pack(side="top", pady=10)

generate_button = tk.Button(root, text="Generate", command=generate_palette)
generate_button.pack(side="top")

color_frame = tk.Frame(root)
color_frame.pack(pady=10)

root.mainloop()

<Colorbox
          color={color}
          visibility={visibility}
          value={value}
          hex={hex}
        />

        setColor(`rgb(${r}, ${g}, ${b})`);
    setHex(rgbHex(`rgb(${r}, ${g}, ${b})`))
 */