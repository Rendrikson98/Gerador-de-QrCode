import React, { useState } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import api from '../../server/api';
import Menu from '../Menu';
import Info from '../info';

import './style.css';

export default function InitialPage(){

    const [adress, setAdress] = useState('');
    const [baseUrl, setBaseURL] = useState('http://localhost:3333');
    const [url, setUrl] = useState('qrcodePng?url=www.example.com');

    async function generetor(value){
        const resultApi = await api.get(`qrcodePng?url=${value}`);
        setBaseURL(resultApi.config.baseURL);
        setUrl(resultApi.config.url);
    }

    function donwloadPng(){
        api({ 
            url:`${baseUrl}/${url}`, 
            method:'GET', 
            responseType: 'blob' 
        }) 
        .then((response) => { 
            const url = window.URL 
            .createObjectURL(new Blob([response.data])); 
                    const link = document.createElement('a'); 
                    link.href = url; 
                    link.setAttribute('download', 'qrCodeNow.png'); 
                    document.body.appendChild(link); 
                    link.click(); 
        }) 
    }

    function donwloadSvg(){
        api({ 
            url:`${baseUrl}/qrcode?url=${adress}`, 
            method:'GET', 
            responseType: 'blob' 
        }) 
        .then((response) => { 
            const url = window.URL 
            .createObjectURL(new Blob([response.data])); 
                    const link = document.createElement('a'); 
                    link.href = url; 
                    link.setAttribute('download', 'qrCodeNow.svg'); 
                    document.body.appendChild(link); 
                    link.click(); 
        }) 
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
                            <button type='button' onClick={() => donwloadPng()}>
                                <AiOutlineArrowDown size={15}/>
                                PNG
                            </button>
                            <button type='button' onClick={() => donwloadSvg()}>
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