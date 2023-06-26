import React, { useState } from 'react';
import './teste.css'
import axios from 'axios';

const client = axios.create({
    headers:{Authorization: `Bearer ${process.env.REACT_APP_OPENAI_TOKEN}`}
});

export default function Teste() {
    const [answer, setAnswer] = useState(" ");
    const [question, setQuestion] = useState("");

    function handleSubmit(event) {
        if(event.keyCode === 13 && event.shiftKey === false){
        setAnswer('...')
        const params= {
            model : "text-davinci-003",
            prompt: question,
            max_tokens: 4000,
            temperature: 1,
        };

        client
            .post("https://api.openai.com/v1/completions", params)
            .then((result)=>{
                setAnswer(result.data.choices[0].text)
                setQuestion('')
            })
            .catch(err => {
                setAnswer('Ocorreu um problema')
                setQuestion('')
            });
    }
    }

    return(
        <div class="content">
            
            <textarea 
                id="result" 
                rows="10"
                placeholder="Resposta da IA"
                disabled
                value={answer}
            ></textarea>
    
            <textarea
                id="inputQuestion"
                placeholder="Pergunte algo"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(event)=> handleSubmit(event)}
            ></textarea>

        </div>
    )

}