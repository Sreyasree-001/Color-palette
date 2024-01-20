import rgbHex from 'rgb-hex';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaRegCopy } from "react-icons/fa";
import { useState } from 'react';

const Colorcard = () => {
    var [text, setText] = useState('white')

    function textColor(r, g, b) {
        var text = 0;
        text = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        return (text >= 128) ? 'black' : 'white';
    }

    function generateColor(r, g, b) {
        let hex = '';
        let newColor = ``
        r = Math.floor((Math.random() * 250));
        g = Math.floor((Math.random() * 250));
        b = Math.floor((Math.random() * 250));
        newColor = `rgb(${r}, ${g}, ${b})`;
        hex = '#' + rgbHex(newColor);
        text = textColor(r, g, b);
        return hex;
    }
    let color = generateColor();
    return (
        <>
            <div
                className='flex justify-center items-center lg:flex-col'>
                <div
                    className='h-20 w-screen mx-2 lg:py-64 lg:w-32 lg:mx-0 xl:py-72 xl:w-32 2xl:py-80 2xl:w-36'
                    style={{ backgroundColor: color, color: text }}
                >
                    <div className='flex items-center space-x-3 mt-5 ml-3 lg:mt-48 lg:flex-col lg:space-x-0 xl:mt-56'>
                    <div>
                            <CopyToClipboard text={color}>
                                <button
                                    >
                                    <FaRegCopy
                                    />
                                </button>
                            </CopyToClipboard>
                        </div>
                        <p className='text-xl font-mono uppercase'>
                            {color}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Colorcard
