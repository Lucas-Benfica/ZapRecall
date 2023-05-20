import SimpleCard from "../css/simpleCard";
import setinha from "../assets/seta_play.png";
import { useState } from "react";

export default function CardSimple(props){

    const {setTrocar, number, color, textDec, img, imagens} = props;
    
    let test = '';

    function trocarEntreCards(){

        if(img === setinha){
            setTrocar('question');
        }

    }

    if(img === imagens[0]){
        test = 'no-icon';
    }
    else if(img === imagens[1]){
        test = 'partial-icon';
    }
    else if(img === imagens[2]){
        test = 'zap-icon';
    }

    return (
        <SimpleCard newColor={color} newTextDec={textDec} >

                <p data-test="flashcard-text">Pergunta {number}</p>
                
                {(img === setinha) ? (<img data-test="play-btn"  src={img} onClick={trocarEntreCards}/>) : <img src={img} data-test={test} />}
                
        </SimpleCard>
    )
}