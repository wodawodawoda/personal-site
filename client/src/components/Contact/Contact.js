import React from 'react';

import './Contact.css'

const Contact = (props) => (
  <div className="contact">
    {/*<header className="contact__header"><h2>Kontakt</h2></header>*/}
    <main className="contact__content">
      <a href="skype:live:mateusz.wodnik?call" className="contact__card contact__card--skype">
        <span className="contact__logo fab fa-skype"></span>
        {/*<span className="contact__username">live:mateusz.wodnik</span>*/}
        {/*<span className="skype__call fas fa-phone"></span>*/}
      </a>
      <a href="http://www.linkedin.com/in/mateusz-wodnik" className="contact__card contact__card--linkedin">
        <span className="contact__logo fab fa-linkedin"></span>
        {/*<span className="contact__username">linkedin.com/mateusz.wodnik</span>*/}
      </a>
      <a href="tel:691933520" className="contact__card contact__card--phone">
        <span className="contact__logo fas fa-phone-square"></span>
        {/*<span className="contact__phone">691 933 520</span>*/}
      </a>
      <a href="mailto:mateusz.wodnik@gmail.com" className="contact__card contact__card--email form">
        <span className="contact__logo fas fa-envelope"></span>
        <input type="email" className="form__item form__item--email" placeholder="adres@email.pl"/>
        <input type="text" className="form__item form__item--subject" placeholder="Temat"/>
        <textarea className="form__item form__item--message" name="message" id="message" cols="30" rows="10" placeholder="Wiadomość"></textarea>
        <button className="form__item form__item--submit" type="submit">Wyślij</button>
      </a>
    </main>
  </div>
);

export default Contact;
