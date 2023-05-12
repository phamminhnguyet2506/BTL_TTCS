import classNames from 'classnames/bind';
import styles from './Item.module.scss';
import { useLocation } from 'react-router-dom';
import { ScrollToTop } from '../../assets/method';

const cx = classNames.bind(styles);

function Item() {
    ScrollToTop();
    const location = useLocation();
    console.log(location.state);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('item-img')}>
                <img src={location.state.img2} alt={location.state.name}></img>
            </div>

            <div className={cx('item')}>
                <div className={cx('item-wrapper')}>
                    <div className={cx('item-info')}>
                        <h2>{location.state.id}</h2>
                        <h1>{location.state.name}</h1>
                        <p>{location.state.price}</p>
                    </div>
                    <button>Place In Cart</button>
                    <p>Product detail:</p>
                    <p>{location.state.detail}</p>
                </div>
            </div>

            <div className={cx('item-intro')}>
                <p>{location.state.intro}</p>
            </div>
        </div>
    );
}

export default Item;
