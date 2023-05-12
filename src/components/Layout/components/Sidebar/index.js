import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { lvItems, serviceItems } from './items';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Sidebar(props) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <header className={cx('sidebar-header')}>
                    <button
                        className={cx('close-toggle')}
                        onClick={() => {
                            props.handleUnmount();
                        }}
                    >
                        <FontAwesomeIcon
                            className={cx('close-icon')}
                            icon={faXmark}
                        />
                        <p>Close</p>
                    </button>
                </header>

                <ul className={cx('item-list-lv1')}>
                    {lvItems.map((item, index) => {
                        return (
                            <li key={index} className={cx('item-lv1')}>
                                <div className={cx('item-lv1-wrapper')}>
                                    <button
                                        className={cx('item-lv1-button')}
                                        onClick={() => {
                                            props.handleUnmount();
                                        }}
                                    >
                                        <Link to={item.href}>
                                            <p>{item.type}</p>
                                        </Link>
                                    </button>
                                    {/* icon */}
                                </div>
                            </li>
                        );
                    })}
                </ul>

                <footer className={cx('sidebar-footer')}>
                    <ul className={cx('sidebar-service-list')}>
                        {serviceItems.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className={cx('sidebar-service-item')}
                                >
                                    <p>{item.type}</p>
                                </li>
                            );
                        })}
                    </ul>
                </footer>
            </div>
        </div>
    );
}

export default Sidebar;
