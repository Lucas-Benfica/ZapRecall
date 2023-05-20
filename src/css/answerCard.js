import styled from "styled-components";
import QuestionCard from "../css/questionCard";


const AnswerCard = styled(QuestionCard)`

    height: auto;

    div{
        display: flex;
        justify-content: space-between;
        height: 37px;
        width: 265px;
        margin-top: 15px;
    }

`;

export default AnswerCard;