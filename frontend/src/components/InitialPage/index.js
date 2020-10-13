import React, { useState } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai'
import api from '../../server/api';
import Menu from '../Menu';
import Info from '../info';

import './style.css';

export default function InitialPage(){

    const [adress, setAdress] = useState('');
    const [baseUrl, setBaseURL] = useState('http://localhost:3333');
    const [url, setUrl] = useState('qrcodePng?url=www.example.com');

    async function generetor(value){
        const resultApi = await api.get(`qrcode?url=${value}`);
        console.log(resultApi)
        setBaseURL(resultApi.config.baseURL);
        setUrl(resultApi.config.url);
    }

    return(
        <div>
            <Menu />
            <div className='container'>
                <div className='blockInput'>
                    <input type='text' className='inputAdress' value={adress} onChange={e=>setAdress(e.target.value)} placeholder='www.example.com' />
                    <button type='button' className='buttonGeneretor' onClick={() => generetor(adress)}>Gerar</button>
                </div>

                <div className='blockImg'>
                    <div className='qrcode'>
                        <img src={`${baseUrl}/${url}`} />
                        <div className='buttons'>
                            <button type='button'>
                                <AiOutlineArrowDown size={15}/>
                                PNG
                            </button>
                            <button type='button'>
                                <AiOutlineArrowDown size={15}/>
                                SVG
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Info />
        </div>
    )
}