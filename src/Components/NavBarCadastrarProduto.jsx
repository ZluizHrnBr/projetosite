import ModalCadastrarProduto from "./ModalCadastrarProduto";


const NavBarCadastrarProduto = () => {
    return (
        <div>
              <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid"> 
                    <a className="navbar-brand">Navbar</a>
                    <div className="d-flex" role="search">
                        <ModalCadastrarProduto />
                    </div>
                </div> 
            </nav>  
        </div>
    );
}

export default NavBarCadastrarProduto;