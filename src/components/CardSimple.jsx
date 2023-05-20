import SimpleCard from "../css/simpleCard";
import setinha from "../assets/seta_play.png";

export default function CardSimple(props){

    const {setTrocar, number} = props;

    return (
        <SimpleCard>
                <p>Pergunta {number}</p>
                <img src={setinha} onClick={() => setTrocar('question')} />
        </SimpleCard>
    )
}