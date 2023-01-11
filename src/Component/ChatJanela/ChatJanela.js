import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import './ChatJanela.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
// import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import CloseIcon from '@mui/icons-material/Close';

const ChatJanela = () => {
        const [abrirEmoji, setAbrirEmoji] = useState(false);

        const handleClicarEmoji = () =>{
            
        }

        const handleEmojiAbrir = () =>{
            setAbrirEmoji(true);
        }

        const handleEmojiFechar = () =>{
            setAbrirEmoji(false);
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
                            <InsertEmoticonIcon/>
                        </div>
                        
                        <div className='chatJanela__botao'>
                            <AttachFileIcon/>
                        </div>
                    </div>
                    <div className='chatJanela__inputarea'>
                        <input className='chatJanela__input' type='text' placeholder='Mensagem'/>
                    </div>
                    <div className='chatJanela__pos'>
                        <div className='chatJanela__botao'>
                            <MicIcon/>
                        </div>
                    </div>
                </div>
            </div>
         );
    
}
 
export default ChatJanela;