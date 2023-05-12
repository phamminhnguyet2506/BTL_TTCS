import classNames from 'classnames/bind';
import styles from './Man.module.scss';
import ScrollToTop from '../../assets/method/scrollToTop';
import { useNavigate } from 'react-router-dom';
import products from './products';

const cx = classNames.bind(styles);

function Man() {
    ScrollToTop();

    const navigate = useNavigate();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('img-header')}>
                    <img
                        src="https://us.louisvuitton.com/content/dam/lv/online/high-end/men/highlight/BC_Modern_Classic_Silhouette_new_design.html/jcr:content/assets/MEN_LV_CLASSIC_MAN_SHOOT_1_0177_V03_LVCOM_3360x1680_DI1.jpg?imwidth=1240"
                        alt="img"
                    ></img>
                </div>

                <div className={cx('header-content')}>
                    <div className={cx('content-wrapper')}>
                        <h2>MODERN CLASSIC SILHOUETTES</h2>
                        <p>
                            Louis Vuitton introduces tailored silhouettes that
                            blend the Maison's signature codes with a
                            sophisticated, contemporary twist. Enriching the
                            season's styles, a selection of bags and leather
                            goods reinvent emblematic shapes with new, updated
                            detailing.
                        </p>
                    </div>
                </div>
            </div>
            <div className={cx('header-video')}>
                <video loop autoPlay controls muted>
                    <source
                        src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/VKDGjECmuL_HD.mp4"
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

            <div className={cx('footer')}>
                <div className={cx('footer-wrapper')}>
                    <div className={cx('footer-content')}>
                        <div className={cx('content-wrapper')}>
                            <h2>THE CAMPAIGN</h2>
                            <p>
                                In a series of photos taken by photographer and
                                filmmaker Glen Luchford, football legend Lionel
                                Messi is captured en route to his next
                                destination, accompanied by his Horizon
                                suitcase. Emblematic of the Maison's heritage,
                                the Louis Vuitton Horizon line offers
                                unprecedented perspectives and infinite freedom.
                            </p>
                        </div>
                    </div>

                    <div className={cx('content-footer-img')}>
                        <img
                            src="https://us.louisvuitton.com/content/dam/lv/online/high-end/unisex/travel/U_Tr_Horizon_Never_Ends_Messi_LP_V2.html/jcr:content/assets/TRAVEL_HORIZON_LM_MAIN_VISUAL_155_LVCOM_1600x2000_DII.jpg?imwidth=1080"
                            alt="footer-img"
                        ></img>
                    </div>
                </div>

                <div className={cx('footer-img')}>
                    <img
                        src="https://us.louisvuitton.com/content/dam/lv/online/high-end/unisex/travel/U_Tr_Horizon_Never_Ends_Messi_LP_V2.html/jcr:content/assets/TRAVEL_HORIZON_LM_MAIN_VISUAL_165_LVCOM_2048x1152_DI3.jpg?imwidth=2048"
                        alt="img"
                    ></img>
                </div>

                <video loop autoPlay controls muted>
                    <source
                        src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/i9NOeffKrv_HD.mp4"
                        type="video/mp4"
                    ></source>
                </video>
            </div>
        </div>
    );
}

export default Man;
