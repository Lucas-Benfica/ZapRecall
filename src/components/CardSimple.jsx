import SimpleCard from "../css/simpleCard";
import setinha from "../assets/seta_play.png";
import { useState } from "react";

export default function CardSimple(props){

    const {setTrocar, number, color, textDec, img} = props;


    function trocarEntreCards(){

        if(img === setinha){
            setTrocar('question');
        }

    }

    return (
        <SimpleCard newColor={color} newTextDec={textDec} >
                <p>Pergunta {number}</p>
                <img src={img} 
                onClick={trocarEntreCards}
                />
        </SimpleCard>
    )
}