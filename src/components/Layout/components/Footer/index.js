import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { help, services, aboutLV } from './categoryDetail';
import { legal } from './legalDetail';
import images from '../../../../assets/images';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('categories')}>
                <div className={cx('category')}>
                    <div className={cx('label')}>Help</div>
                    <ul>
                        <li>
                            Our Client Advisors are available to assit you by
                            phone at <div>+1.866.Vuitton.</div> You can also{' '}
                            <div> chat</div> or <div> email us</div>
                        </li>
                        {help.map((item, index) => {
                            return (
                                <li key={index}>
                                    <div>{item.detail}</div>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className={cx('category')}>
                    <div className={cx('label')}>Services</div>
                    <ul>
                        {services.map((service, index) => {
                            return (
                                <li key={index}>
                                    <div>{service.detail}</div>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className={cx('category')}>
                    <div className={cx('label')}>About Louis Vuitton</div>
                    <ul>
                        {aboutLV.map((item, index) => {
                            return (
                                <li key={index}>
                                    <div>{item.detail}</div>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className={cx('category')}>
                    <div className={cx('label')}>Connect</div>
                    <ul>
                        <li>
                            <div>Sign up</div> for the latest news from the
                            Maison, including exclusive online pre-launches for
                            new collections
                        </li>
                        <li>
                            <div>Follow Us</div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={cx('legal')}>
                <div className={cx('place')}>Ship to:</div>
                <div className={cx('legal-list')}>
                    <ul>
                        {legal.map((item, index) => {
                            return (
                                <li key={index}>
                                    <div>{item.detail}</div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            <div className={cx('logo')}>
                <img src={images.logoLV} alt="logo-lv" />
            </div>
        </div>
    );
}

export default Footer;
