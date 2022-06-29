import { useState, useEffect } from 'react';
import { api } from '../utils/Api';
import Card from './Card';

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
        <img alt="Аватар" className="profile__avatar link" onClick={props.onEditAvatar} src={userAvatar} />
        <h1 className="profile__name">{userName}</h1>
        <p className="profile__desc">{userDescription}</p>
        <button aria-label="Редактировать" type="button" className="profile__edit link" onClick={props.onEditProfile} />
        <button aria-label="Добавить" type="button" className="profile__add link" onClick={props.onAddPlace} />
      </section>

      <section className="elements">
        {cards.map(element => (
            <Card key={element._id} card={element} onCardClick={props.onCardClick} />
          )
        )}
      </section>

    </main>
  );
}

export default Main;
