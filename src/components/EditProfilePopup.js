import PopupWithForm from "./PopupWithForm";
import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {

  const [name, setName] = useState('');
  const [description, setDesciption] = useState('');

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDesciption(currentUser.about);
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDesciption(e) {
    setDesciption(e.target.value);
  }

  function handleSubmit(e) {
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      submitName="Сохранить"
      submitLoadingName="Сохранение..."
    >
      <input
        type="text" className="popup__input" id="profileName" name="profileName"
        placeholder="Имя" minLength="2" maxLength="40" required
        value={name} onChange={handleChangeName} />
      <span className="popup__input-error" id="profileName-error" />
      <input
        type="text" className="popup__input" id="profileDesc" name="profileDesc"
        placeholder="Описание" minLength="2" maxLength="200" required
        value={description} onChange={handleChangeDesciption} />
      <span className="popup__input-error" id="profileDesc-error" />
    </PopupWithForm>
  )
}

export default EditProfilePopup;
