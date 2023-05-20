import QuestionCard from "../css/questionCard";
import virar from "../assets/seta_virar.png";


export default function CardQuestion(props){

    const {setTrocar, question} = props;

    return (
        <QuestionCard>
            <p data-test="flashcard-text">{question}</p>
            <img data-test="turn-btn" src={virar} onClick={ () => setTrocar('answer') } />
        </QuestionCard>
    );
}