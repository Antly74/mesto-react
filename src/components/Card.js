function Card({card, onCardClick}) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <article className="element">
      <img src={card.link} alt={card.name} className="element__image" onClick={handleClick} />
      <div className="element__caption">
        <h2 className="element__caption-text">{card.name}</h2>
        <div className="element__like-block">
          <button aria-label="Лайк" type="button" className="element__button-like link"></button>
          <p className="element__like-count">{card.likes.length}</p>
        </div>
      </div>
      <button aria-label="Удалить" type="button" className="element__button-delete link"></button>
    </article>
  );
}

export default Card;
