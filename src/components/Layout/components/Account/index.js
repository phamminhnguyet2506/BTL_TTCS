import styles from './Account.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Account(props) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <header className={cx('header-wrapper')}>
                    <div className={cx('header-label')}>Identification</div>
                    <button
                        className={cx('close-button')}
                        onClick={() => props.handleUnmount()}
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </header>

                <div className={cx('content')}>
                    <div className={cx('sign-in')}>
                        <p className={cx('content-label')}>
                            I already have an account
                        </p>
                        <div className={cx('login')}>
                            <p>Login*</p>
                            <input></input>
                        </div>

                        <div className={cx('password')}>
                            <p>Password*</p>
                            <input></input>
                            <p className={cx('forgot-pass')}>
                                Forgot your password?
                            </p>
                        </div>

                        <button>Sign In</button>
                    </div>

                    <div className={cx('sign-up')}>
                        <p className={cx('content-label')}>
                            I don't have an account
                        </p>
                        <p>
                            Enjoin added benefits and richer experience by
                            creating a personal account
                        </p>
                        <button>Create My LV Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
