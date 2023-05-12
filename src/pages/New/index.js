import classNames from 'classnames/bind';
import styles from './New.module.scss';
import { ScrollToTop } from '../../assets/method';
import { useNavigate } from 'react-router-dom';
import products from './products';

const cx = classNames.bind(styles);

function New() {
    ScrollToTop();
    const navigate = useNavigate();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <p>New This Season</p>
            </div>

            <div className={cx('video-wrapper')}>
                <video controls loop autoPlay muted>
                    <source
                        src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/VKiVfg7Q7U_HD.mp4"
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

            <div className={cx('video-wrapper')}>
                <video controls loop autoPlay muted>
                    <source
                        src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/vUYerqgMpx_HD.mp4"
                        type="video/mp4"
                    ></source>
                </video>
            </div>

            <div className={cx('cottage')}>
                <div className={cx('cottage-intro')}>
                    <h2>LV COTTAGE</h2>
                    <p>
                        LV Archlight 2.0 Collection: the LV Cottage line
                        embodies a romantic countryside aesthetic, comprising
                        crocheted finishes and a neutral color palette.
                    </p>
                </div>

                <div className={cx('cottage-infor-1')}>
                    <img
                        src="https://us.louisvuitton.com/content/dam/lv/online/high-end/unisex/collection/archlight/U_LP_Shoes_Archlight.html/jcr:content/assets/cottage/ARCHLIGHT_ANNIVERSARY_140_LVCOM_1600x2000_DII.jpg?imwidth=2048"
                        alt="img-1"
                    ></img>
                    <div className={cx('content')}>
                        <p>
                            Actress Chloë Grace Moretz highlights the
                            free-spirited allure of this daring yet elegant
                            design.
                        </p>
                    </div>
                </div>

                <div className={cx('cottage-infor-2')}>
                    <div className={cx('content')}>
                        <p>
                            In soft, dreamy hues, the LV Cottage combines its
                            iconic structured sole with contrasting materials
                            and unique textures.
                        </p>
                    </div>
                    <img
                        src="https://us.louisvuitton.com/content/dam/lv/online/high-end/unisex/collection/archlight/U_LP_Shoes_Archlight.html/jcr:content/assets/cottage/ARCHLIGHT_ANNIVERSARY_050_LVCOM_1600x2000_DII.jpg?imwidth=1080"
                        alt="img-2"
                    ></img>
                </div>
            </div>

            <div className={cx('footer')}>
                <div className={cx('footer-content')}>
                    <p>
                        Explore a regularly updated edit of new releases from
                        Louis Vuitton, presenting the Maison's most sought-after
                        recent arrivals for women. Discover the latest styles
                        from the Maison's ready-to-wear collections, as well as
                        an on-point selection of bags, small leather goods,
                        fashion-forward shoes - sneakers, boots, mules - along
                        with the newest watches and jewelry, fragrances,
                        accessories, and more.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default New;
