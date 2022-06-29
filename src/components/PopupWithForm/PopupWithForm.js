function PopupWithForm ({title, name, children, isOpen, onClose}) {

  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened':''}`}>
      <div className="popup__window">
        <h2 className="popup__header">{title}</h2>
        <form className="popup__form" name={name} noValidate>
          {children}
        </form>
        <button aria-label="Отменить" type="button" className="popup__close-button link" onClick={onClose}></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
