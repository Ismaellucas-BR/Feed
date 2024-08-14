import React from 'react'
import Capa from '../assets/capa.jpeg'
function Aside() {
  return (
    <aside className='bg-gray-80 rounded-lg overflow-hidden'>
        <img 
            src={Capa} 
            alt="Foto de varios personagens de star wars juntos"
            className='w-full h-[72px] object-cover'
        />
        <div className='flex flex-col items-center'>
            <img 
                src="https://avatars.githubusercontent.com/u/76995730?v=4" alt="Foto de usuario" 
                className='out w-12 h-12 rounded-lg  mt-[-2rem] border-4 border-gray-80'
            />
            <strong>Ismael Lucas</strong>
            <span>Desenvolvedor Front-end</span>
        </div>

        <footer className='border-t border-gray-60 mt-6 pt-6 px-8 pb-8'>
            <a className='flex justify-center items-center w-full font-roboto bg-transparent text-green-10 border border-green-10 rounded-lg h-[50px] py-0 px-6 font-bold no-underline' href="#">Editar o seu perfil</a>
        </footer>
    </aside>
  )
}

export default Aside