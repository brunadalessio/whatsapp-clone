import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import './ChatJanela.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import CloseIcon from '@mui/icons-material/Close';

const ChatJanela = () => {
        const [abrirEmoji, setAbrirEmoji] = useState(false);
        const [texto, setTexto] = useState('');

        const handleClicarEmoji = (e, emojiObject) =>{
            setTexto(texto + emojiObject.emoji);
            // console.log(emojiObject.emoji);
        }

        const handleEmojiAbrir = () =>{
            setAbrirEmoji(true);
        }

        const handleEmojiFechar = () =>{
            setAbrirEmoji(false);
        }

        const handleClicarEnviar = () =>{

        }

        const handleClicarMic = () =>{

        }

        return ( 
            <div className='chatJanela'>
                <div className='chatJanela__header'>
                    <div className='chatJanela__headerinfo'>
                        <Avatar className='chatJanela__avatar' src='https://www.w3schools.com/w3images/avatar2.png'/>
                        <div className='chatJanela__nome'>Fulano Exemplo</div>
                    </div>
               
                    <div className='chatJanela__botoes'>
                        <div className='chatJanela__botao'>
                            <SearchIcon/>
                        </div>
                        <div className='chatJanela__botao'>
                            <MoreVertIcon/>
                        </div>
                    </div>
                </div>
                <div className='chatJanela__body'>

                </div>
                <div className='chatJanela__emojiarea' style={{height: abrirEmoji ? '200px' : '0px'}}>
                    <EmojiPicker 
                    onEmojiClick={handleClicarEmoji} 
                    searchDisabled 
                    skinTonesDisabled 
                    width='auto' 
                    height='200px'
                    />
                </div>
                <div className='chatJanela__footer'>
                    <div className='chatJanela__pre'>

                        <div className='chatJanela__botao' onClick={handleEmojiFechar} style={{width: abrirEmoji ? '40px' : '0px'}}>
                            <CloseIcon/>
                        </div>
                        
                        <div className='chatJanela__botao' onClick={handleEmojiAbrir}>
                            <InsertEmoticonIcon style={{color: abrirEmoji ? '#009688' : ''}}/>
                        </div>
                        
                        <div className='chatJanela__botao'>
                            <AttachFileIcon/>
                        </div>
                    </div>
                    <div className='chatJanela__inputarea'>
                        <input 
                        className='chatJanela__input' 
                        type='text' 
                        placeholder='Mensagem'
                        value={texto}
                        onChange={e=>setTexto(e.target.value)}
                        />
                    </div>
                    <div className='chatJanela__pos'>
                        {texto !== '' && 
                            <div className='chatJanela__botao' onClick={handleClicarEnviar}>
                                <SendIcon/>
                            </div>
                        }
                        {texto === '' && 
                            <div className='chatJanela__botao' onClick={handleClicarMic}>
                                <MicIcon/>
                            </div>
                        }
                    </div>
                </div>
            </div>
         );
    
}
 
export default ChatJanela;