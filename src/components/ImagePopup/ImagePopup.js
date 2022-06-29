function ImagePopup({card, onClose}) {

  return (
    <div className={`popup popup_type_image ${card.name === undefined ? '' : 'popup_opened'}`}>
      <div className="popup__figure-container">
        <figure className="popup__figure">
          <img alt={card.name} className="popup__image" src={card.link}/>
          <figcaption className="popup__image-caption">{card.name}</figcaption>
        </figure>
        <button aria-label="Отменить" type="button" className="popup__close-button link" onClick={onClose}></button>
      </div>
    </div>
  );
}

export default ImagePopup;
