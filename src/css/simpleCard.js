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
    p{
        font-family: 'Recursive';
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: &{(props) => props.color};
        font-style: &{(props) => props.textDec};
    }
    img{
        width: 20px;
        height: 23px;
        color: #333333;
        &:hover{
            cursor: pointer;
        }
    }
`; 

export default SimpleCard;