import classnames from 'classnames/bind';
import styles from './ArtOfLiving.module.scss';
import { ScrollToTop } from '../../assets/method';
import { useNavigate } from 'react-router-dom';
import products from './products';

const cx = classnames.bind(styles);

function ArtOfLiving() {
    ScrollToTop();
    const navigate = useNavigate();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <video autoPlay loop controls muted>
                    <source
                        src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/pqZflJadap_HD.mp4"
                        type="video/mp4"
                    ></source>
                </video>

                <div className={cx('header-content')}>
                    <h2>ART OF LIVING</h2>
                    <p>
                        A display of the Maison's unparalleled savoir-faire and
                        craftsmanship, Louis Vuitton brings together its Art of
                        Living collections, including iconic trunks,
                        accessories, Les Objets Nomades, games, and leisure
                        items.
                    </p>
                </div>

                <video autoPlay loop controls muted>
                    <source
                        src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/new414VykW_HD.mp4"
                        type="video/mp4"
                    ></source>
                </video>
            </div>

            <div className={cx('products')}>
                {products.map((product, index) => {
                    return (
                        <div className={cx('product-wrapper')} key={index}>
                            <button
                                onClick={() =>
                                    navigate(`/item/${product.id}`, {
                                        state: product,
                                    })
                                }
                            >
                                <img src={product.img1} alt="lv-product"></img>
                                <p>{product.name}</p>
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ArtOfLiving;
