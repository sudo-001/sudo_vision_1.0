import React from 'react'
import Image from 'next/image';

type Props = {
    src: any,
    alt: string,
    className?: string,
}

function ImageCustom({ className, src, alt }: Props) {
    return (

        <>

            <Image src={src} alt={alt} className={`${className} w-12 h-12 hover:scale-125 transition-all duration-300 rounded-full hover:shadow-lg`} />


        </>
    )
}

export default ImageCustom