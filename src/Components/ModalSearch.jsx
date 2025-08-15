import "../BotaoCSS.css"
import { useUsuarioContext } from "../Hooks/useUsuarioProviderContext";
import instance from '../Axios/instance'

const ModalSearch = () => {

   const {usuario, HandleChange, setUsuario} = useUsuarioContext() 
    
   const {Id_Usuario, Nome_Usuario, Email, Senha} = usuario; 

   const FormDataUsuario = { 
     Id_Usuario: Id_Usuario,
     Nome_Usuario: Nome_Usuario,
     Email: Email,
     Senha: Senha
   } 

    const CadastrarUsuario = async() => {
        const resposta = await instance.post('/api/RegistroUsuario/CadastrarUsuario', FormDataUsuario)
            .then(response => {
                setUsuario(response.data);
                alert(`Usuário ${Nome_Usuario} cadastrado com sucesso! `);
            })
        
        console.log(`Dados repassados: ${Id_Usuario}, ${Nome_Usuario}, ${Email}, ${Senha}`)    
        return resposta;
    }

    return (
        <div>
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal"> Cadastrar Usuario</button>
            <div className="modal fade" id="modal" tabIndex="-1" aria-labelledby="meuModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="meuModal">Cadastrar Usuario</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                            
                        <div className="modal-body">
                            <form>
                                <div>
                                    <label htmlFor="NomeUsuario">Nome_Usuario</label>
                                    <input className="form-control" name="Nome_Usuario" type="text" placeholder="Nome_Usuario"  onChange={HandleChange}/>
                                    {usuario.Nome_Usuario} 
                                </div>
                                <div>
                                    <label htmlFor="Email">Email</label>
                                    <input className="form-control" name="Email" type="email" placeholder="Email" onChange={HandleChange}/>
                                </div>
                                <div>
                                    <label htmlFor="Senha">Senha</label>
                                    <input className="form-control" name="Senha" type="password" placeholder="Senha" onChange={HandleChange} />
                                </div>
                            </form>

                        </div>
                        <div className="modal-footer">
                            <button type="button" id="botao1" className="btn btn-primary" onClick={CadastrarUsuario} >Cadastrar</button>
                            <button type="button" id="botao2" className="btn btn-danger">Cancelar</button>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
    
   
    

    

export default ModalSearch;