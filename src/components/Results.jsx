import styled from "styled-components";
import ResultIcons from "./ResultIcons";
import certo from "../assets/icone_certo.png"
import erro from "../assets/icone_erro.png"
import quase from "../assets/icone_quase.png"
import MsgResult from "./MsgResult";

const imagens = [erro, quase, certo];


export default function Results(props){
    
    const {cont, max, arrayAnswers} = props;

    return (
        <Result data-test="footer"> 
            
            <div className="containerResult">

                {(cont === max) ? <MsgResult arrayAnswers={arrayAnswers} /> : null }

                <p  >{cont}/{max} CONCLUÍDOS</p>

                <div>
                    {arrayAnswers.map( (resp, i) => <ResultIcons key={i} resp={resp} imagens={imagens} />  )}
                </div>
            </div>

        </Result>
    );

}
//
const Result = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 2;
    background-color: #ffffff;
    width: 100%;
    height: auto;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    padding: 15px 10px 10px;

    .containerResult{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        p{
            font-family: 'Recursive';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            color: #333333;
            margin: 14px 0 6px;
        }  

        div{
        display: flex;
        align-items: center;
        gap: 5px;
        }

    }
`;