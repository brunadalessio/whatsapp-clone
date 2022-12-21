import React, { Component } from 'react';
import './ChatIntro.css';

class ChatIntro extends Component {
    render() { 
        return ( 
            <div className='chatIntro'>
                <img src='https://media.discordapp.net/attachments/736463094154526810/1054958746327068773/image.png' alt=''/>
                <h1>WhatsApp Web</h1>
                <h2>Envie e receba mensagens sem precisar manter seu celular conectado à internet.</h2>
                <h2>Ao WhatsApp em até quatro aparelhos conectados e um celular ao mesmo tempo.</h2>
            </div>
         );
    }
}
 
export default ChatIntro;