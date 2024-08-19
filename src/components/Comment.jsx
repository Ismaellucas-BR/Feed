import { ThumbsUp, Trash } from 'phosphor-react'
import React from 'react'

function Comment(props) {
  return (
    <div className='flex mt-6 gap-4'>
        <img 
            src='https://avatars.githubusercontent.com/u/76995730?v=4' alt="Foto de usuario" 
            className='w-12 h-12 rounded-lg'
         />
        <div className='flex-1'>
            <div className='bg-gray-70 rounded-lg p-4'>

                <header className='flex items-start justify-between'>
                    <div className='flex flex-col'>
                    <strong className='text-sm leading-[1.6]'>Ismael Lucas</strong>
                    <time 
                        className='text-xs text-gray-40 leading-[1.6]'
                        title='15 de agosto ás 08:00h' 
                        dateTime='2024-08-15 08:00:00'>
                            Publicado há 1h atrás
                    </time>
                    </div>
                    <button
                        className='text-gray-40 cursor-pointer leading-none rounded-sm hover:text-red-50'
                        title='Deletar comentário'>
                        <Trash size={20}/>
                    </button>
                </header>
                
                <p className='mt-4 text-gray-30'>{props.content}</p>
            </div>

            <footer className='mt-4'>
                <button className='flex items-center bg-transparent border-0 text-gray-40 cursor-pointer hover:text-green-30'>
                    <ThumbsUp className='mr-2'/>
                    Aplaudir <span className='countButton'>20</span>
                </button>
            </footer>

        </div>
    </div>
  )
}

export default Comment