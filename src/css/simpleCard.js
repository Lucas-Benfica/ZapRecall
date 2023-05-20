import styled from "styled-components";

const SimpleCard = styled.div`
    width: 300px;
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 20px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.newColor};
    text-decoration: ${(props) => props.newTextDec };
    p{
        font-family: 'Recursive';
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
    }
    img{
        width: 23   px;
        height: 23px;
        &:hover{
            cursor: pointer;
        }
    }
`; 

export default SimpleCard;