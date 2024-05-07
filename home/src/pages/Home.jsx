import React from 'react'
import Image from '../components/Image'
import HeaderImage1 from './../assets/headerImg.jpg'
const Home = () => {
  return (
    <div>
        <section className='Home__header'>
            <div className="container">
                <div className="Home__header-row">
                    <div className="Home__header-content ">
                        <h1 className='title-1'>Sanctum <br /> Ecsclusive santexnika </h1>
                    </div>
                    <div className="Home__header-content__footer">
                        <div className="Home__header-content__footer-items">
                        <div className="Home__header-content__item">
                            <h4 className='title-4'>
                                2560
                            </h4>
                            <p>
                                Completed project
                            </p>
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
    </div>
  )
}

export default Home