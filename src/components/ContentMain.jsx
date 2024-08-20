import {format, formatDistanceToNow} from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import React, { useState } from 'react'
import ImgProfile from './ImgProfile'
import Comment from './Comment'



function ContentMain({ author, publishedAt, content}) {
const [comments, setComments]=useState([]);
const [newCommentText, setNewCommentText]=useState([]);
const [like, setLike]=useState([]);
  
  const publishedDateFormatted= format(publishedAt,"d 'de' LLLL 'às' HH:mm'h'",{
    locale:ptBr,
  })
  const publishedDateRelativeToNow= formatDistanceToNow(publishedAt,{
    locale:ptBr,
    addSuffix:true,
  })
  const isNewCommentEmpty=newCommentText.length===0

  function HandleCreateNewComment(event){
    event.preventDefault();

    setComments([...comments, newCommentText]) 
    setNewCommentText('');
  }

  function HandlenewCommentText(event){
    event.target.setCustomValidity("")
    setNewCommentText(event.target.value) 
  }
  function HandleNewCommentInvalid(){
    event.target.setCustomValidity("Esse campo é obrigatório!")
  }
  function DeleteComment(commentToDelete){
    const commentsWithoutDeletedOne= comments.filter(comment=>{
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeletedOne)
    
  }


  return (
    <article className='PostMain bg-gray-80 rounded-lg p-10 font-roboto'>
      
      <header className='flex items-center justify-between'>

        <div className='flex items-center gap-4'>

          <ImgProfile extraClass="out" link={author.avatarUrl}/>

          <div className='flex flex-col'>
            <strong 
              className='mt-4 text-gray-10 leading-[1.6]'>
                {author.name}
            </strong>
            <span 
              className='text-[0.875rem] text-gray-40 leading-[1.6]'>
                {author.role}
            </span>
          </div>

        </div>

        <time 
          className='text-sm text-gray-40'
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}>
            {publishedDateRelativeToNow}
        </time>

      </header>

      <div className='leading-[1.6] text-gray-30 mt-6'>
        {content.map(line=>{
          if(line.type==="paragraph"){
            return <p key={line.content}>{line.content}</p>
          }else if(line.type==="link"){
            return <p key={line.content} className='flex '><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={HandleCreateNewComment} className='formulario w-full mt-6 pt-6 border-t border-gray-60 '>
        <strong className='leading-[1.6] text-gray-10'>Deixe seu feedback</strong>

        <textarea
          value={newCommentText}
          className='w-full bg-gray-90 border-0 resize-none h-24 p-4 rounded-lg text-gray-10 leading-[1.4] mt-4'
          placeholder='Deixe seu comentário'
          onChange={HandlenewCommentText}
          onInvalid={HandleNewCommentInvalid}
          required 
        />

        <footer className='invisible max-h-0 focus-within:visible focus-within:max-h-none'>
          <button 
            className='py-4 px-6 mt-4 rounded-lg border-0 bg-green-50 text-white font-bold cursor-pointer hover:bg-green-30 transition-colors duration-10 focus-within:visible focus-within:max-h-none disabled:opacity-70 disabled:bg-green-50 disabled:cursor-not-allowed'
            type="submit"
            disabled={isNewCommentEmpty}
          >
              Publicar
          </button>
        </footer>

      </form>
      <div className='mt-8'>
        {comments.map(comment=>{
          return <Comment key={comment} content={comment} onDeleteComment={DeleteComment}/>
        })}
      </div>
    </article>
  )
}

export default ContentMain