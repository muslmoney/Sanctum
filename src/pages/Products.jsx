import React from 'react'
import Typography, { Paragraph } from './../components/Typography'
import { FaFilter } from 'react-icons/fa6'
import ProductStyles from './pages.module.scss'
const Products = () => {
  return (

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
                  <input type="range" />
                </label>
                <Paragraph>Ширина</Paragraph>
                <label >
                  <input type="range" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>





  )
}

export default Products


