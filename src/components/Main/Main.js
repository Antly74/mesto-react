import { useState, useEffect } from 'react';
import { api } from '../../utils/Api';
import Card from '../Card';

function Main(props) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
      .then((info) => {
        setUserName(info.name);
        setUserDescription(info.about);
        setUserAvatar(info.avatar);
      })
      .catch(err => console.log(err));

    api.getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <main className="content">

      <section className="profile">
        <img alt="Аватар" className="profile__avatar link" onClick={props.onEditAvatar} src={userAvatar}/>
        <h1 className="profile__name">{userName}</h1>
        <p className="profile__desc">{userDescription}</p>
        <button aria-label="Редактировать" type="button" className="profile__edit link" onClick={props.onEditProfile}></button>
        <button aria-label="Добавить" type="button" className="profile__add link" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements">
        {cards.map(element => (
            <Card key={element._id} card={element} onCardClick={props.onCardClick} />
          )
        )}
      </section>

      {/* Попап полноэкранной картинки */}
      <div className="popup popup_type_image">
        <div className="popup__figure-container">
          <figure className="popup__figure">
            <img alt="Москва Сити" className="popup__image" />
            <figcaption className="popup__image-caption">Москва Сити</figcaption>
          </figure>
          <button aria-label="Отменить" type="button" className="popup__close-button link"></button>
        </div>
      </div>

      {/* Попап подтверждения */}
      <div className="popup popup_type_confirm">
        <div className="popup__window">
          <h2 className="popup__header">Вы уверены?</h2>
          <form className="popup__form" name="confirmForm" noValidate>
            <button aria-label="Сохранить" type="submit" className="popup__save-button link" name="submit">Да</button>
          </form>
          <button aria-label="Отменить" type="button" className="popup__close-button link"></button>
        </div>
      </div>

    </main>
  );
}

export default Main;
