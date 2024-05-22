import React from 'react'
import Typography, { Paragraph } from './../components/Typography'
import { FaFilter } from 'react-icons/fa6'
import ProductStyles from './pages.module.scss'
import Cards, { ProductCard } from '../components/Cards'
import ProductCardImg1 from '../assets/product-card1.jpg'
import ProductCardImg2 from '../assets/product-card2.png'
import ProductCardImg3 from '../assets/product-card3.jpg'
import ProductCardImg4 from '../assets/product-card4.jpg'


const Products = () => {
  return (
    <div>
      <section className={ProductStyles['Products']}>
        <div className='container'>
          <Typography lvl={1}>
            Продукция
          </Typography>
          <div className={ProductStyles['Products__toolbar']}>

            <button className={ProductStyles['Products__btn-filter']}>
              <span>
                <FaFilter />
              </span>
              <span>
                Фильтр
              </span>
            </button>

            <div>
              <button>Hide Filter</button>
              <button>Use</button>
            </div>

          </div>
          <div className={ProductStyles["Product__filter"]}>
            <div className={ProductStyles["Product__filter-menu"]}>
              <div><Typography lvl={4}>Категории</Typography>
                <div className={ProductStyles['Product__filter-item']}><label >
                  <input type="checkbox" />
                  <Paragraph>Ванны</Paragraph>
                </label>
                  <label >
                    <input type="checkbox" />
                    <Paragraph>Смесители</Paragraph>
                  </label>
                  <label >
                    <input type="checkbox" />
                    <Paragraph>Унитазы</Paragraph>
                  </label>
                  <label >
                    <input type="checkbox" />
                    <Paragraph>Раковины</Paragraph>
                  </label>
                </div></div>
              <div><Typography lvl={4}>Категории</Typography>
                <div className={ProductStyles['Product__filter-item']}><label >
                  <input type="checkbox" />
                  <Paragraph>Ванны</Paragraph>
                </label>
                  <label >
                    <input type="checkbox" />
                    <Paragraph>Смесители</Paragraph>
                  </label>
                  <label >
                    <input type="checkbox" />
                    <Paragraph>Классический</Paragraph>
                  </label>
                  <label >
                    <input type="checkbox" />
                    <Paragraph>Раковины</Paragraph>
                  </label>
                </div></div>

              <div>
                <Typography lvl={4}>Материал</Typography>
                <div className={ProductStyles['Product__filter-item']}><label >
                  <input type="checkbox" />
                  <Paragraph>Ванны</Paragraph>
                </label>
                  <label >
                    <input type="checkbox" />
                    <Paragraph>Смесители</Paragraph>
                  </label>
                  <label >
                    <input type="checkbox" />
                    <Paragraph>Унитазы</Paragraph>
                  </label>
                  <label >
                    <input type="checkbox" />
                    <Paragraph>Керамика</Paragraph>
                  </label>
                </div>
              </div>
              <div>
                <Typography lvl={4}>Форма</Typography>
                <div className={ProductStyles['Product__filter-item']}><label >
                  <input type="checkbox" />
                  <Paragraph>Ванны</Paragraph>
                </label>
                  <label >
                    <input type="checkbox" />
                    <Paragraph>Смесители</Paragraph>
                  </label>
                  <label >
                    <input type="checkbox" />
                    <Paragraph>Унитазы</Paragraph>
                  </label>
                  <label >
                    <input type="checkbox" />
                    <Paragraph>Прямоугольник</Paragraph>
                  </label>
                </div>
              </div>
              <div>
                <Typography lvl={4}>Размер</Typography>
                <div className={ProductStyles['Product__filter-range']} >
                  <Paragraph>Длина</Paragraph>
                  <label >
                    <input type="range" className={ProductStyles['input-range']} min={'0'} max={'100'}
                    //   onClick={
                    //     scale = (num ,in_min , in_max , out_min, out_max ) => {
                    //     return ((num - in_max ) * (out_max - out_min)) / (in_max - in_min) + out_min 
                    //   }
                    // }               

                    />
                    <span className={ProductStyles['range-content']}>150</span>
                  </label>
                  <Paragraph>Ширина</Paragraph>
                  <label >
                    <input type="range" className={ProductStyles['input-range']} min={'0'} max={'100'} />
                    <span className={ProductStyles['range-content']}>150</span>

                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>




      </section>

      <section className={ProductStyles['Product-cards']}>
        <div className="container">
        <Typography lvl={1}>Ванны</Typography>
          <div className={ProductStyles['Products__row']}>
          <ProductCard
          title
          ImgSrc={ProductCardImg1}
          ImgTitle={'product-card'}
          className={'Product__card'}
            />
          <ProductCard
          ImgSrc={ProductCardImg1}
          ImgTitle={'product-card'}
            />
          <ProductCard
          ImgSrc={ProductCardImg1}
          ImgTitle={'product-card'}
           />
          <ProductCard
          ImgSrc={ProductCardImg1}
          ImgTitle={'product-card'}
            />
          <ProductCard
          ImgSrc={ProductCardImg1}
          ImgTitle={'product-card'}
            />
          <ProductCard
          ImgSrc={ProductCardImg1}
          ImgTitle={'product-card'}
            />
          <ProductCard
          ImgSrc={ProductCardImg1}
          ImgTitle={'product-card'}
            />
          <ProductCard
          ImgSrc={ProductCardImg1}
          ImgTitle={'product-card'}
            />
          <ProductCard
          ImgSrc={ProductCardImg1}
          ImgTitle={'product-card'}
            />
          <ProductCard
          ImgSrc={ProductCardImg1}
          ImgTitle={'product-card'}
            />
          <ProductCard
          ImgSrc={ProductCardImg1}
          ImgTitle={'product-card'}
            />
          <ProductCard
          ImgSrc={ProductCardImg1}
          ImgTitle={'product-card'}
            />

          </div>
        </div>
      </section>



    </div>
  )
}

export default Products


