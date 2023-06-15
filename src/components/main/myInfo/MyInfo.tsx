import s from "./MyInfo.module.css";
import sContainer from "./../../../common/style/container.module.css";

import myPhoto from "./../../../common/image/myPhoto.jpg";

export const MyInfo = () => {
  return (
    <div className={s.myInfo}>
      <div className={s.info + ' ' + sContainer.container}>
        <h1>
          <span>Здравствуйте.</span>Меня зовут Ганченко Илья. Я junior
          frontend-developer
        </h1>

        <div className={s.photo}>
          <img src={myPhoto} alt="" />
        </div>
      </div>
    </div>
  );
};
