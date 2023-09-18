export default async function ListUsers({users}) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return(
        <div>
            {users?.map((user, index) => <p key={index}>{user.name} <img src="https://images.emojiterra.com/google/noto-emoji/unicode-15/bw/512px/1f464.png" width={50}/> </p>)}
        </div>
    );
}