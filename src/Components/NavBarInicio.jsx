import ModalSearch from "./ModalSearch";

const NavBarInicio = () => {
    return (
        <div className="Itens">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid"> 
                    <a className="navbar-brand">Navbar</a>
                    <div className="d-flex" role="search">
                        <ModalSearch />
                    </div>
                </div> 
            
            </nav>  
             
        </div>
    );
}

export default NavBarInicio;