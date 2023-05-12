import classNames from 'classnames/bind';
import styles from './Bags.module.scss';
import ScrollToTop from '../../assets/method/scrollToTop';
import imgs from './slider';
import { useState } from 'react';
import products from './products';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Bags() {
    ScrollToTop();

    const navigate = useNavigate();
    const [img, setImg] = useState(imgs[0]);

    const handleClickBack = () => {
        let i = imgs.indexOf(img);
        if (i === 0) {
            setImg(imgs[imgs.length - 1]);
        } else {
            setImg(imgs[i - 1]);
        }
    };

    const handleClickOn = () => {
        let i = imgs.indexOf(img);
        if (i === imgs.length - 1) {
            setImg(imgs[0]);
        } else {
            setImg(imgs[i + 1]);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('intro')}>
                <img
                    src="https://www.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--BC_WOMEN_EDITORIALISATION_03_LVCOM_2048x1152_DI3.jpg?wid=1240"
                    alt="img-intro-1"
                ></img>

                <img
                    src="https://www.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--BC_WOMEN_EDITORIALISATION_22_LVCOM_2048x1152_DI3.jpg?wid=2048"
                    alt="img-intro-2"
                ></img>

                <img
                    src="https://www.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--BC_WOMEN_EVM_062_LVCOM_2048x1152_DI3.jpg?wid=2048"
                    alt="img-intro-3"
                ></img>

                <img
                    src="https://www.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--BC_221210_OMBRE_NOMADE_036_LVCOM_2048x1152_DI3.jpg?wid=2048"
                    alt="img-intro-4"
                ></img>
            </div>

            <div className={cx('slider-wrapper')}>
                <div className={cx('slider')}>
                    <button onClick={handleClickBack}>{'<'}</button>
                    <img src={img.src} alt={img.alt}></img>
                    <button onClick={handleClickOn}>{'>'}</button>
                </div>
            </div>

            <div className={cx('video-wrapper')}>
                <video autoPlay loop>
                    <source
                        src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/bFwjF0qFcy_HD.mp4"
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
                <img
                    src="https://www.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--BC_WOMEN_EDITORIALISATION_12_LVCOM_2048x1152_DI3.jpg?wid=2048"
                    alt="img-footer"
                ></img>
                <div className={cx('img-content')}>
                    <p>Fashion shows - woman</p>
                    <h2>Woman's pre-fall 2023 show</h2>
                    <p>04/23</p>
                </div>
            </div>
        </div>
    );
}

export default Bags;
