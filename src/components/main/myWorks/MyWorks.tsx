import s from "./MyWorks.module.css";
import sContainer from "./../../../common/style/container.module.css";
import { Work } from "./work/Work";
import todolist from './../../../common/image/todolist.jpg'
import socialNetWork from './../../../common/image/socialNetWork.png'

export const MyWorks = () => {
  const workData = [
    { img: todolist, title: "Todolist", description: "Проект, который выполняет задачи  Todo, для систематизации задач клиента" },
    { img: socialNetWork, title: "Social network", description: "Социальная сеть, учебный проект, аналог популярных социальных сетей " }
  ];
  const workMap = workData.map(el => <Work img={el.img} title={el.title} description={el.description} />)
  return (
    <div >
      <div className={sContainer.container + ' ' + s.myWorks}>
        <h2>Мои работы</h2>
        <div className={s.wrapper}>
          {workMap}

        </div>
      </div>
    </div>
  );
};
