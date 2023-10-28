import { AiOutlineSearch } from "react-icons/ai"
import { ImputCustomizadoStyled } from "../styledComponents/main/headerMain"

function InputCustomizado() {
    return (
        <ImputCustomizadoStyled >
            <div className="pesquisa">
                <AiOutlineSearch />
            </div>
            <input type="text" placeholder="Search anything..." />
        </ImputCustomizadoStyled >
    )
}

export default InputCustomizado