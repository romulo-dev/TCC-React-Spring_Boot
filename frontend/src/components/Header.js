import './Header.css'
import React from 'react'
import Navbar from './Navbar/Navbar';
import { useState } from 'react';
import Tabela from './Tabela/Tabela'
import CadastroLider from './CadastroEquipe/CadastroEquipe'

 function Header({childToParent}){


    return(
        <header className="header ">
            <div className="logo"></div>
            <div className='nav'>
                <nav>
                    <ul>
                        
                        {/* <li ><a onClick={() => setLink(CadastroLider)}>Cadastrar dados</a></li>
                        <li ><a onClick={() => setLink(Tabela)}>Listar atletas</a></li> */}
                        {/* <li ><a onClick={() => childToParent(CadastroLider)}>Cadastrar dados</a></li>
                        <li ><a onClick={() => childToParent(Tabela)}>Listar atletas</a></li> */}
                        <li ><a onClick={() => childToParent(1)}>Cadastrar equipes</a></li>
                        <li ><a onClick={() => childToParent(2)}>Listar equipes</a></li>
                    </ul> 
                </nav>
            
        </div>
            <div className="avatar"> </div>
        </header>
    )
}
export default Header;