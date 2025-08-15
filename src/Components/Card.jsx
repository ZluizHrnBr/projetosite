import "../ListaProduto.css"

const Card = ({Nome_produto, Tipo_Produto, Quantidade, Preco, onClickDeletar}) => {
    return (
        <div>
            <div className="col-lg-3">
                <div className="card" id="ListaProdutos">
                    <div className="card-body">
                        <h5 className="card-title">{Nome_produto}</h5>
                        <hr/>
                        <p className="card-text">Tipo de produto: {Tipo_Produto}</p>
                        <p className="card-text">Quantidade: {Quantidade}</p>
                        <p className="card-text">Preço: {Preco}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button type="submit" className="btn btn-danger" onClick={onClickDeletar}>Deletar</button>
                    </div>
                </div>
            </div>
        
        </div>
        
    );
}

export default Card;