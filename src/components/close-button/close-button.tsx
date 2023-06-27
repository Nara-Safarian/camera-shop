type CloseButtonProps = {
  onClose: () => void;
}

function CloseButton({onClose}: CloseButtonProps): JSX.Element {
  return (
    <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={onClose}>
      <svg width="10" height="10" aria-hidden="true">
        <use xlinkHref="#icon-close"></use>
      </svg>
    </button>
  );
}

export default CloseButton;

