import s from "./Skill.module.css";

type SkillPropsType = {
  skill:string 
  text:string
  img:string
}
export const Skill = (props:SkillPropsType) => {
 
  return (
    <div className={s.skill}>
      <div>
        <img src={props.img} alt="logo" />
      </div>
      <p className={s.title}>{props.skill}</p>
      <p className={s.text}>{props.text}</p>
      
      
    </div>
  );
};
