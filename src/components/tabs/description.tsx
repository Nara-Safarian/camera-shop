type DescriptionTabProps = {
  descriptionText: string;
}

export default function DescriptionTab({descriptionText}: DescriptionTabProps): JSX.Element {

  return (
    <div className="product__tabs-text">
      <p>{descriptionText}</p>
    </div>
  );
}
