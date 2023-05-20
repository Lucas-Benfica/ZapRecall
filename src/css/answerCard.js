import styled from "styled-components";
import QuestionCard from "../css/questionCard";


const AnswerCard = styled(QuestionCard)`

    div{
        display: flex;
        justify-content: space-between;
        height: 37px;
        width: 265px;
    }

    button{
        width: 83px;
        height: 37px;
        background: #FF3030;
        border-radius: 5px;  
        border: none;
    }

`;

export default AnswerCard;