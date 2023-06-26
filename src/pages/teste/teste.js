import React, { Component } from 'react';
import './teste.css'

class Teste extends React.Component{
    render(){

        return(

        <div class="content">
            
            <textarea id="result" rows="10" placeholder="Resposta da IA" disabled></textarea>
    
            <textarea id="inputQuestion" placeholder="Pergunte algo"></textarea>

        </div>

        )


    }
} export default Teste;

