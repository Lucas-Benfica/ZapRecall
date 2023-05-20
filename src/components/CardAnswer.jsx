import AnswerCard from "../css/answerCard";

const BUTTONS = [{resp:'nao'},{resp:'quase'},{resp:'zap'}];

export default function CardAnswer(props){
    const {setTrocar} = props;

    return (
        <AnswerCard>
            <p>Aqui vai ficar as resposatas todas</p>
            <div>
                <button>ola</button>
                <button>ola</button>
                <button>ola</button>
            </div>
        </AnswerCard>
        
    );
}