import PopupWithForm from "./PopupWithForm";
import { useRef, useState } from "react";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {

  const avatarRef = useRef();
  const [isValid, setIsValid] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar(avatarRef.current.value);
    avatarRef.current.value = '';
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="update-avatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      submitName="Сохранить"
      submitLoadingName="Сохранение..."
      isValid={isValid}
    >
      <input ref={avatarRef} type="url" className="popup__input" id="avatar" name="avatar" placeholder="Ссылка на картинку" required />
      <span className="popup__input-error" id="avatar-error" />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
