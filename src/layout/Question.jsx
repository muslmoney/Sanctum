import React from 'react'
import Typography, { Paragraph } from '../components/Typography'
import QuestionStyle from './layout.module.css'
import { Formik } from 'formik'
const Question = () => {
  return (
    <section>
      <Typography lvl={1} weight={500}>
        Есть вопросы? <br />
        Mы вам поможем
      </Typography>

      <div className={QuestionStyle['Question__row']}>
        <div className={QuestionStyle['Question__content']}>
          <Paragraph>Преимущество нашей компании - сочетание удобства и стиля.
            Мы стараемся не пренебрегать качеством, во имя красоты,
            а стараемся совмещать их. </Paragraph>

          <Formik initialValues={{
            username: '',
            contact: '',
            productType: '',
          }}
            validate={
              values => {
                const errors = {};
                if (!values.username) {
                  errors.username = 'Имя пользователя не указано'
                }
                if (!values.contact) {
                  errors.contact = 'Контакты не указано'
                }
                if (!values.productType) {
                  errors.productType = 'Тип продукта не указан'
                }
                return errors;

              }
            }

            onSubmit={values => {
              console.log(values);
            }}

          >
            {({ handleBlur, handleChange, handleSubmit, values, errors, touched, handleReset }) => (
              <form onSubmit={handleSubmit}>
                <label>
                  <input type="text"
                    placeholder='Контактное лицо'
                    name='username'
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur} />
                  {errors.username && touched.username && (
                    <Paragraph>{errors.username}</Paragraph>
                  )}
                </label>
                <label>
                  <input type="text"
                    placeholder='Контактный номер'
                    name='contact'
                    value={values.contact}
                    onChange={handleChange}
                    onBlur={handleBlur} />
                  {errors.contact && touched.contact && (
                    <Paragraph>{errors.contact}</Paragraph>
                  )}
                </label>
                <label >
                  <select name="productType" onChange={handleChange} onBlur={handleBlur} >
                    <option value="Ванны">Ванны</option>
                    <option value="Модерн">Модерн</option>
                    <option value="Сместители">Сместители</option>
                    <option value="Лфот">Лфот</option>
                    <option value="Унитазы">Унитазы</option>
                    <option value="Раковины">Раковины</option>
                    <option value="Классический">Классический</option>
                  </select>
                  {errors.productType && touched.productType && (
                    <Paragraph>{errors.productType}</Paragraph>
                  )}
                </label>


                <button type='submit' onClick={() => {
                  setTimeout(() => {
                    handleReset()
                  }, 1500)
                }}>Отправить</button>

              </form>
            )
            }
          </Formik>
        </div>
        <div className={QuestionStyle['Question__images']}>
          Images

        </div>
      </div>

    </section>
  )
}

export default Question