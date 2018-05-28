import React from 'react';

import './Contact.css'

const Contact = (props) => (
  <div className="contact">
    {/*<header className="contact__header"><h2>Kontakt</h2></header>*/}
    <main className="contact__content">
      <a href="skype:live:mateusz.wodnik?call" className="contact__card skype">
        <span className="skype__logo fab fa-skype"></span>
        <span className="skype__username">live:mateusz.wodnik</span>
        <span className="skype__call fas fa-phone"></span>
      </a>
      <form className="contact__card form">
        <input type="email" className="form__item form__item--email" placeholder="adres@email.pl"/>
        <input type="text" className="form__item form__item--subject" placeholder="Temat"/>
        <textarea className="form__item form__item--message" name="message" id="message" cols="30" rows="10" placeholder="Wiadomość"></textarea>
        <button className="form__item form__item--submit" type="submit">Wyślij</button>
      </form>
    </main>
  </div>
);

export default Contact;
