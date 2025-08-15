import { useState } from "react";
import instance from "../Axios/instance";
import { useUsuarioContext } from "../Hooks/useUsuarioProviderContext";

const ModalCadastrarProduto = () => {
    
    const {usuario, HandleChange, setUsuario} = useUsuarioContext()

    

    const [produto, setProduto] = useState({
        Nome_Produto: '',
        Tipo_Produto: '',
        Quantidade: '',
        Preco: ''
    })

    const HandleChangeCadastrarProduto = (e) => {
        
        setProduto(prod => ({
            ...prod,
            [e.target.name]: e.target.value
        }))
    }
    
    const FormDataCadastrarProduto = {
        Id_Usuario: usuario.Id_Usuario,
        Nome_Produto: produto.Nome_Produto,
        Tipo_Produto: produto.Tipo_Produto,
        Quantidade: produto.Quantidade,
        Preco: produto.Preco
    }

    const HandleSubmitSalvarProduto = async (event) => {
        event.preventDefault();

        try {
            const response = await instance.post('/api/RegistroProdutos/CadastrarProdutos', FormDataCadastrarProduto);
            setProduto(response.data);
        
            if (response.data) {
                alert("Dados Salvos com sucesso !");
            }

            return response;
        }catch (error){
            console.log("Erro ao cadastrar produto: " + error)
        }
    }

    return (
        <div>
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal"> Cadastrar Produtos</button>
            <div className="modal fade" id="modal" tabIndex="-1" aria-labelledby="meuModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="meuModal">Cadastrar Produto</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                            
                        <div className="modal-body">
                            <form onSubmit={HandleSubmitSalvarProduto} className="form-control">
                                <div>
                                    <label htmlFor="Nome_Produto">Nome_Produto</label>
                                    <input type="text" className="form-control" name="Nome_Produto" placeholder="Nome_Produto" onChange={HandleChangeCadastrarProduto}/>
                                </div>
                                <div>
                                    <label htmlFor="Tipo_produto">Tipo_Produto</label>
                                    <input type="text" className="form-control" name="Tipo_Produto" placeholder="Tipo_Produto" onChange={HandleChangeCadastrarProduto}/>
                                </div>
                                <div>
                                    <label htmlFor="Quantidade">Quantidade</label>
                                    <input type="number" className="form-control" name="Quantidade" placeholder="Quantidade" onChange={HandleChangeCadastrarProduto}/>
                                </div>
                                <div>
                                    <label htmlFor="Preco">Preço</label>
                                    <input type="number" className="form-control" name="Preco" placeholder="Preço" onChange={HandleChangeCadastrarProduto}/>
                                </div>
                            </form>

                        </div>
                        
                        <div className="modal-footer">
                            <button type="button" id="botao1" className="btn btn-success" onClick={HandleSubmitSalvarProduto}>Cadastrar Produto</button>
                            <button type="button" id="botao2" className="btn btn-danger">Cancelar</button>  
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    );
}

export default ModalCadastrarProduto