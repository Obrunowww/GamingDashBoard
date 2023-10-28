import PrimeiraSessãoPrincipal from "./M-PrimeiraSessão"

import styled from "styled-components"

const ContainerPrincipalMain = styled.section`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
border: solid 1px;
.primeiraSessãoPrincipal{
    display: flex;
}
`


function MainPrincipal(){
    return(
        <ContainerPrincipalMain>
            <PrimeiraSessãoPrincipal/>
        </ContainerPrincipalMain>
    )
}

export default MainPrincipal