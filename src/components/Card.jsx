import { useState } from "react";
import CardAswer from "./CardAnswer";
import CardQuestion from "./CardQuestion";
import CardSimple from "./CardSimple";


export default function Card(props){

    const {number, question, answer, setAnswerCounter, setArrayAnswers} = props;
    
    const [trocar, setTrocar] = useState('');
    const [color, setColor] = useState('#333333');
    const [textDec, setTextDec] = useState('normal');

    if(trocar === ''){
        return (
            <CardSimple setTrocar={setTrocar} number={number} color={color} textDec={textDec} />
        );
    }
    else if(trocar === 'question'){
        return (
            <CardQuestion setTrocar={setTrocar}/>
        );        
    }
    else if(trocar === 'answer'){
        return (
            <CardAswer setTrocar={setTrocar} />
        );
    }

}

