import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Welcome(props) {
    const { start, setStart } = props;
    
    return (
        <ContainerWelcome start={start.toString()} >
            
                <img src={logo} alt="zap" />
                <h1>ZapRecall</h1>
                <button onClick={() => setStart(true)}>
                    Iniciar Recall!
                </button>
            
        </ContainerWelcome>
    )
}

const ContainerWelcome = styled.div`
    display: ${({start}) => (start === 'true') ? 'none' : 'flex'};
    flex-direction: column;
    margin: 0 auto;
    width: 375px;
    height:100vh;
    align-items: center;

    img{
        margin-top: 148px;
        width: 136px;
        height: 161px;
    }

    h1{
        margin-top: 13px;
        margin-bottom: 30px;
        font-size: 36px;
        color: #ffffff;
        font-family: 'Righteous', cursive;
    }
    
    button{
        font-family: 'Recursive', sans-serif;
        font-size: 18px;
        color: #D70900;
        width: 246px;
        height: 54px;
        background: #FFFFFF;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        &:hover{
            cursor: pointer;
        }
    }
`