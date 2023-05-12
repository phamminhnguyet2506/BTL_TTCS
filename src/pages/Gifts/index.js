import classnames from 'classnames/bind';
import styles from './Gifts.module.scss';
import ScrollToTop from '../../assets/method/scrollToTop';
import introImg from './introImg';
import products from './products';
import { Link, useNavigate } from 'react-router-dom';

const cx = classnames.bind(styles);

function Gifts() {
    ScrollToTop();
    const navigate = useNavigate();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('intro')}>
                <div className={cx('intro-img')}>
                    {introImg.map((img, index) => {
                        return (
                            <div
                                className={cx('intro-img-wrapper')}
                                key={index}
                            >
                                <img src={img.src} alt={img.alt}></img>
                                <Link to={img.href}>
                                    <p>{img.label}</p>
                                </Link>
                            </div>
                        );
                    })}
                </div>

                <div className={cx('intro-video')}>
                    <video controls autoPlay loop muted>
                        <source
                            src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/SEm3wNWYXW_HD.mp4"
                            type="video/mp4"
                        ></source>
                    </video>

                    <div className={cx('intro-content')}>
                        <h2>MOTHER'S DAY SELECTION</h2>
                        <p>
                            In celebration of Mother's Day, Louis Vuitton has
                            carefully curated a selection of inspired gifts.
                            From a striking range of fine jewelry and watches to
                            iconic leather goods, the Maison's collection of
                            signature pieces commemorates enduring generational
                            connections.
                        </p>
                    </div>
                </div>
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

            <div className={cx('commercial')}>
                <video controls loop autoPlay muted>
                    <source
                        src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/5iIazh2jgN_HD.mp4"
                        type="video/mp4"
                    ></source>
                </video>

                <img
                    src="https://vn.louisvuitton.com/images/is/image/HP_SG_Mothersday_Loop_DI3.jpg?wid=2048"
                    alt="img"
                    style={{ width: '100%', padding: '10%' }}
                ></img>
            </div>

            <div className={cx('footer')}>
                <div className={cx('footer-content')}>
                    <p>
                        Louis Vuitton has assembled a curated edit of gifts to
                        delight the most discerning tastes. Find the perfect
                        present for every wishlist from the Maison's selection
                        of luxurious ready-to-wear, shoes, iconic bags and small
                        leather goods, or choose from a distinctive range of
                        watches and fine jewelry. Discover signature scarves and
                        elegant shawls as well as exclusive fragrances and
                        exceptional gift ideas from the Art of Living.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Gifts;
