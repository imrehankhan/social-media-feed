import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
  const navigate = useNavigate() // ye hook hume frontend ke andar navigation karne me help karta hai

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target) // form data ko handle karne ke liye FormData API use karte hain
    axios.post('http://localhost:3000/create-post', formData)
    .then((res)=> {
        navigate('/feed') // post create hone ke baad feed page par navigate kar denge
    })
    .catch((err)=> {
      console.log(err)
      alert("Error creating post")
    })
  }

  useEffect((file) => {
      axios.post('http://localhost:3000/create-post')
      .then((res)=> {
          console.log(res.data)
      })
  })
  return (
    <section className='create-post-section'>
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit}>
            <input type="file" name='image' accept='image/*' />
            <input type="text" name='caption' required placeholder='Enter caption' />
            <button type='submit'>Submit</button>
        </form>
    </section>
  )
}

export default CreatePost