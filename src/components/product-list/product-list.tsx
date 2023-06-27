import { CameraCard } from '../../types/camera-card';
import ProductCard from '../product-card/product-card';

type ProductCardProps = {
  cameras: CameraCard[];
  }

function ProductList({cameras}: ProductCardProps): JSX.Element {
  return (
    <>
      {cameras.map((camera) => (
        <ProductCard
          key={camera.id}
          product={camera}
        />
      ))}
    </>
  );
}

export default ProductList;

