'use client'

import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default async function Alter() {

    const onAlter = async (e) => {
        e.preventDefault();
          toast.success("Dados de usuario alterados com sucesso");
      }

return(
    <div>
      <h1>Alter</h1>
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
        <button>Alterar Dados</button>
      </form>
      <ToastContainer/>
    </div>
  )
}
