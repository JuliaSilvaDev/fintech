import style from "../Components/Header.Module.css";

function Header (){
    return(
        <header>
            <div className="Container">
                <div className="Logo"></div>
                <div>
                    <button className="conta">Conta</button>
                </div>
            </div>

        </header>
    )
}

export default Header;