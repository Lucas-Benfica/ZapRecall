import { useState } from "react";
import CardAswer from "./CardAnswer";
import CardQuestion from "./CardQuestion";
import CardSimple from "./CardSimple";
import setinha from "../assets/seta_play.png";
import certo from "../assets/icone_certo.png";
import erro from "../assets/icone_erro.png";
import quase from "../assets/icone_quase.png";

const imagens = [erro, quase, certo];


export default function Card(props){

    const {number, question, answer,answerCounter, setAnswerCounter, arrayAnswers, setArrayAnswers} = props;
   
    const [trocar, setTrocar] = useState('');
    const [color, setColor] = useState('#333333');
    const [textDec, setTextDec] = useState('normal');
    const [img, setImg] = useState(setinha);

    if(trocar === ''){
        return (
            <CardSimple 
            setTrocar={setTrocar} 
            number={number} img={img}
            color={color} textDec={textDec} />
        );
    }
    else if(trocar === 'question'){
        return (
            <CardQuestion setTrocar={setTrocar} question={question} />
        );        
    }
    else if(trocar === 'answer'){
        return (
            <CardAswer 
            setTrocar={setTrocar} answer={answer}
            answerCounter={answerCounter} setAnswerCounter={setAnswerCounter} 
            arrayAnswers={arrayAnswers}  setArrayAnswers={setArrayAnswers} 
            setColor={setColor} setTextDec={setTextDec}
            setImg={setImg} imagens={imagens} />
        );
    }

}

