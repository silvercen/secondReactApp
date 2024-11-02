import { useState } from "react"

export default function JsonPlaceholder()
{
    const [allPosts, setAllPosts] = useState([])

    function handleClick()
    {
        let baseUrl="https://jsonplaceholder.typicode.com/posts"
        fetch(baseUrl)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setAllPosts([...data])    
            })
    }

    let mappedAllPosts = allPosts.map((eachPost) => (
        <tr key={eachPost.id}>
            <td>{eachPost.id}</td>
            <td>{eachPost.title}</td>
            <td>{eachPost.userId}</td>
            <td>{eachPost.body}</td>
        </tr>
    ))

    return (
        <>
            <div className="container m-2">
                <button className="btn btn-success" onClick={handleClick}>Click to get posts from Jsonplaceholder</button>
            </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>User Id</th>
                        <th>Post</th>
                    </tr>
                </thead>
                <tbody>
                    {mappedAllPosts}
                </tbody>
            </table>
        </>
    )
}