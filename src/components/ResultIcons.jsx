import styled from "styled-components";
import certo from "../assets/icone_certo.png"
import erro from "../assets/icone_erro.png"
import quase from "../assets/icone_quase.png"


export default function ResultIcons(props){

    return (
        <StyledImage src={certo} />
    );
}

const StyledImage = styled.img`
  width: 23px;
  height: 23px;
  color: red;
`;