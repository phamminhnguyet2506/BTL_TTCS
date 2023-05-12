import classNames from 'classnames/bind';
import styles from './Jewelry.module.scss';
import ScrollToTop from '../../assets/method/scrollToTop';
import { useNavigate } from 'react-router-dom';
import products from './products';

const cx = classNames.bind(styles);

function Jewelry() {
    ScrollToTop();

    const navigate = useNavigate();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('header-video')}>
                    <video loop autoPlay controls muted>
                        <source
                            src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/vkWpzLvKdd_HD.mp4"
                            type="video/mp4"
                        ></source>
                    </video>
                </div>

                <div className={cx('header-content')}>
                    <h2>IDYLLE BLOSSOM</h2>
                    <p>
                        Louis Vuitton's Idylle Blossom Fine Jewelry Collection
                        celebrates the iconic Monogram Flower, a true embodiment
                        of the Maison's heritage and savoir-faire.
                    </p>
                </div>
            </div>

            <div className={cx('intro')}>
                <div className={cx('intro-img')}>
                    <img
                        src="https://us.louisvuitton.com/content/dam/lv/online/high-end/women/jewelry/BC_Women_Jwl_LV_Volt_new_design_V2.html/jcr:content/assets/BC_230121_VOLT_CDP2_WORN_LVCOM_3360x1680_DI1.jpg?imwidth=1240"
                        alt="intro-img"
                    ></img>
                </div>

                <div className={cx('intro-content')}>
                    <h2>LV VOLT</h2>
                    <p>
                        The Maison's iconic initials come together, split apart,
                        and intertwine to become a powerful metaphor for
                        movement and their own unit of measure in this graphic
                        Fine Jewelry collection.
                    </p>
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

            <div className={cx('footer')}>
                <div className={cx('footer-video')}>
                    <video loop autoPlay controls muted>
                        <source
                            src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/izRwRXAjlW_HD.mp4"
                            type="video/mp4"
                        ></source>
                    </video>
                </div>

                <div className={cx('footer-content')}>
                    <h2>EMPREINTE</h2>
                    <p>
                        Incorporating the Maison's emblematic codes, this
                        intemporal Fine Jewelry Collection takes the imprint of
                        the nails used on heritage trunks and transforms it into
                        a line of bold and contemporary pieces.
                    </p>
                </div>
            </div>
            <div className={cx('footer-img')}>
                <div className={cx('footer-img-wrapper')}>
                    <img
                        src="https://us.louisvuitton.com/content/dam/lv/online/high-end/unisex/Jewelry/U_Ma_LV_for_UNICEF_v4.html/jcr:content/assets/01_MASTHEAD/header_DI3.jpg?imwidth=2048"
                        alt="img"
                    ></img>
                    <p>
                        As part of the Louis Vuitton for UNICEF partnership, the
                        Maison presents a new collection of Silver Lockit
                        bracelets designed by Virgil Abloh.
                    </p>
                </div>

                <div className={cx('footer-img-wrapper')}>
                    <p>
                        Following an initial collaboration in 2020, this year's
                        Silver Lockit designs bear the same Virgil Abloh
                        signatures in new materials and colors: chains,
                        padlocks, and charms in natural or black titanium with
                        cord bracelets in neon yellow, rainbow, or black.
                    </p>
                    <img
                        src="https://us.louisvuitton.com/content/dam/lv/online/high-end/unisex/Jewelry/U_Ma_LV_for_UNICEF_v4.html/jcr:content/assets/03_VISUAL/Silver_Lockit_full_DIF.jpg?imwidth=20480"
                        alt="img"
                    ></img>
                </div>
            </div>
        </div>
    );
}

export default Jewelry;
