import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function PostDetail() {
    const {id} = useParams();

    const [details, setDetails] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/posts/" + id)
            .then(response => response.json())
            .then(data => setDetails(data));
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsers(data));   
    },[id]);
    
    return(
        <div>
            <div>
                <Link to={'/'} className="bth btn-info">Back to Post List</Link>
            </div>
            <div>
             <h2>PostDetails - postId: {id}</h2>
            </div>
            <div>PostId: {details.id}</div>
            <div>User: {users.find(u => u.id===details.userId)?.name}</div>
            <div>Title: {details.title}</div>
            <div>Body: {details.body}</div>
        </div>
    )
}