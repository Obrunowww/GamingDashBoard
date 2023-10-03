import InputCustomizado from  "./HeaderInput"
import BottõesMainHeader from "./HeaderButtons"

function HeaderMain(){
    return(
        <section className="mainHeader">
            <h2>Hi, nome</h2>

            <div className="caixaDeInteração">

                <InputCustomizado/>
                <BottõesMainHeader/>

            </div>

        </section>
    )
}

export default HeaderMain