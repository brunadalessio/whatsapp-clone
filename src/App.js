import React, {useState, useEffect} from 'react';
import './App.css';
import { Avatar } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import ListaConversa from './Component/ListaConversa/ListaConversa';
import ChatIntro from './Component/ChatIntro/ChatIntro';
import ChatJanela from './Component/ChatJanela/ChatJanela';

function App() {
  
  const [listaConversa, setListaConversa] = useState([
    {chatId: 1, nome: 'Fulano', img:'https://www.w3schools.com/w3images/avatar2.png'},
    {chatId: 2, nome: 'Aline', img:'https://www.w3schools.com/w3images/avatar6.png'},
    {chatId: 3, nome: 'Gabriel', img:'https://www.w3schools.com/howto/img_avatar.png'},
    {chatId: 4, nome: 'Mãe', img:'https://www.w3schools.com/howto/img_avatar2.png'}
  ]);
  const [chatAtivo, setChatAtivo] = useState([{}]);

  return (
    <div className='janela__app'>
      <div className='sidebar'>
          <header>
            <Avatar className='header__avatar' src='https://cdn.icon-icons.com/icons2/2643/PNG/512/avatar_female_woman_person_people_white_tone_icon_159360.png' alt='Avatar'/>
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
              <ListaConversa key={key} 
              onClick={()=>setChatAtivo(listaConversa[key])} 
              ativo={chatAtivo.chatId === listaConversa[key].chatId}
              dados={item}
              />
            ))}
          </div>
      </div>
      <div className='conteudo__area'>
        {/* Se existir uma conversa ativa, mostre a janela de Chat */}
        {chatAtivo.chatId !== undefined && 
            <ChatJanela/>
        }
        {/* Senão, mostre a janela de Intro */}
        {chatAtivo.chatId === undefined &&
            <ChatIntro/>
        }
      </div>
    </div>
  );
}

export default App;
