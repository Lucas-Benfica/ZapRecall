import QuestionCard from "../css/questionCard";
import virar from "../assets/seta_virar.png";


export default function CardQuestion(props){

    const {setTrocar} = props;

    return (
        <QuestionCard>
            <p>Aqui vai ter a pergunta</p>
            <img src={virar} onClick={ () => setTrocar('answer') } />
        </QuestionCard>
    );
}