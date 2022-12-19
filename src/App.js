import React, {useState, useEffect} from 'react';
import './App.css';
import { Avatar } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import ListaConversa from './Component/ListaConversa/ListaConversa';
import ChatIntro from './Component/ChatIntro/ChatIntro';

function App() {
  
  const [listaConversa, setListaConversa] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);

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
            <div className='buscar__input'>
              <SearchIcon fontSize='small' className='buscar__icone'/>
              <input type='search' placeholder='Procurar ou começar uma nova conversa'/>

            </div>
          </div>

          <div className='lista__conversas'>
            {listaConversa.map((item, key)=>(
              <ListaConversa key={key}/>
            ))}
          </div>
      </div>
      <div className='conteudo__area'>
        <ChatIntro/>
      </div>
    </div>
  );
}

export default App;
