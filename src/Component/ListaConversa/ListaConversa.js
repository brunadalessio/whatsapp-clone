import React from 'react';
import './ListaConversa.css';
import { Avatar } from '@mui/material';

export default ({onClick}) => {
    return ( 
        <div className='listaConversa' onClick={onClick}>
            <Avatar className='listaConversa__avatar'/>
            <div className='listaConversa__linhas'>
                <div className='listaConversa__linha'>
                    <div className='listaConversa__nome'>Aline Targino</div>
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