import styled from "styled-components";
import AnswerCard from "../css/answerCard";

const BUTTONS = [{resp:'nao'},{resp:'quase'},{resp:'zap'}];

export default function CardAnswer(props){
    const {setTrocar, answer, answerCounter, setAnswerCounter, arrayAnswers, setArrayAnswers, setColor, setTextDec, setImg, imagens} = props;

    //let letrasSelecionadas = [...selecionadas, letra];
    //setSelecionadas(letrasSelecionadas);

    function responder(resp){
        let newCounter = answerCounter + 1;
        setAnswerCounter(newCounter);

        let array = [];

        if(resp === 'N'){
            setImg(imagens[0]);
            setColor('#FF3030');
            array=[...arrayAnswers, resp];
        }
        else if(resp === 'Q'){
            setImg(imagens[1]);
            setColor('#FF922E');
            array=[...arrayAnswers, resp];
        }
        else if(resp === 'Z'){
            setImg(imagens[2]);
            setColor('#2FBE34');
            array=[...arrayAnswers, resp];
        }
        setArrayAnswers(array);
        setTextDec('line-through');
        setTrocar('');
    }
    
    
    return (
        <AnswerCard>
            <p>{answer}</p>
            <div>
                <NaoLembrei onClick={() => responder('N')} >Não lembrei</NaoLembrei>
                <Quase onClick={() => responder('Q')}>Quase não lembrei</Quase>
                <Zap onClick={() => responder('Z')}>Zap!</Zap>
            </div>
        </AnswerCard>
        
    );
}
const NaoLembrei = styled.button`
    width: 83px;
    height: 37px;
    background-color: #FF3030;
    border-radius: 5px;  
    border: none;
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #ffffff;
`
const Quase = styled(NaoLembrei)`
    background-color: #FF922E;
`
const Zap = styled(NaoLembrei)`
    background-color: #2FBE34;
;
`
