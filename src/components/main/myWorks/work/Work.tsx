import s from "./Work.module.css";

type WorkPropsType = {
  img: string;
  title: string;
  description: string;
};
export const Work = (props: WorkPropsType) => {
  return (
    <div className={s.work}>
      <div className={s.imgWrapper}>
        <img src={props.img} alt="imageWork" />
        <a href="#" >Посмотреть</a>
      </div>
      <p className={s.title}>{props.title}</p>
      <p className={s.description}>{props.description}</p>
    </div>
  );
};
