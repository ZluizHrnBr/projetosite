import NavBarCadastrarProduto from "../Components/NavBarCadastrarProduto";
import Card from "../Components/Card";
import { useUsuarioContext } from "../Hooks/useUsuarioProviderContext";
import "../ListaProduto.css"
import { useEffect, useState } from "react";
import instance from "../Axios/instance";

const ListaProdutos = () => {

    const {usuario, HandleChange, setUsuario} = useUsuarioContext();

    const [produtos, setProdutos] = useState([]);

    const CarregarDadosListaProdutos = async () => {
        const response = await instance.get(`/api/RegistroProdutos/CarregarProdutos/${usuario.Id_Usuario}`)
        setProdutos(response.data);
    }

    const HandleDeletarProduto = async (Id_Produto) => {
        try {
             const response = await instance.delete(`/api/RegistroProdutos/DeletarProduto/${Id_Produto}`)
             await CarregarDadosListaProdutos();
             alert("Produto Apagado com sucesso");
        }catch(error){
            console.log("Erro ao deletar produto: " + error)
        }
    }
   
    useEffect(() => {
        CarregarDadosListaProdutos()
    }, [])

    return (
        <div> 
            <NavBarCadastrarProduto />
       
            <div className="ListaUsuario">
                Lista De Produtos
            </div>
            <div className="InfoUser">
                <h5>Informações do Usuário</h5>
                <div className="User">
                    <p className="Id Usuario">Código_Usuario: {usuario.Id_Usuario} </p> 
                    <p className="Email">Email: {usuario.Email}</p>
                    <p className="NomeUsuario">Nome de Usuário:{usuario.Nome_Usuario}</p> 
                </div>
            </div>

            <div className="ProdutoSelecionado">
                <h3> Produtos Selecionados</h3>
            </div>

            <hr className="linha" />
            
            <div className="row d-flex justify-content-between" id="rowColumn">
                {produtos.map(prod =>(
                    <Card 
                        Nome_produto={prod.Nome_Produto}
                        Tipo_Produto={prod.Tipo_Produto}
                        Quantidade={prod.Quantidade}
                        Preco={prod.Preco}
                        onClickDeletar={() => HandleDeletarProduto(prod.Id_Usuario)}                     
                    />
                ))}
            </div>

        </div>
    );
}

export default ListaProdutos