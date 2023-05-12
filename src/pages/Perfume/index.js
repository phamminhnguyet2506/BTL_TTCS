import classnames from 'classnames/bind';
import styles from './Perfume.module.scss';
import ScrollToTop from '../../assets/method/scrollToTop';
import { Link, useNavigate } from 'react-router-dom';
import products from './products';

const cx = classnames.bind(styles);

function Perfume() {
    ScrollToTop();
    const navigate = useNavigate();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('img-wrapper')}>
                    <img
                        src="https://us.louisvuitton.com/content/dam/lv/online/high-end/unisex/Fragrances/U_Fa_Fragrance_YKxLV.html/jcr:content/assets/LV_YAYOI_KUSAMA-DROP2_180_LVCOM_1920x1080_ANIMATION.jpg?imwidth=2048"
                        alt="img"
                    ></img>

                    <h2>LOUIS VUITTON PARFUMS X YAYOI KUSAMA</h2>
                </div>

                <div className={cx('header-content')}>
                    <p>
                        As part of the Louis Vuitton x Yayoi Kusama collection,
                        the Maison's emblematic perfume bottle designed by Marc
                        Newson, has been adorned with vibrant new motifs created
                        by the Japanese artist.
                    </p>
                    <div className={cx('content-img')}>
                        <div className={cx('content-img-wrapper')}>
                            <img
                                src="https://us.louisvuitton.com/content/dam/lv/online/high-end/unisex/Fragrances/U_Fa_Fragrance_YKxLV.html/jcr:content/assets/LP0335_PM2_Front.jpg?imwidth=2048"
                                alt="img1"
                            ></img>
                        </div>
                        <div className={cx('content-img-wrapper')}>
                            <img
                                src="https://us.louisvuitton.com/content/dam/lv/online/high-end/unisex/Fragrances/U_Fa_Fragrance_YKxLV.html/jcr:content/assets/LP0336_PM2_Front.jpg?imwidth=2048"
                                alt="img2"
                            ></img>
                        </div>
                        <div className={cx('content-img-wrapper')}>
                            <img
                                src="https://us.louisvuitton.com/content/dam/lv/online/high-end/unisex/Fragrances/U_Fa_Fragrance_YKxLV.html/jcr:content/assets/LP0334_PM2_Front.jpg?imwidth=2048"
                                alt="img3"
                            ></img>
                        </div>
                    </div>
                </div>

                <div className={cx('header-content')}>
                    <div className={cx('content-img')}>
                        <img
                            src="https://us.louisvuitton.com/content/dam/lv/online/high-end/unisex/Fragrances/U_Fa_Fragrance_YKxLV.html/jcr:content/assets/LV_YAYOI_KUSAMA-DROP2_190_LVCOM_1920x1080_ANIMATION.jpg?imwidth=2048"
                            alt="img"
                        ></img>
                    </div>
                    <p>
                        A recurring theme of Yayoi Kusama's artwork, infinite
                        patterns have become a signature feature of her
                        aesthetic. The graphic designs envelop three iconic
                        fragrances: Spell on You, personified by actress Léa
                        Seydoux, L'Immensité and Attrape-Rêves.
                    </p>
                </div>
            </div>

            <div className={cx('pr')}>
                <div className={cx('pr-wrapper')}>
                    <div className={cx('pr-content')}>
                        <div className={cx('pr-content-wrapper')}>
                            <h2>SPELL ON YOU</h2>
                            <p>
                                Yayoi Kusama's Figurative Flowers motif draws
                                inspiration from her life's journey, beginning
                                with her childhood in rural Japan. Its alluring
                                botanical imagery mirrors the hypnotic floral
                                composition of the Spell on You fragrance.
                            </p>
                            <Link to={'/lv-yk'}>
                                <button>Discover The Fragrance</button>
                            </Link>
                        </div>
                    </div>

                    <div className={cx('pr-vid')}>
                        <video controls loop autoPlay muted>
                            <source
                                src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/o2XNXHmLi1_MD.mp4"
                                type="video/mp4"
                            ></source>
                        </video>
                    </div>
                </div>

                <div className={cx('pr-wrapper')}>
                    <div className={cx('pr-vid')}>
                        <video controls loop autoPlay muted>
                            <source
                                src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/D3FV1t8Ed1_MD.mp4"
                                type="video/mp4"
                            ></source>
                        </video>
                    </div>

                    <div className={cx('pr-content')}>
                        <div className={cx('pr-content-wrapper')}>
                            <h2>L'IMMENSITÉ</h2>
                            <p>
                                In an imaginative reinterpretation of this
                                endearing silhouette, Yayoi Kusama's Pumpkins
                                motif is emblematic of limitless creativity,
                                echoing the sentiment of L'Immensité, an ode to
                                infinite freedom.
                            </p>
                            <Link to={'/lv-yk'}>
                                <button>Discover The Fragrance</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={cx('pr-wrapper')}>
                    <div className={cx('pr-content')}>
                        <div className={cx('pr-content-wrapper')}>
                            <h2>ATTRAPE-RÊVES</h2>
                            <p>
                                The shapes and stylized characters of the
                                "Faces" motif are inspired by the paintings in
                                the "My Eternal Soul" series, launched by the
                                artist in 2009. The expressive, free-flowing
                                lines echo the sensory awakening of
                                Attrape-Rêves, an enticing journey between dream
                                and reality.
                            </p>
                            <Link to={'/lv-yk'}>
                                <button>Discover The Fragrance</button>
                            </Link>
                        </div>
                    </div>

                    <div className={cx('pr-vid')}>
                        <video controls loop autoPlay muted>
                            <source
                                src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/2tW1NBpoFG_MD.mp4"
                                type="video/mp4"
                            ></source>
                        </video>
                    </div>
                </div>
            </div>

            <img
                src="https://www.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--BC_COMMERCIALMOMENTS_MOTHERSDAYPART2_03_LVCOM_2048x1152_DI3.jpg?wid=2048"
                alt="img"
                style={{ width: '100%', marginTop: '-0.5rem' }}
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
                                <img src={product.img1} alt="lv-product"></img>
                                <p>{product.name}</p>
                            </button>
                        </div>
                    );
                })}
            </div>

            <div className={cx('footer')}>
                <div className={cx('img-wrapper')}>
                    <img
                        src="https://us.louisvuitton.com/content/dam/lv/online/high-end/unisex/Fragrances/U_Fa_City_Of_Stars.html/jcr:content/assets/masthead/City_Of_Stars_3360x1680_DI1.jpg?imwidth=1024"
                        alt="img"
                    ></img>

                    <h2>COLOGNE PERFUME COLLECTION</h2>
                </div>
            </div>
        </div>
    );
}

export default Perfume;
