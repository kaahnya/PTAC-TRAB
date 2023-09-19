'use client'

import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './css.css';
import Menu from "@/app/componentes/menu/menu";

export default async function Alter() {

    const onAlter = async (e) => {
        e.preventDefault();
          toast.info("Dados de usuario alterados com sucesso")
      }

return(
  <div><Menu></Menu>
    <div className="form">
      <h1>ALTER</h1>
      <form onSubmit={onAlter}>
      <input
          placeholder='Nome'
          type="name">
        </input>
        <input
          placeholder='E-mail'
          type="email">
        </input>
        <input
          placeholder='Senha'
          type='password'>
        </input>
        <button>ALTERAR DADOS</button>
      </form>
      <ToastContainer/>
    </div>
    </div>
  )
}
