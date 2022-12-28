import { Avatar } from '@mui/material';
import React, { Component } from 'react';
import './ChatJanela.css'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SearchIcon from '@mui/icons-material/Search';

class ChatJanela extends Component {
    render() { 
        return ( 
            <div className='chatJanela'>
                <div className='chatJanela__header'>
                    <div className='chatJanela__headerinfo'>
                        <Avatar className='chatJanela__avatar'/>
                        <div className='chatJanela__nome'>Fulano</div>
                    </div>
               
                    <div className='chatJanela__botoes'>
                        <div className='chatJanela__botao'>
                            <AttachFileIcon/>
                        </div>
                        <div className='chatJanela__botao'>
                            <SearchIcon/>
                        </div>
                    </div>
                </div>
                <div className='chatJanela__body'>

                </div>
                <div className='chatJanela__footer'>

                </div>
            </div>
         );
    }
}
 
export default ChatJanela;