import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import LoadingAction from '../Redux/Actions/LoadingAction';

const AddBlog =()=>{
    const[blogContent, setBlogContent] = useState('')
    const[title, setTitle] = useState('')
    const[author, setAuthor] = useState('')
    const handleEditorChange = (e) => {
        setBlogContent(e.target.getContent())
      }

    const handleChange = (e)=>{
        if(e.target.name === 'title')
        {
            setTitle(e.target.value)
        }
        else
            setAuthor(e.target.value)
    }

    const uploadHandler = (e)=>{
        e.preventDefault()
        document.getElementById('button').classList.add('btn')
        const blog = {
            title: title,
            author: author,
            content: blogContent
        }
        Axios.post('http://localhost:9999/getBlog', blog)
            .then(res=>{
                document.getElementById('button').classList.remove('btn')
            })
            .catch(err=>console.log(err))
    }


    return(
        <div className='addBlog'>
            <h1>Add Blog</h1>
            <form onSubmit={uploadHandler}>
            <input type='text' placeholder='Add title' name='title' onChange={handleChange} required/>
            <input type='text' placeholder='Author' name='author' onChange={handleChange} required/>
            <Editor className='text' required
        initialValue="<p>Blog Content...</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image', 
            'charmap print preview anchor help',
            'searchreplace visualblocks code',
            'insertdatetime media table paste wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help'
        }}
        onChange={handleEditorChange}
      />
      <input type='submit' value='Upload Blog' id='button'/>
      </form>
        </div>  
    )
}

export default AddBlog