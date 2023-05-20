import styled from "styled-components";
import Card from "./Card";

export default function ConteinerCards(props){
    
    const {cards, setAnswerCounter, setArrayAnswers} = props;

    return(
        <AllCards>

            {cards.map((card) => (
                <Card 
                    key={card.id}
                    number={card.id}
                    question={card.question} 
                    answer={card.asnwer} 
                    setAnswerCounter={setAnswerCounter} 
                    setArrayAnswers={setArrayAnswers} 
                />))
            }
            
        </AllCards>
    );
}

const AllCards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: auto;
    margin: 0 auto 375px;
`;