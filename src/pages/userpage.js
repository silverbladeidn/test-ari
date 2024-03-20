import { Link } from "react-router-dom"
import { useState, useEffect } from 'react';

export default function UserPage() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div className="py-4 px-5 mb-4">
            <Link className="btn btn-success mb-3 m-auto" role="button" to="/">Back to Home</Link>
            <table className="table table-striped w-auto m-auto">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody id="user-data">
                    {
                        users.map((user, idx) => (
                            <tr key={idx}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}