import React from 'react'
import Image from '../components/Image' 
import HeaderImage2 from './../assets/headerImg2.jpg'
import HeaderImage1 from './../assets/headerImg.jpg'
import Cards from '../components/Cards'
import ProductsImage1 from '../assets/productsImg1.jpg'
import ProductsImage2 from '../assets/productsImg2.jpg'




const Home = () => {
  return (
    <div>
        <section className='Home__header'>
            <div className="container">
                <div className="Home__header-row">
                    <div className="Home__header-wrap">
                    <div className="Home__header-content ">
                        <h1 className='title-1'>Sanctum <br /> Ecsclusive santexnika </h1>
                    </div>
                    <div className="Home__header-content__footer">
                        <div className="Home__header-content__footer-items">
                        <div className="Home__header-content__item">
                           <div>
                           <h4 className='title-4'>
                                2560
                            </h4>
                            <p>
                            Довольных клиентов
                            </p>
                           </div>
                           <div>
                           <h4 className='title-4'>
                                302
                            </h4>
                            <p>
                            Качественных товаров
                            </p>
                           </div> <div>
                           <h4 className='title-4'>
                                25 607
                            </h4>
                            <p>
                            Фабрики запущены по миру
                            </p>
                           </div> <div>
                           <h4 className='title-4'>
                             11 000
                            </h4>
                            <p>
                            Выполнено проектов под ключ
                            </p>
                           </div>
                            </div>
                            <Image src={HeaderImage2} />
                        
                        </div>
                    </div>
                    </div>
                    <Image title={'Image'} src={HeaderImage1} className={'Home__header-img'} />

                    {/* <div className="Home__header-img">
                        <img src="" alt="" />
                    </div> */}
                </div>
            </div>
        
        </section>
        <section className='container Products'>
            <h1 className='title-1'>Продукция Sanctum</h1>
<div className="Products__wrap">
    <Cards className={'Products__card'} ImgTitle={'productsImg'} ImgSrc={ProductsImage1} title={'Раковины'}/>
    <Cards className={'Products__card'} ImgTitle={'productsImg'} ImgSrc={ProductsImage2} title={'Унитазы'}/>
    <Cards className={'Products__card'} ImgTitle={'productsImg'} ImgSrc={ProductsImage1} title={'Раковины'}/>
    <Cards className={'Products__card'} ImgTitle={'productsImg'} ImgSrc={ProductsImage2} title={'Унитазы'}/>
</div>
        </section>
        
    </div>
  )
}

export default Home