import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../Sidebar';
import SearchBox from '../SearchBox';
import Account from '../Account';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    //sidebar
    const [mountedSidebar, setMountedSidebar] = useState(false);

    const handleMountSidebar = () => {
        setMountedSidebar(true);
    };

    const handleUnmountSidebar = () => {
        setMountedSidebar(false);
    };

    //searchbox
    const [mountedSearchbox, setMountedSearchbox] = useState(false);

    const handleMountSearchbox = () => {
        setMountedSearchbox(true);
    };

    const handleUnmountSearchbox = () => {
        setMountedSearchbox(false);
    };

    //account
    const [mountedAccount, setMountedAccount] = useState(false);

    const handleMountAccount = () => {
        setMountedAccount(true);
    };

    const handleUnmountAccount = () => {
        setMountedAccount(false);
    };

    return (
        <Fragment>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('menu-search')}>
                        {/* menu */}
                        <button
                            className={cx('menu-toggle')}
                            onClick={handleMountSidebar}
                        >
                            <FontAwesomeIcon
                                className={cx('menu-icon')}
                                icon={faBars}
                            />
                            <p>Menu</p>
                        </button>

                        <div className={cx('dropdown-menu')}></div>

                        {/* search */}
                        <button
                            className={cx('search-button')}
                            onClick={handleMountSearchbox}
                        >
                            <FontAwesomeIcon
                                className={cx('search-icon')}
                                icon={faMagnifyingGlass}
                            />
                            <p>Search</p>
                        </button>
                    </div>

                    <div className={cx('logo')}>
                        <Link to="/">
                            <img src={images.logoLV} alt="lv-logo" />
                        </Link>
                    </div>

                    <div className={cx('action')}>
                        <button className={cx('wishlist')}>
                            <p>Wishlist</p>
                        </button>

                        <button
                            className={cx('account')}
                            onClick={handleMountAccount}
                        >
                            <p>MyLV</p>
                        </button>
                    </div>
                </div>
            </header>
            {mountedSidebar && <Sidebar handleUnmount={handleUnmountSidebar} />}
            {mountedSearchbox && (
                <SearchBox handleUnmount={handleUnmountSearchbox} />
            )}
            {mountedAccount && <Account handleUnmount={handleUnmountAccount} />}
        </Fragment>
    );
}

export default Header;
