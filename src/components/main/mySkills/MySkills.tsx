import s from "./MySkills.module.css";
import { Skill } from "./skill/Skill";
import sContainer from "./../../../common/style/container.module.css";
import reactLogo from './../../../common/image/reactLogo.png'
import typeScriptLogo from './../../../common/image/typeScriptLogo.png'
import reduxLogo from './../../../common/image/reduxLogo.png'

type skillDataType = {
  skill:string 
  text:string
  img:string
}

export const MySkills = () => {
  const skillData:skillDataType[] = [
    {
      skill: "React",
      text: "Основы React.Использование основных хуков:useCallBack,useEffect, useState, useMemo.Знание основ оптимизации.Прокидывание пропсов.Умение работать как с классовыми, так и с функциональными компонентами",
      img:reactLogo
    },
    {
      skill: "TypeScript",
      text: "Основы языка.Умение типизировать объекты,параметры,функции. Использовать дженэрики",
      img:typeScriptLogo
    },
    {
      skill: "Redux",
      text: "Умение управлять  стэйтом.Знание правил использования Redux, подключение и  взаимодействие с React",
      img:reduxLogo
    },
  ];
  const skillMap = skillData.map((el,index) => <Skill key={index} skill={el.skill} text={el.text} img={el.img} />);
  return (
    <div  >
      <div className={sContainer.container + ' ' + s.mySkills}>

     
      <h2>Мои скиллы</h2>

      <div className={s.wrapper}>
        {skillMap}

      </div>

      
      </div>
    </div>
  );
};
