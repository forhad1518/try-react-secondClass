import { useEffect, useState } from "react"

export default function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])


    return (
        <>
            <div>
                <h2 className="text-xl font-bold">Users: {users.length}</h2>
            </div>
            <div>
                {users.map(user => <SetUser user={user}></SetUser>)}
            </div>

        </>
    )
}
function SetUser(user){
    const {name, username, email} = user.user;
    return(
        <div className="border border-black border-[3px] rounded-xl mb-[5px] p-5">
        <h2 className="font-bold">Name: {name}</h2>
        <p>UserName: {username}</p>
        <p>E-mail: {email} </p>
    </div>
    )
}