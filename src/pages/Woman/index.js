import classNames from 'classnames/bind';
import styles from './Woman.module.scss';
import products from './products';
import { useNavigate } from 'react-router-dom';
import ScrollToTop from '../../assets/method/scrollToTop';

const cx = classNames.bind(styles);

function Woman() {
    ScrollToTop();

    const navigate = useNavigate();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('img-wrapper')}>
                <img
                    src="https://us.louisvuitton.com/images/is/image/PUSH2_CAPUCINES_ZENDAYA_US_DI3.jpg?wid=2048"
                    alt="img"
                ></img>
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

            <div className={cx('img-wrapper')}>
                <img
                    src="https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--WOMEN_PREFALL23_SHOW_TEASER_DI3.jpg?wid=1240"
                    alt="img"
                ></img>

                <div className={cx('img-content')}>
                    <p>Fashion shows - woman</p>
                    <h2>Woman's pre-fall 2023 show</h2>
                    <p>04/23</p>
                </div>

                <div className={cx('video-wrapper')}>
                    <video loop autoPlay muted style={{ width: '90%' }}>
                        <source
                            src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/sIui5USQ4z_HD.mp4"
                            type="video/mp4"
                        ></source>
                    </video>
                </div>
            </div>

            <div className={cx('footer')}>
                <div className={cx('footer-content')}>
                    <p>
                        Designed by Artistic Director Nicolas Ghesquière, Louis
                        Vuitton\'s ready-to-wear for women expresses news facets
                        of feminine fashion each season. From elevated
                        essentials to experimental silhouettes, these
                        collections cover the key pieces of a modern woman's
                        wardrobe: dresses, knitwear, pants, skirts and tops,
                        meticulously cut and crafted in styles that range from
                        sporty to retro, futuristic to romantic - and always
                        refined.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Woman;
