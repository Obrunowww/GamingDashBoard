import styled from "styled-components";

export const MainHeader = styled.section`
display: flex;
width: 90%;
justify-content: space-between;
`

export const InputCustumizadoContainer = styled.div`
width: 480px;
display: flex;
justify-content: space-between
`

export const ImputCustomizadoStyled = styled.div`
position: relative;
width: 250px;
input{
    padding: 12px;
    background-color: rgba(0, 69, 63, 1);
    border: none;
    padding-left: 40px;
    border-radius: 15px;
    width: 250px;
    border:solid 1px rgba(0, 69, 63, 1);
}input:focus{
    border-color: rgb(0, 116, 106);
    box-shadow:  1px 1px 10px rgba(0, 69, 63, 1);
    outline: none;
}
    .pesquisa{position: absolute;
    left: 20px;
    color: white;
    top: 13px;
    }
`
export const BotõesDaMainHeader = styled.div`
width: 18%;
display: flex;
justify-content: space-around;
button{
    background-color: rgba(0, 69, 63, 1);
    width: 35px;
    height: 35px;
    border-radius: 100%;
    color: white;
    border: none; 
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    text-align: center;
    cursor: pointer;
    
}
 button:hover{
    box-shadow:  1px 1px 10px rgba(0, 69, 63, 1);
    color: rgba(255, 255, 255, 0.712);
    text-shadow: 1px 1px 10px white;
    
}
`