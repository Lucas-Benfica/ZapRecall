import styled from "styled-components";
import semErros from "../assets/party.png"
import comErros from "../assets/sad.png"

export default function MsgResult(props) {
    const { arrayAnswers } = props;
    let msgTop = undefined;
    let image = undefined;
    let msgTxt = undefined;

    if (arrayAnswers.includes('N')) {
        msgTop = ' Putz...';
        image = comErros;
        msgTxt = 'Ainda faltam alguns... Mas não desanime!'
    } else {
        msgTop = ' Parabéns!';
        image = semErros;
        msgTxt = 'Você não esqueceu de nenhum flashcard!';
    }

    return (
        <Mensagem data-test="finish-text">
            <div>
                <img src={image} />
                <h1>{msgTop}</h1>
                
            </div>
            <h2>
                {msgTxt}
            </h2>
        </Mensagem>
    );
}

const Mensagem = styled.div`
    width: 222px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Recursive', sans-serif;

    div{
        display: flex;
        align-items: center;
        justify-content: center:
        height: 23px;
        img{
            width: 23px;
            height: 23px;
        }
        h1{
            font-weight: 700;
            font-size: 18px;
            color: #333333;
        }
    }

    h2{
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #333333;
        margin-top: 14px;
    }
`;