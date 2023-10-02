import {AiOutlineSearch} from "react-icons/ai"

function InputCustomizado(){
    return(
        <section className="imputCustomizado">
            <div className="pesquisa">
            <AiOutlineSearch/>
            </div>
            <input type="text" placeholder="Search anything..."/>
        </section>
    )
  }

export default InputCustomizado