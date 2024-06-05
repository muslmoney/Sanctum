import React from 'react'
import Image from './Image'
import Typography from './Typography'
import ImgNotFound from './../../public/assests/images/notfound-filtr.png'

const NotFoundFilter = () => {
    return (
        <div>
           <Image src={ImgNotFound} className={'not'}  title={'not'}/>
            <Typography lvl={5}>По запросу ничего не найдено</Typography>
        </div>
    )
}

export default NotFoundFilter
