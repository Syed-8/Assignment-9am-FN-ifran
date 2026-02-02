import React from 'react'

function BlogPost({author,title,content,date}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Written by:{author}</p>
      <p>{content}</p>
      <small>Published on :{date}</small>
    </div>
  )
}

export default BlogPost
