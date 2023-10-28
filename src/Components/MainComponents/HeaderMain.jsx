import InputCustomizado from  "./HeaderInput"
import BottõesMainHeader from "./HeaderButtons"
import { MainHeader, InputCustumizadoContainer } from "../styledComponents/main/headerMain"

function HeaderMain(){
    return(
        <MainHeader>
            <h2>Hi, nome</h2>

            <InputCustumizadoContainer>

                <InputCustomizado/>
                <BottõesMainHeader/>

            </InputCustumizadoContainer>

        </MainHeader>
    )
}

export default HeaderMain