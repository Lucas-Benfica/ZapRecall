import styled from "styled-components";



export default function ResultIcons(props){
    
    const {resp, imagens} = props;
    let img = undefined;

    let test = '';

    if(resp === 'N'){
      img = imagens[0];
      test = 'no-icon'
    }
    else if(resp === 'Q'){
      img = imagens[1];
      test = 'partial-icon';
    }
    else if(resp === 'Z'){
      img = imagens[2];
      test = 'zap-icon';
    }


    return (
        <StyledImage data-test={test}  src={img} />
    );
}

const StyledImage = styled.img`
  width: 23px;
  height: 23px;
  color: red;
`;