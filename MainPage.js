import React from 'react';
import './style.css';

const MainPage = ({
  name,
  setName,
  email,
  setEmail,
  username,
  setUsername,
  password,
  setPassword,
  handleRegister,
  handleLogin,
  handleRefreshToken,
  handleGetUserInfo,
}) => {
  return (
    <div>
      <header>
        <div className="header">
          <button className="burger">
            <h3>☰</h3>
          </button>
          <h3 className="service-name">Стеклокрош</h3>
        </div>
      </header>
      <div className="description">
        <h3 className="descr-text">
          На нашем веб-сайте представлен широкий ассортимент инструментов и приспособлений
          для стеклорезчиков. Наши продукты предназначены для профессионалов и любителей,
          желающих создать уникальные изделия из стекла. Кроме того, на сайте можно найти
          массу полезной информации о стеклорезах и приемах работы с ними. Мы регулярно
          публикуем статьи и обзоры новинок рынка, чтобы помочь нашим клиентам быть в курсе
          последних тенденций и достижений в области стеклорезного дела. Наша цель -
          предоставить нашим клиентам максимально удобный и эффективный сервис, поэтому мы
          предлагаем быструю доставку, гибкую систему скидок и профессиональную
          консультацию. Заказывайте у нас и создавайте красочные и креативные изделия из
          стекла, которые порадуют вас и ваших близких на протяжении многих лет.
        </h3>
      </div>
      <div className="main-btns">
        <button className="register">
          <a href="" id="open_pop_up">
            <h4>Регистрация</h4>
          </a>
        </button>
        <button className="enter">
          <h4 style={{ fontWeight: 400 }}>Вход</h4>
        </button>
        <a href="" className="no-register" style={{ fontWeight: 400 }}>
          Продолжить без регистрации
        </a>
      </div>

      <div className="pop_up" id="pop_up">
        <div className="pop_up_container">
          <div className="pop_up_body" id="pop_up_body">
            <p></p>
            <form action="">
              <h2>Стеклокрош</h2>
              <h5>Добро пожаловать! <br /> "идея сайта"</h5>
              <p>Адрес электронной почты</p>
              <input
                type="email"
                placeholder="Введите Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p>Имя</p>
              <input
                type="text"
                placeholder="Введите Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p>Имя пользователя</p>
              <input
                type="text"
                placeholder="Введите Имя пользователя"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <p>Пароль</p>
              <input
                type="password"
                placeholder="Введите Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="continue-btn" onClick={handleRegister}>
                Продолжить
              </button>
            </form>
            <div className="pop_up_close" id="pop_up_close">
              &#10006
            </div>
            <div className="have-enter">
              <h5>У вас уже есть профиль?</h5>
              <button className="enter-btn" onClick={handleLogin}>
                Войти
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer"></div>
    </div>
  );
};

export default MainPage;