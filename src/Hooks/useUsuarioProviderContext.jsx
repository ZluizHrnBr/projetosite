import { useContext } from "react"
import {UsuarioContext } from "../Context/UsuarioContext"

export const useUsuarioContext = () => {
    const context = useContext(UsuarioContext)

    if(!context){
        console.log("Erro ao carregar o contexto")
    }

    return context;
}   