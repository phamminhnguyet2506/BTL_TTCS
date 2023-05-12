import styles from './Services.module.scss';
import classnames from 'classnames/bind';
import contents from './Contents';
import { Link } from 'react-router-dom';
import ScrollToTop from '../../assets/method/scrollToTop';

const cx = classnames.bind(styles);

function Services() {
    ScrollToTop();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('video')}>
                    <video controls loop autoPlay muted>
                        <source
                            src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/kMduLAi30B_HD.mp4"
                            type="video/mp4"
                        ></source>
                    </video>
                </div>

                <div className={cx('label')}>
                    <h2>LOUIS VUITTON SERVICES</h2>
                </div>
            </div>

            <div className={cx('content')}>
                <h2>Personalization</h2>

                {contents.map((content, index) => {
                    return (
                        <div className={cx('content-wrapper')} key={index}>
                            <div className={cx('image')}>
                                <img src={content.img} alt="img"></img>
                            </div>

                            <div className={cx('info-wrapper')}>
                                <div className={cx('content-info')}>
                                    <Link to={content.src}>
                                        <h3>{content.label}</h3>
                                    </Link>
                                    <p>{content.info}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className={cx('footer')}>
                <img
                    src="https://player.louisvuitton.com/media/img/poster/video/1280x720/1473/1473621.jpg"
                    alt="img"
                ></img>

                <div className={cx('footer-content')}>
                    <h5>How can we help you?</h5>
                    <h4>
                        Wherever you are, Louis Vuiton Client Advisor will be
                        delighted to assit you
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default Services;
