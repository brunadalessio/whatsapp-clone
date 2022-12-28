import React, { Component } from 'react';
import './ChatIntro.css';
import LockIcon from '@mui/icons-material/Lock';

class ChatIntro extends Component {
    render() { 
        return ( 
            <div className='chatIntro'>
                <img src='https://media.discordapp.net/attachments/736463094154526810/1054958746327068773/image.png' alt='Imagem da Intro'/>
                <h1>WhatsApp Web</h1>
                <h2>Envie e receba mensagens sem precisar manter seu celular conectado à internet.
                <br/>
                Use o WhatsApp em até quatro aparelhos conectados e um celular ao mesmo tempo.</h2>

                <div className='chatIntro__auth'>
                    <LockIcon className='chatIntro__cadeado'/> Protegido com a criptografia de ponta a ponta
                </div>
            </div>
         );
    }
}
 
export default ChatIntro;