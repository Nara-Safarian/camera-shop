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
          id={camera.id}
          name={camera.name}
          previewImg={camera.previewImg}
          previewImg2x={camera.previewImg2x}
          previewImgWebp={camera.previewImgWebp}
          previewImgWebp2x={camera.previewImgWebp2x}
          price={camera.price}
          reviewCount={camera.reviewCount}
        />
      ))}
    </>
  );
}

export default ProductList;

