import { Avatar } from '@mui/material';
import React from 'react';
import './App.css';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function App() {
  return (
    <div className='janela__app'>
      <div className='sidebar'>
          <header>
            <Avatar className='header__avatar' src='https://www.w3schools.com/howto/img_avatar.png' alt='Avatar'/>
            <div className='header__botoes'>
              <div className='header__icone'>
                <DonutLargeIcon/>
              </div>
              <div className='header__icone'>
                <ChatIcon/>
              </div>
              <div className='header__icone'>
                <MoreVertIcon/>
              </div>
            </div>
          </header>
          
          <div className='buscar'>
            ...   
          </div>

          <div className='lista__amigos'>
            ...
          </div>
      </div>
      <div className='conteudo__area'>
        ...
      </div>
    </div>
  );
}

export default App;
