import s from "./Contacts.module.css";

import sContainer from "./../../../common/style/container.module.css";
export const Contacts = () => {
  return (
    <div className={s.contacts}>
      <div className={sContainer.container + ' ' + s.contactsWrapper }>
        <h2>Контакты</h2>
        <form action="" className={s.wrapper}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="E-mail" />
          <textarea placeholder="Your message"></textarea>
        </form>
      </div>
    </div>
  );
};
