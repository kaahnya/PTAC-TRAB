import { getUsers } from "@/app/functions/handlerAcessAPI";

export default async function Dashboard() {
   let lista = getUsers();
    return (
        <div>
            {lista.map(user => (
                   <h1>{user.name}</h1>
               ))}
        </div>
    );
};