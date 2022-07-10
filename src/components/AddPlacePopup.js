import PopupWithForm from "./PopupWithForm";
import { useState, useEffect } from "react";

function AddPlacePopup({isOpen, onClose, onAddPlace}) {

  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setName('');
      setLink('');
    }
  }, [isOpen]);

  function handleSubmit(e) {
    onAddPlace({name, link});
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="add-element"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      submitName="Создать"
      submitLoadingName="Создание..."
      isValid={isValid}
    >
      <input
        type="text" className="popup__input" id="elementName" name="elementName"
        placeholder="Название" minLength="2" maxLength="30" required
        value={name} onChange={handleChangeName} />
      <span className="popup__input-error" id="elementName-error" />
      <input
        type="url" className="popup__input" id="elementLink" name="elementLink"
        placeholder="Ссылка на картинку" required
        value={link} onChange={handleChangeLink} />
      <span className="popup__input-error" id="elementLink-error" />
    </PopupWithForm>
);
}

export default AddPlacePopup;
