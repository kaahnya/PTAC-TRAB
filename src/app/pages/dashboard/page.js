import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react"
import ListUsers from "@/app/componentes/ListUsers";
import './css.css'
import Menu from "@/app/componentes/menu/menu"; 


export default async function Dashboard() {
   const users = await getUsers();
    return (
        <div className="carre">
            <Menu></Menu>
            <Suspense fallback = {<p>Carregando...</p>}>
            <div className="lista">
                <h1>USERS</h1>
                <ListUsers users={users}/>
            </div>
            </Suspense>
        </div>
    );
};