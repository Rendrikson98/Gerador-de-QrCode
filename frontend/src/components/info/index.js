import React from 'react';

import './style.css';

export default function Info(){
    return(
        <div className='containerInfo'>
            <div className='rowInfoTitle'>
                <h1>O que o QR Code?</h1>
            </div>
            <div className='rowInfo'>
                <p>
                QR Código é um código de barras o mesmo podemos chamar de código barrametrico bidimensional que pode ser facilmente escaneado usando a maioria dos telefones celulares equipados com câmera. Esse código é convertido em texto (interativo), um endereço URI, um número de telefone, uma localização georreferenciada, um e-mail, um contato ou um SMS.
                </p>
                <br/>
                <p>
                Inicialmente empregado para catalogar peças na produção de veículos, hoje o QR Code é usado no gerenciamento de inventário e controle de estoque em indústrias e comércio. Desde 2003, foram desenvolvidas aplicações que ajudam usuários a inserir dados em telefone celular (telefone móvel) usando a câmera do aparelho. Os códigos QR são comuns também em revistas e propagandas, para registrar endereços e URLs, bem como informações pessoais detalhadas. Em cartões de visita, por exemplo, o código QR facilita muito a inserção desses dados em agendas de telefones celulares. Programas de captura ou PCs com interface RS-232C podem usar um escâner para capturar as imagens
                </p>
                <br/>
                <p>
                O padrão japonês para o código QR, JIS X 0510, foi lançado em janeiro de 1999 e corresponde ao padrão internacional ISO/IEC 18004, tendo sido aprovado em junho de 2000. Segundo o site da Denso-Wave, o "código QR é aberto para uso e sua patente, pela Denso-Wave, não é praticada".
                </p>
            </div>
        </div>
    )
}