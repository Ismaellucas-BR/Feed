import { PencilLine} from "phosphor-react";
import React from 'react'
import Capa from '../assets/capa.jpeg'
import ImgProfile from "./ImgProfile";
function Aside() {
  return (
    <aside className='bg-gray-80 rounded-lg overflow-hidden'>
        <img 
            src={Capa} 
            alt="Foto de varios personagens de star wars juntos"
            className='w-full h-[72px] object-cover'
        />
        <div className='flex flex-col items-center font-roboto'>
            <ImgProfile extraClass="out" link="https://avatars.githubusercontent.com/u/76995730?v=4"/>
            <strong className='mt-4 text-gray-10 leading-[1.6]'>Ismael Lucas</strong>
            <span className='text-[0.875rem] text-gray-40 leading-[1.6]'>Desenvolvedor Front-end</span>
        </div>

        <footer className='border-t border-gray-60 mt-6 pt-6 px-6 pb-8'>
            <a 
                className='flex justify-center items-center w-full font-roboto bg-transparent text-green-10 border border-green-10 rounded-lg h-[50px] py-0 px-6 font-bold no-underline gap-2 hover:bg-green-50 hover:text-white transition-colors' 
                href="#">
                    <PencilLine size={20}/> 
                    Editar o seu perfil
            </a>
        </footer>
    </aside>
  )
}

export default Aside