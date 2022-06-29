import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import { useState } from 'react';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      {/* Попап редактирования профиля */}
      <PopupWithForm
        title="Редактировать профиль"
        name="edit-profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input type="text" className="popup__input" id="profileName" name="profileName" placeholder="Имя" minLength="2" maxLength="40" required />
        <span className="popup__input-error" id="profileName-error" />
        <input type="text" className="popup__input" id="profileDesc" name="profileDesc" placeholder="Описание" minLength="2" maxLength="200" required />
        <span className="popup__input-error" id="profileDesc-error" />
        <button aria-label="Сохранить" type="submit" className="popup__save-button link" name="submit">Сохранить</button>
      </PopupWithForm>
      {/* Попап добавления елемента} */}
      <PopupWithForm
        title="Новое место"
        name="add-element"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input type="text" className="popup__input" id="elementName" name="elementName" placeholder="Название" minLength="2" maxLength="30" required />
        <span className="popup__input-error" id="elementName-error" />
        <input type="url" className="popup__input" id="elementLink" name="elementLink" placeholder="Ссылка на картинку" required />
        <span className="popup__input-error" id="elementLink-error" />
        <button aria-label="Создать" type="submit" className="popup__save-button link" name="submit" disabled>Создать</button>
      </PopupWithForm>
      {/* Попап изменения аватара */}
      <PopupWithForm
        title="Обновить аватар"
        name="update-avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input type="url" className="popup__input" id="avatar" name="avatar" placeholder="Ссылка на картинку" required />
        <span className="popup__input-error" id="avatar-error" />
        <button aria-label="Сохранить" type="submit" className="popup__save-button link" name="submit">Сохранить</button>
      </PopupWithForm>
      {/* Попап картинки */}
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

    </div>
  );
}

export default App;
