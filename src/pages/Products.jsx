import React, { Fragment, useEffect, useState, useContext } from 'react'
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
import { DataContext } from '../context/data'
import NotFoundFilter from '../components/NotFoundFilter'


const Products = () => {
  const { Data } = useContext(DataContext)
  const [RangeValues, setRangeValues] = useState([900])
  // const [Data, setData] = useState([]);
  const [DataFull, setDataFull] = useState([])

  // useEffect(() => {
  //   try {
  //     axios.get(import.meta.env.VITE_API + "/products").then(response => {
  //       const data = response.data;
  //       setData(() => data && data?.length ? data : [])
  //       setDataFull(data);
  //     })

  //   } catch (event) {
  //     console.warn(event?.message);
  //     console.error(event);
  //   }

  // }, [])
  useEffect(() => {
    setDataFull(Data)
  }, [Data?.length])
  
  const filterCategories = (type = "", e) => {

    const key = e.target.dataset.type;

    if (type === "") {
      setDataFull(Data)
    } else {
      const filtered = Data?.filter(item => item[key]?.includes(type))

      setDataFull(filtered);
    }
  }

  const CheckedFunc = (e, type) => {
    if (e?.target?.checked) {
      filterCategories(type, e)
    } else {
      filterCategories("", e)
    }
  }

  const productItem = DataFull.map(item => {
    return <Fragment key={item.id}>
      <ProductCard image={item.image}
        price={item.price}
        title={item.title} />


    </Fragment>
  })
  // setInterval(() => {
  //   console.log(productItem);

  // }, 1000);  

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
                    <input type="checkbox" onChange={e => CheckedFunc(e, "Ванны")} />
                    <Paragraph>Ванны</Paragraph>
                  </label>
                  <label >
                    <input type="checkbox" onChange={e => CheckedFunc(e, "Туалеты")} />
                    <Paragraph>Смесители</Paragraph>
                  </label>
                  <label >
                    <input type="checkbox" onChange={e => CheckedFunc(e, "Сместители")} />
                    <Paragraph>Унитазы</Paragraph>
                  </label>
                  <label >
                    <input type="checkbox" onChange={e => CheckedFunc(e, "Раковины")} />
                    <Paragraph>Раковины</Paragraph>
                  </label>
                </div></div>
              <div><Typography lvl={4}>Стиль</Typography>
                <div className={ProductStyles['Product__filter-item']}><label >
                  <input type="checkbox" data-type='style' onChange={e => CheckedFunc(e, "Модерн")} />
                  <Paragraph>Модерн</Paragraph>
                </label>
                  <label >
                    <input type="checkbox" data-type='style' onChange={e => CheckedFunc(e, "Лфот")} />
                    <Paragraph>Лфот</Paragraph>
                  </label>
                  <label >
                    <input type="checkbox" data-type='style' onChange={e => CheckedFunc(e, "Классический")} />
                    <Paragraph>Классический</Paragraph>
                  </label>
                  <label >
                    <input type="checkbox" data-type='style' onChange={e => CheckedFunc(e, "Ретро")} />
                    <Paragraph>Ретро</Paragraph>
                  </label>
                  <label >
                    <input type="checkbox" data-type='style' onChange={e => CheckedFunc(e, "Арт-Деко")} />
                    <Paragraph>Арт-Деко</Paragraph>
                  </label>
                  <label >
                    <input type="checkbox" data-type='style' onChange={e => CheckedFunc(e, "Hi-Tech")} />
                    <Paragraph>Hi-Tech</Paragraph>
                  </label>
                </div></div>

              <div>
                <Typography lvl={4}>Материал</Typography>
                <div className={ProductStyles['Product__filter-item']}><label >
                  <input type="checkbox" data-type='materials' onChange={e => CheckedFunc(e, "Ванны")} />
                  <Paragraph>Акрил</Paragraph>
                </label>
                  <label >
                    <input type="checkbox" data-type='materials' onChange={e => CheckedFunc(e, "Ванны")} />
                    <Paragraph>Керамика</Paragraph>
                  </label>
                  <label >
                    <input type="checkbox" data-type='materials' onChange={e => CheckedFunc(e, "Ванны")} />
                    <Paragraph>Камень</Paragraph>
                  </label>
                  <label >
                    <input type="checkbox" data-type='materials' onChange={e => CheckedFunc(e, "Ванны")} />
                    <Paragraph>Чугун</Paragraph>
                  </label>
                  <label >
                    <input type="checkbox" data-type='materials' onChange={e => CheckedFunc(e, "Ванны")} />
                    <Paragraph>Сталь</Paragraph>
                  </label>
                  <label >
                    <input type="checkbox" data-type='materials' onChange={e => CheckedFunc(e, "Ванны")} />
                    <Paragraph>Стекло</Paragraph>
                  </label>
                </div>
              </div>
              <div>
                <Typography lvl={4}>Форма</Typography>
                <div className={ProductStyles['Product__filter-item']}><label >
                  <input type="checkbox" data-type='form' onChange={e => CheckedFunc(e, "Ванны")} />
                  <Paragraph>Овальная</Paragraph>
                </label>
                  <label >
                    <input type="checkbox" data-type='form' onChange={e => CheckedFunc(e, "Ванны")} />
                    <Paragraph>Угловая</Paragraph>
                  </label>
                  <label >
                    <input type="checkbox" data-type='form' onChange={e => CheckedFunc(e, "Ванны")} />
                    <Paragraph>Круглая</Paragraph>
                  </label>
                  <label >
                    <input type="checkbox" data-type='form' onChange={e => CheckedFunc(e, "Ванны")} />
                    <Paragraph>Прямоугольник</Paragraph>
                  </label>
                  <label >
                    <input type="checkbox" data-type='form' onChange={e => CheckedFunc(e, "Ванны")} />
                    <Paragraph>Нестандартная</Paragraph>
                  </label>
                  <label >
                    <input type="checkbox" data-type='form' onChange={e => CheckedFunc(e, "Ванны")} />
                    <Paragraph>Квадратная</Paragraph>
                  </label>
                </div>
              </div>
              <div style={{ width: 340, flexShrink: 0 }}>
                <Typography lvl={4}>
                  Размер
                  <br />
                  <br />
                </Typography>
                <Typography lvl={4} >
                  Длина
                </Typography>
                <Range
                  step={1}
                  min={50}
                  max={1800}
                  values={RangeValues}
                  onChange={(values) => setRangeValues(values)}
                  renderThumb={({ props }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: '22px',
                        width: '22px',
                        backgroundColor: '#51ABFF',
                        border: 'none',
                        borderRadius: '50%'

                      }}

                    />

                  )}
                  renderTrack={({ props, children }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: '1px',
                        width: '100%',
                        backgroundColor: '#51ABFF'
                      }}

                    >
                      {children}
                    </div>
                  )}
                />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Typography lvl={4} >
                  Ширина
                </Typography>
                <Range
                  step={1}
                  min={50}
                  max={1800}
                  values={RangeValues}
                  onChange={(values) => setRangeValues(values)}
                  renderThumb={({ props }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: '22px',
                        width: '22px',
                        backgroundColor: '#51ABFF',
                        border: 'none',
                        borderRadius: '50%'

                      }}

                    />

                  )}
                  renderTrack={({ props, children }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: '1px',
                        width: '100%',
                        backgroundColor: '#51ABFF'
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
          <div className={ProductStyles['Products__row']}>

            {productItem?.length > 0 ? productItem : 'По вашему запросу ничего не найдено'}

          </div>
        </div>
      </section>



    </div>
  )

}

export default Products


