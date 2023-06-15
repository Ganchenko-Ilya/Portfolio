import s from "./Header.module.css";
import sContainer from './../../common/style/container.module.css'
import { Navigate } from "./navigate/Navigate";

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={sContainer.container}>
        <header>
          <Navigate />
        </header>
      </div>
    </div>
  );
};
