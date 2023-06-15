import s from "./Footer.module.css";
import sContainer from './../../common/style/container.module.css'
export const Footer = () => {
  return (
    <div>
      <div className={sContainer.container + " " + s.wrapperFooter}>
        <p className={s.name}>Илья Ганченко</p>
        <div className={s.wrapperMessage}>
            <a href="#">Instagram</a>
            <a href="#">Linkedin</a>
            <a href="#">Facebook</a>
          
        </div>
        <p>2023 &copy; Все права защищены</p>
      </div>
    </div>
  );
};
