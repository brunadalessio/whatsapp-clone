import React from 'react';
import './ListaConversa.css';
import { Avatar } from '@mui/material';

const ListaConversa = ({onClick, ativo, dados}) => {
    return ( 
        <div className={`listaConversa ${ativo?'active':''}`} onClick={onClick}>
            <Avatar className='listaConversa__avatar' src={dados.img}/>
            <div className='listaConversa__linhas'>
                <div className='listaConversa__linha'>
                    <div className='listaConversa__nome'>{dados.nome}</div>
                    <div className='listaConversa__data'>13:15</div>
                </div>
                <div className='listaConversa__linha'>
                    <div className='listaConversa__ultimaMsg'>
                        <p className=''>Alô, você tá aí? testetestetestetestetestetestetestetestetesteteste</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListaConversa;