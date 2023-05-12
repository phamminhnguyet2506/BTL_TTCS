import classnames from 'classnames/bind';
import styles from './Watches.module.scss';
import products from './products';
import { useNavigate } from 'react-router-dom';
import ScrollToTop from '../../assets/method/scrollToTop';

const cx = classnames.bind(styles);

function Watches() {
    ScrollToTop();
    const navigate = useNavigate();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <video loop autoPlay controls>
                    <source
                        src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/2OXdECeJmf_HD.mp4"
                        type="video/mp4"
                    ></source>
                </video>
                <img
                    src="https://us.louisvuitton.com/content/dam/lv/online/high-end/unisex/Watches/BC_Edito_Watches_Tambour_Street_Diver.html/jcr:content/assets/LV_TSD_STILL_03_C_LVCOM_2048x1152_DI3.jpg?imwidth=1240"
                    alt="img"
                ></img>
                <div className={cx('header-content')}>
                    <h2>TAMBOUR STREET DIVER</h2>
                    <p>
                        Bringing together the credentials of a traditional dive
                        watch, the Tambour Street Diver collection embodies
                        Louis Vuitton's bold spirit in a selection of
                        distinctive hues. Available in both its original form,
                        which was awarded the GPHG Diving Prize in 2021, as well
                        as a new chronograph version, it combines casual
                        elegance and top-level performance.
                    </p>
                </div>
            </div>

            <img
                src="https://us.louisvuitton.com/content/dam/lv/online/high-end/unisex/Watches/U_Fa_World_Of_Watches.html/jcr:content/assets/LV_WOW_Savoir_Faire2_3360x1680.jpg?imwidth=1240"
                alt="img"
                style={{ width: '100%' }}
            ></img>

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
                                <img
                                    src={product.img1}
                                    alt="lv-product"
                                    className={cx('product-img')}
                                ></img>
                                <p>{product.name}</p>
                            </button>
                        </div>
                    );
                })}
            </div>

            <img
                src="https://us.louisvuitton.com/content/dam/lv/online/high-end/unisex/Watches/U_Fa_World_Of_Watches.html/jcr:content/assets/LV_WOW_Savoir_Faire2_3360x1680.jpg?imwidth=1240"
                alt="img"
                style={{ width: '100%' }}
            ></img>

            <div className={cx('footer')}>
                <img
                    src="https://us.louisvuitton.com/content/dam/lv/online/high-end/men/watches/BC_Edito_Men_Watches.html/jcr:content/assets/220901_WORLD-OF-WATCHES_2048x1152_LVCOM_01.jpg?imwidth=1240"
                    alt="img"
                ></img>
                <div className={cx('footer-content')}>
                    <h2>TAMBOUR MONOGRAM</h2>
                    <p>
                        Thanks to expert savoir-faire, the Tambour Monogram's
                        dial faithfully reproduces the Maison's iconic canvas
                        motif.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Watches;
