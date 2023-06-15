import s from "./Navigate.module.css";
import burgerMenu from './../../../common/image/burgerMenu.png' 
export const Navigate = () => {
  return (
    <div className={s.navigate}>
      <div className={s.menu}>
        <a href=""><img src={burgerMenu} alt="" /></a>
      </div>
      <nav>
        <a href="#">Главная</a>
        <a href="#">Скиллы</a>
        <a href="#">Работы</a>
        <a href="#">Контакты</a>
      </nav>{" "}
    </div>
  );
};
