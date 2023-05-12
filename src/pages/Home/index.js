import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { contents } from './content';
import { services } from './services';
import { Link } from 'react-router-dom';
import { ScrollToTop } from '../../assets/method';

const cx = classNames.bind(styles);

function Home() {
    ScrollToTop();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('content-wrapper')}>
                    {contents.map((content, index) => {
                        return (
                            <div key={index} className={cx('content-item')}>
                                <img src={content.img} alt="content-item"></img>
                                <div className={cx('text')}>
                                    <div className={cx('content-label')}>
                                        {content.label}
                                    </div>
                                    <Link to={content.href}>
                                        <button>{content.button}</button>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className={cx('services')}>
                <div className={cx('label')}>Services</div>
                <div className={cx('service-wrapper')}>
                    {services.map((service, index) => {
                        return (
                            <div key={index} className={cx('service-item')}>
                                <img src={service.img} alt="service-item"></img>
                                <div className={cx('service-label')}>
                                    {service.label}
                                </div>
                                <p>{service.description}</p>
                                <Link to={service.src}>
                                    <button>{service.button}</button>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Home;
