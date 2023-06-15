import s from "./Main.module.css";
import { Contacts } from "./contacts/Contacts";
import { DistanceWork } from "./distanceWork/DistanceWork";
import { MyInfo } from "./myInfo/MyInfo";
import { MySkills } from "./mySkills/MySkills";
import { MyWorks } from "./myWorks/MyWorks";
export const Main = () => {
  return (
    <div className={s.main}>
      <MyInfo />
      <MySkills />
      <MyWorks />
      <DistanceWork />
      <Contacts />
    </div>
  );
};
