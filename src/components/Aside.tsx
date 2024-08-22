import { PencilLine} from "phosphor-react";
import React from 'react'
import ImgProfile from "./ImgProfile";
function Aside() {
  return (
    <aside className='bg-gray-80 rounded-lg overflow-hidden'>
        <img 
            src="https://media.licdn.com/dms/image/v2/C4E16AQHPMVVQkD7FQQ/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1617132334941?e=1729728000&v=beta&t=O93w7TJDrfLdWj27xMWsz-bp7o-mMVHDMh9_Y82Ng04"
            alt="Foto de varios personagens de star wars juntos"
            className='w-full h-[72px] object-cover'
        />
        <div className='flex flex-col items-center font-roboto'>
            <ImgProfile extraClass="out" src="https://avatars.githubusercontent.com/u/76995730?v=4"/>
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