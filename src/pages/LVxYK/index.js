import classNames from 'classnames/bind';
import styles from './LVxYK.module.scss';
import contentImg from './image/content';
import sliderImg1 from './image/slider1';
import sliderImg2 from './image/slider2';
import images from '../../assets/images';
import { useState } from 'react';
import { ScrollToTop } from '../../assets/method';

const cx = classNames.bind(styles);

function LVxYK() {
    ScrollToTop();

    const [img1, setImg1] = useState(sliderImg1[0]);

    const handleClickBack1 = () => {
        let i = sliderImg1.indexOf(img1);
        if (i === 0) {
            setImg1(sliderImg1[sliderImg1.length - 1]);
        } else {
            setImg1(sliderImg1[i - 1]);
        }
    };

    const handleClickOn1 = () => {
        let i = sliderImg1.indexOf(img1);
        if (i === sliderImg1.length - 1) {
            setImg1(sliderImg1[0]);
        } else {
            setImg1(sliderImg1[i + 1]);
        }
    };

    const [img2, setImg2] = useState(sliderImg2[0]);

    const handleClickBack2 = () => {
        let i = sliderImg2.indexOf(img2);
        if (i === 0) {
            setImg2(sliderImg2[sliderImg2.length - 1]);
        } else {
            setImg2(sliderImg2[i - 1]);
        }
    };

    const handleClickOn2 = () => {
        let i = sliderImg2.indexOf(img2);
        if (i === sliderImg2.length - 1) {
            setImg2(sliderImg2[0]);
        } else {
            setImg2(sliderImg2[i + 1]);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <video controls loop autoPlay muted>
                    <source
                        src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/osmS1RI3c5_HD.mp4"
                        type="video/mp4"
                    ></source>
                </video>

                <img src={images.whiteLogo} alt="logo-lv"></img>
            </div>

            <div className={cx('inner')}>
                <div className={cx('content')}>
                    <h2>
                        CREATING INFINITY: THE WORLDS OF LOUIS VUITTON AND YAYOI
                        KUSAMA
                    </h2>
                    <p>
                        Louis Vuitton continues its creative dialogue with
                        world-renowned Japanese artist Yayoi Kusama for a
                        colorful collaboration featuring signature pieces
                        adorned with the artist's original motifs.
                    </p>
                </div>

                <div className={cx('slider-1')}>
                    <button onClick={handleClickBack1}>{'<'}</button>
                    <img src={img1.src} alt={img1.alt}></img>
                    <button onClick={handleClickOn1}>{'>'}</button>
                </div>

                <div className={cx('collection')}>
                    <div className={cx('coll-content')}>
                        <div className={cx('coll-content-wrapper')}>
                            <h2>A COLLECTION OF UNPARALLELED CREATIVITY</h2>
                            <p>
                                Yayoi Kusama's creativity meets Louis Vuitton's
                                savoir-faire in the latest collaboration with
                                the artist, which features iconic pieces
                                reinterpreted in colorful themes. In an ode to
                                audacious art and craftsmanship, the collection
                                introduces new motifs such as Pumpkins, ”Faces”,
                                Figurative Flowers, and Infinity Dots, present
                                throughout the Maison's designs. Explore for
                                Women Explore for Men
                            </p>
                        </div>
                    </div>

                    <div className={cx('slider-2')}>
                        <button onClick={handleClickBack2}>{'<'}</button>
                        <div className={cx('img-wrapper')}>
                            <img src={img2.src} alt={img2.alt}></img>
                        </div>
                        <button onClick={handleClickOn2}>{'>'}</button>
                    </div>
                </div>

                <div className={cx('video')}>
                    <video controls loop autoPlay muted>
                        <source
                            src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/g8oKpaXHVT_HD.mp4"
                            type="video/mp4"
                        ></source>
                    </video>
                </div>

                <div className={cx('life')}>
                    <div className={cx('life-content')}>
                        <div className={cx('life-content-wrapper')}>
                            <h2>A VISIONARY LIFE</h2>
                            <p>
                                From humble beginnings in rural Japan to
                                internationally renowned artist, Kusama
                                determinedly transformed her own life, spinning
                                enchantment from the power of her art. Totally
                                unclassifiable, she has emerged as the most
                                influential living female artist today.
                            </p>
                        </div>
                    </div>

                    {contentImg.map((img, index) => {
                        return (
                            <img key={index} src={img.src} alt={img.alt}></img>
                        );
                    })}
                </div>

                <div className={cx('video')}>
                    <video controls loop autoPlay muted>
                        <source
                            src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/8MMUvZS3bd_1080p.mp4"
                            type="video/mp4"
                        ></source>
                    </video>
                </div>

                <div className={cx('filter')}>
                    <div className={cx('filter-info')}>
                        <div className={cx('filter-info-wrapper')}>
                            <h2>KUSAMA-IFY YOUR WORLD</h2>
                            <p>
                                See the world through Kusama's eyes thanks to
                                social filters inspired by her signature motifs.
                            </p>
                            <button>Try Instagram Filter</button>
                            <button>Try Snapchat Filter</button>
                        </div>
                    </div>

                    <div className={cx('filter-vid')}>
                        <video controls loop autoPlay>
                            <source
                                src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/coKjsWoldI_MD.mp4"
                                type="video/mp4"
                            ></source>
                        </video>
                    </div>
                </div>

                <div className={cx('phone')}>
                    <div className={cx('phone-img')}>
                        <img
                            src="https://us.louisvuitton.com/content/dam/lv/online/high-end/unisex/collection/lady-b/U_LP_Lady_B_Drop_2_v1.html/jcr:content/assets/app-background.png?imwidth=2048"
                            alt="phone-img"
                        ></img>
                    </div>

                    <div className={cx('phone-info')}>
                        <h2>KUSAMA-IFY YOUR PHONE</h2>
                        <p>
                            Delve into the world of Yayoi Kusama with wallpapers
                            inspired by the artist's iconic designs, exclusively
                            available on the Louis Vuitton App.
                        </p>
                        <button>Download the App</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LVxYK;
