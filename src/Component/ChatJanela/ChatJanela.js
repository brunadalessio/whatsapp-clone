import { Avatar } from '@mui/material';
import React, { Component } from 'react';
import EmojiPicker from 'emoji-picker-react';
import './ChatJanela.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
// import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';

class ChatJanela extends Component {
    render() { 

        const handleEmojiClick = () =>{

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
                <div className='chatJanela__emojiarea'>
                    <EmojiPicker onEmojiClick = {handleEmojiClick} searchDisabled skinTonesDisabled width="auto"/>
                </div>
                <div className='chatJanela__footer'>
                    <div className='chatJanela__pre'>
                        <div className='chatJanela__botao'>
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
}
 
export default ChatJanela;