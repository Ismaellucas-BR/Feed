import React from 'react'
import ImgProfile from './ImgProfile'
import Comment from './Comment'

function ContentMain() {
  return (
    <article className='PostMain bg-gray-80 rounded-lg p-10 font-roboto'>
      
      <header className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <ImgProfile extraClass="out" link=""/>
          <div className='flex flex-col'>
            <strong 
              className='mt-4 text-gray-10 leading-[1.6]'>
                Ismael Lucas
            </strong>
            <span 
              className='text-[0.875rem] text-gray-40 leading-[1.6]'>
                Desenvolvedor Front-end
            </span>
          </div>
        </div>
        <time 
          className='text-sm text-gray-40'
          title='15 de agosto ás 08:00h' 
          dateTime='2024-08-15 08:00:00'>
            Publicado há 1h
        </time>
      </header>

      <div className='leading-[1.6] text-gray-30 mt-6'>
        <p className='mt-4'>Fala galeraa 👋</p>
        <p className='mt-4'>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p className='mt-4'>
          <a 
            className='font-bold text-green-50 no-underline hover:text-green-30' 
            href="#">
              👉 jane.design/doctorcare
            </a>
        </p>
        <p className='flex mt-4 gap-1'>
          <a 
            className='font-bold text-green-50 no-underline hover:text-green-30' 
            href="#">
              #novoprojeto
          </a>
          <a 
            className='font-bold text-green-50 no-underline hover:text-green-30' 
            href="#">
              #nlw
          </a>
          <a 
            className='font-bold text-green-50 no-underline hover:text-green-30' 
            href="#">
              #rocketseat
          </a>
        </p>
      </div>

      <form className='formulario w-full mt-6 pt-6 border-t border-gray-60 '>
        <strong className='leading-[1.6] text-gray-10'>Deixei seu feedback</strong>

        <textarea
          className='w-full bg-gray-90 border-0 resize-none h-24 p-4 rounded-lg text-gray-10 leading-[1.4] mt-4'
          placeholder='Deixe seu comentário'
        />
        <footer className='invisible max-h-0 focus-within:visible focus-within:max-h-none'>
          <button 
            className='py-4 px-6 mt-4 rounded-lg border-0 bg-green-50 text-white font-bold cursor-pointer hover:bg-green-30 transition-colors duration-10 focus-within:visible focus-within:max-h-none'
            type="submit">
              Publicar
          </button>
        </footer>
      </form>
      <div className='mt-8'>
        <Comment/>
      </div>
    </article>
  )
}

export default ContentMain