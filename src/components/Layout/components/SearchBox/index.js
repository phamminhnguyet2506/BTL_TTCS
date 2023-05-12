import styles from './SearchBox.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { suggestions, products } from './suggestion';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SearchBox(props) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <header className={cx('header-wrapper')}>
                    <div className={cx('header-search')}>
                        <FontAwesomeIcon
                            className={cx('search-icon')}
                            icon={faMagnifyingGlass}
                        />
                        <input placeholder="Shop more for your happinest!"></input>
                    </div>
                    <button
                        className={cx('close-button')}
                        onClick={() => {
                            props.handleUnmount();
                        }}
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </header>

                <div className={cx('content')}>
                    <div className={cx('suggestions')}>
                        {suggestions.map((suggestion, index) => {
                            return (
                                <button
                                    key={index}
                                    className={cx('suggestion-item')}
                                    onClick={() => {
                                        props.handleUnmount();
                                    }}
                                >
                                    <Link to={suggestion.src}>
                                        <p>{suggestion.title}</p>
                                    </Link>
                                </button>
                            );
                        })}
                    </div>

                    <div className={cx('products')}>
                        {products.map((product, index) => {
                            return (
                                <div key={index} className={cx('product')}>
                                    <p>{product.title}</p>
                                    <img src={product.img} alt="lv-product" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBox;
