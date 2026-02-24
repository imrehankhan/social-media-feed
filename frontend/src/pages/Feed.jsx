import React, { useEffect } from 'react'
import axios from 'axios'
import '../App.css'


const Feed = () => {
    const [posts, setPosts] = React.useState([
        {
            _id: "1",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            caption: "Paris"
        }
    ])

    useEffect(() => { //calling api to get all posts from backend onto feed page of frontend
        axios.get('http://localhost:3000/posts')
        .then((res)=> {
            setPosts(res.data.posts)
        })
    },[])
  return (
    <section className='feed-section'>
        {
            posts.length === 0 ? <h1>No posts yet</h1> :
            posts.map((post)=> {
                return (
                    <div className='post-card' key={post._id}>
                        <img className='post-image' src={post.image} alt={post.caption} />
                        <p>{post.caption}</p>
                    </div>
                )
            })
        }
    </section>
  )
}

export default Feed