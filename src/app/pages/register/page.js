'use client'

import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default async function Register() {

    const onRegister = async (e) => {
        e.preventDefault();
          toast.success("Dados de usuario cadastrados com sucesso");
      }

return(
    <div>
      <h1>Alter</h1>
      <form onSubmit={onRegister}>
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
        <button>Cadastrar Dados</button>
      </form>
      <ToastContainer/>
    </div>
  )
}