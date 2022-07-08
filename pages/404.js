import React from 'react'
import Image from 'next/image'
import Four from '../public/404.png'


const PageNotFount = () => {



  return (
    <div className='Container404'>
        <h1>Page not found!</h1>
        <Image src={Four} width={432} height={234}></Image>
        
    </div>
  )
}

export default PageNotFount
 