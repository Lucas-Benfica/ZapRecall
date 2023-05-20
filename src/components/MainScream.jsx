import styled from "styled-components";
import logo from "../assets/logo.png";
import ConteinerCards from "./ContainerCards";
import Results from "./Results";
import CARDS from "../deck";
import { useState } from "react";

export default function MainScream(props){
    const { start } = props;
    const [answerCounter, setAnswerCounter] = useState(0);
    const [arrayAnswers, setArrayAnswers] = useState([]);

    return (
        <ConteinerMain start={start.toString()}>
            <Content>
                <img src={logo} alt="zap" />
                <h1>ZapRecall</h1>
            </Content>
            <ConteinerCards cards={CARDS} setAnswerCounter={setAnswerCounter} setArrayAnswers={setArrayAnswers} />
            <Results cont={answerCounter} max={CARDS.length} arrayAnswers={arrayAnswers} />
        </ConteinerMain>
    );
}

const ConteinerMain = styled.div`
    display: ${({start}) => (start === 'true') ? 'flex' : 'none'};
    flex-direction: column;
`;
const Content = styled.div`
    display: flex;
    align-items: center;
    width: 300px;
    height: 100px;
    padding: 20px;
    margin: 0 auto;
    margin-top: 28px;
    margin-bottom: 35px;
    position: relative;
    img{
        width: 52px;
        height: 60px;
    }
    h1{
        font-family: 'Righteous';
        font-size: 36px;
        color: #ffffff;
        margin-left: 20px;
    }
`;