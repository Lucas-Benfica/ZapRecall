import styled from "styled-components";



export default function ResultIcons(props){
    
    const {resp, imagens} = props;
    let img = undefined;

    if(resp === 'N'){
      img = imagens[0];
    }
    else if(resp === 'Q'){
      img = imagens[1];
    }
    else if(resp === 'Z'){
      img = imagens[2];
    }


    return (
        <StyledImage src={img} />
    );
}

const StyledImage = styled.img`
  width: 23px;
  height: 23px;
  color: red;
`;