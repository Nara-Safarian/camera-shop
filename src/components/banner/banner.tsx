import { Link } from 'react-router-dom';
import { Banner as BannerType} from '../../types/banner';

type BannerProps = {
  banner: BannerType;
}

function Banner({banner}: BannerProps): JSX.Element {
  return (
    <div className="banner">
      <picture>
        <source type="image/webp" srcSet={`${banner.previewImgWebp}, ${banner.previewImgWebp2x} 2x`} />
        <img src={banner.previewImg} srcSet={`${banner.previewImg2x} 2x`} width="1280" height="280" alt="баннер"/ >
      </picture>
      <p className="banner__info"><span className="banner__message">Новинка!</span><span className="title title--h1">{banner.name}</span><span className="banner__text">Профессиональная камера от&nbsp;известного производителя</span><Link to={`/cameras/${banner.id}`} className="btn">Подробнее</Link></p>
    </div>
  );
}

export default Banner;

