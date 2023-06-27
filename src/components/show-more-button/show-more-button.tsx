type ShowMoreButtonProps = {
  onClick: () => void;
}


function ShowMoreButton({onClick}: ShowMoreButtonProps): JSX.Element {
  return (
    <button onClick={onClick} className="btn btn--purple" type="button">Показать больше отзывов
    </button>
  );
}

export default ShowMoreButton;
