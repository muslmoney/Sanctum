import React, { Fragment, useEffect, useState } from 'react'
import Typography, { Paragraph } from './../components/Typography'
import { FaFilter } from 'react-icons/fa6'
import ProductStyles from './pages.module.scss'
import Cards, { ProductCard } from '../components/Cards'
import ProductCardImg1 from '../assets/product-card1.jpg'
import ProductCardImg2 from '../assets/product-card2.png'
import ProductCardImg3 from '../assets/product-card3.jpg'
import ProductCardImg4 from '../assets/product-card4.jpg'
import { ProductsData } from '../db/products'
import { Range } from "react-range"
import axios from 'axios'
import { error } from 'style'


const Products = () => {
  const [RangeValues, setRangeValues] = useState([900])
  const [Data, setData] = useState([]);
  
  useEffect(() => {
    try{
      axios.get(import.meta.env.VITE_API + "/products").then(response => {
        const data = response.data;
        setData(() => data && data?.length ?  data : [])
      })
    }catch(event){
      console.warn(event?.message);
      console.error(event);
    }
  },[])


  const productItem = Data.map(item => {
    return <Fragment key={item.id}>
      <ProductCard  image={item.image}
        price = {item.price}
        title={item.title} />
       
     
    </Fragment>
  })



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
                <div className={ProductStyles['Product__filter-item']}>
                  <label >
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
              <div style={{ width: 340, flexShrink: 0 }}>

                <Range
                 step={1}
                  min={50}
                  max={1800}
                  values={RangeValues}
                  onChange={(values) => setRangeValues(values)}
                  renderThumb={({ ...props }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: '42px',
                        width: '42px',
                        backgroundColor: '#999'
                      }} />

                  )}
                  renderTrack={({ props, children }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: '6px',
                        width: '100%',
                        backgroundColor: '#ccc'
                      }}
                    >
                      {children}
                    </div>
                  )}
                />
              </div>
            </div>
          </div>

        </div>
      </section>





      <section className={ProductStyles['Products-cards']}>
        <div className="container">
          <Typography lvl={1}>Ванны</Typography>
          <div  className={ProductStyles['Products__row']}>

            {productItem}

          </div>
        </div>
      </section>



    </div>
  )
}

export default Products


