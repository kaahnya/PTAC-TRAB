'use client'

import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './css.css';

export default async function Register() {

    const onRegister = async (e) => {
        e.preventDefault();
          toast.info("Dados de usuario cadastrados com sucesso");
      }

return(
    <div className="form">
      <h1>Register</h1>
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
        <button className="butao">Cadastrar Dados</button>
      </form>
      <ToastContainer/>
    </div>
  )
}