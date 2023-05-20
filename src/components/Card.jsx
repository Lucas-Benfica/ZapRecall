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
            <CardSimple data-test="flashcard"
            setTrocar={setTrocar} 
            number={number} img={img} imagens={imagens}
            color={color} textDec={textDec} />
        );
    }
    else if(trocar === 'question'){
        return (
            <CardQuestion data-test="flashcard" 
            setTrocar={setTrocar} question={question} />
        );        
    }
    else if(trocar === 'answer'){
        return (
            <CardAswer data-test="flashcard"
            setTrocar={setTrocar} answer={answer}
            answerCounter={answerCounter} setAnswerCounter={setAnswerCounter} 
            arrayAnswers={arrayAnswers}  setArrayAnswers={setArrayAnswers} 
            setColor={setColor} setTextDec={setTextDec}
            setImg={setImg} imagens={imagens} />
        );
    }

}

