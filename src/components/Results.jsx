import styled from "styled-components";
import ResultIcons from "./ResultIcons";


export default function Results(props){
    
    const {cont, max, arrayAnswers} = props;

    return (
        <Result> 
            
            <div className="containerResult">
                <p>{cont}/{max} CONCLUÍDOS</p>
                <div>
                    <ResultIcons />
                    <ResultIcons />
                    <ResultIcons />
                </div>
            </div>

        </Result>
    );

}

const Result = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 2;
    background-color: #ffffff;
    width: 100%;
    height: auto;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

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
            margin: 10px 0;
        }  

        div{
        display: flex;
        align-items: center;
        gap: 5px;
        margin-bottom: 10px;
        }

    }
`;