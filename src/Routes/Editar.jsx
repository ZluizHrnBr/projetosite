import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import instance from '../Axios/instance';
import "../Editar.css"

const Editar = () => {

    const {Nome_Produto} = useParams();

    const [produto, setProduto] = useState({});

    const CarregarProduto = async () => {
        try {
            const response = await instance.get(`/api/RegistroProdutos/CarregarProduto/${Nome_Produto}`);
            setProduto(response.data);
        }catch(e){
            console.log("Erro ao carregar o produto");
        }
    }

    useEffect(() => {   
        CarregarProduto()
    }, [])  
   
    return (
        <div>   
            <div id='Informacoes'>
                <h1>Informações do Produto</h1> <br/>
                <p>Nome do Produto: {produto.Nome_Produto}</p> <br/>
                <p>Tipo de Produto: {produto.Tipo_Produto}</p> <br/>
                <p>Preço: {produto.Preco}</p> <br/>
            </div>

            <div className='row '>
                <div className='col'>
                    <form>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Editar;