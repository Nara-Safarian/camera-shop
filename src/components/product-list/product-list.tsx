import { CameraCard } from '../../types/camera-card';
import ProductCard from '../product-card/product-card';

type ProductCardProps = {
  cameras: CameraCard[];
  onProductBuyClick: (id: number) => void;
}

function ProductList({cameras, onProductBuyClick}: ProductCardProps): JSX.Element {
  return (
    <>
      {cameras.map((camera) => (
        <ProductCard
          onProductBuyClick={() => {onProductBuyClick(camera.id);}}
          key={camera.id}
          product={camera}
        />
      ))}
    </>
  );
}

export default ProductList;

