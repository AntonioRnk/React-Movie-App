import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './AboutPage.module.scss';

const AboutPage = () => {
    console.log(styles);
  return (
    <div className={styles.aboutInner}>
        <h2 className={styles.title}>Про проект</h2>
        <p className={styles.about}>Проект створено виключно в навчальних цілях. Для демонстрації можливостей бібліотеки <span>"React"</span>. 
        Весь розміщений на сайті матеріал являє собою контент, що знаходиться у вільному доступі для перегляду та скачування в мережі Інтернет.
        Технології, які використовувались на проекті: 
        <a href={'https://ru.reactjs.org/'}> React</a>, 
        <a href={'https://reactrouter.com/en/main'}> React Router</a>,  
        <a href={'https://redux.js.org/'}> Redux</a>,  
        <a href={'https://mui.com/'}> Material-UI</a>,  
        <a href={'https://sass-lang.com/'}> Sass (SCSS)</a>, 
        <a href={'https://www.npmjs.com/package/react-lazy-load-image-component'}> React-lazy-load</a>, 
        <a href={'https://swiperjs.com/react'}> Swiper.js</a>, 
        <a href={'https://axios-http.com/ru/docs/intro'}> Axios</a>.
        Додаток зроблено за допомогою API 
        <a href={'https://www.themoviedb.org/documentation/api'}> Themoviedb</a> та 
        <a href={'https://videocdn.tv/'}> VideoCDN</a>.
        <br/> Посилання на GitHub: <a href={'https://github.com/AntonioRnk/ReactSearchFilms'}>ReactSearchFilms</a>. 
        </p>
        <p className={styles.content}>Збір доступних в Інтернеті матеріалів та їх розміщення в каталозі здійснюється в автоматичному режимі. 
        Власник сайту в даному випадку не здійснює контроль над доданим контентом.
        Власник сайту також не здійснює діяльність, пов'язану з публікацією неліцензійного контенту, незаконно вкраденого і який знаходиться під захистом правовласника. 
        На даному проекті <span>опубліковано тільки наявний у вільному доступі матеріал із відкритих джерел</span>.
        Цей проект є некомерційним, тому автор не має ніякої матеріальної відповідальності. 
        Вся інформація та посилання представлені виключно в ознайомлюючих цілях і призначені тільки для перегляду.
        Цей сайт містить посилання на відеофайли з інших сайтів мережі Інтернет. Жоден із відео файлів не знаходиться на сервері проекту, 
        лише відправляються запити на інші ресурси.<span> Це абсолютно легальний ресурс і містить лише посилання на інші сайти</span>.</p>
    </div>
  )
}

export default AboutPage