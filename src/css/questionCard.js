import styled from "styled-components";

const QuestionCard = styled.div`
    width: 300px;
    height: 130px;
    background: #FFFFD4;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 20px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }
    img{
        width: 30px;
        height: 20px;
        color: #333333;
        position: absolute;
        right: 10px;
        bottom: 10px;
        &:hover{
            cursor: pointer;
        }
    }
`; 

export default QuestionCard;