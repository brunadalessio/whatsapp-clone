import { Avatar } from '@mui/material';
import React, { Component } from 'react';
import './ChatJanela.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

class ChatJanela extends Component {
    render() { 
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
                <div className='chatJanela__footer'>

                </div>
            </div>
         );
    }
}
 
export default ChatJanela;