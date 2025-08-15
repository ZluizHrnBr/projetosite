import NavBarInicio from "./Components/NavBarInicio";
import {useNavigate} from 'react-router-dom'
import instance from "./Axios/instance";
import { useUsuarioContext } from "./Hooks/useUsuarioProviderContext";
import "./Login.css"

function App() {

  const navigate = useNavigate();
  const {usuario, HandleChange, setUsuario} = useUsuarioContext();
  const {Id_Usuario, Nome_Usuario, Email, Senha} = usuario;


  const HandleSubmitEntrarListaProduto = async(event) => {
    event.preventDefault();

     try{
        const response = await instance.get(`/api/RegistroUsuario/LogarUsuario/${Nome_Usuario}/${Senha}`);
        setUsuario(response.data);
        
        if (response.data && response.data.Nome_Usuario && response.data.Senha){
           navigate('/listaProdutos') 
        }else {
          navigate('/')
        }

     } catch (error){
        console.log("Erro ao logar: " + error)
     }
    
  }

  return (
    <div className="App">
      <NavBarInicio />

      <br/>
      <div id="formLogin"className="row">
        <div  className="col-lg-4">
            <div className="card" id="cardLogin">
              <div className="card-body">
                <div id="titulo" className="card-title">Tela de Login</div>

                <div className="FormLogin2">
                  <form>
                    <div>
                        <label htmlFor="Nome_Usuario">Nome de Usuario</label>
                        <input className="form-control" name="Nome_Usuario" id="inputUser" type="text" placeholder="Nome_Usuario" onChange={HandleChange}/>
                    </div>
                    <div>
                        <label htmlFor="Senha">Senha</label>
                        <input className="form-control" name="Senha" id="inputUser2" type="password" placeholder="Senha" onChange={HandleChange}/>
                    </div>
                    <div id="buttonLogin" className="d-flex justify-content-between">
                        <button className="btn btn-success" type="submit" onClick={HandleSubmitEntrarListaProduto}>Entrar</button>
                        <button className="btn btn-danger" type="submit">Cancelar</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </div>
      </div>

    </div>
  );
}

export default App;
