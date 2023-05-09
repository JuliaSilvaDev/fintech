import { motion } from "framer-motion";
import style from "../Components/Voce.Module.css"

function Voce (){
    return(
        <section className="feito">
            <div className="meio">
                <p>Um banco feito para você e empresa</p>
            </div>

            <div className="numero1">
                <div className="voce1"></div>
                <p>Você</p>
                <span>Uma conta completa, com cartão e oportunidades de investimento no Brasil e exterior.</span>
                <h5>SAIBA MAIS</h5>
            </div>
            <div className="numero2">
                <div className="empresa2"></div>
                <p>Empresa</p>
                <span>Uma conta ágil e fácil para usar. Maquininha e acesso a pix grátis.</span>
                <h5>SAIBA MAIS</h5>
            </div>
            <div className="numero3">
                <div className="MEI"></div>
                <p>MEI</p>
                <span>Conta voltada para o seu negócio, com pix grátis.  E crédito para crescimento.</span>
                <h5>SAIBA MAIS</h5>
            </div>

        </section>
    )
}


export default Voce;