import React, { ImgHTMLAttributes } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  extraClass?: string;  // Adicione extraClass como uma propriedade opcional, se necessário
}

function ImgProfile({ extraClass, ...props }: AvatarProps) {
  return (
    <img
      {...props}
      alt="Foto de usuário"
      className={`w-12 h-12 rounded-lg mt-[calc(0px-1.5rem-6px)] border-4 border-gray-80 box-content ${extraClass}`}
    />
  );
}

export default ImgProfile;
