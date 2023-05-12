import styles from './WorldOfLV.module.scss';
import classnames from 'classnames/bind';
import { ScrollToTop } from '../../assets/method';
import { shows, arts, maisons, sustainabilities } from './magazine';
import { Link } from 'react-router-dom';

const cx = classnames.bind(styles);

function WorldOfLV() {
    ScrollToTop();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h2>World of Louis Vuitton</h2>

                <div className={cx('header-content-wrapper')}>
                    <img
                        src="https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--2045_Pharrell_Williams_DI3.jpg?wid=1240"
                        alt="img"
                    ></img>

                    <div className={cx('header-content')}>
                        <p>LA MAISON - DESIGNERS</p>
                        <h3>PHARRELL WILLIAMS</h3>
                        <p>02/14</p>
                    </div>
                </div>
            </div>

            <div className={cx('lv-magazine-homepage')}>
                <div className={cx('label')}>
                    <h2>Fashion Shows.</h2>
                    <p>
                        Discover Louis Vuitton's latest fashion shows for both
                        Women's and Men's Collections.
                    </p>
                </div>

                <div className={cx('items')}>
                    {shows.map((show, index) => {
                        return (
                            <div className={cx('item')} key={index}>
                                <Link
                                    to={show.src}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={show.img} alt="img"></img>
                                    <div className={cx('item-info')}>
                                        <p>{show.intro}</p>
                                        <h3>{show.title}</h3>
                                        <p>{show.date}</p>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>

                <Link
                    to="https://www.youtube.com/watch?v=0iZdfhkg-hk&list=PLE732333F1160BE5C"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button>Explore Fashion Shows</button>
                </Link>
            </div>

            <div className={cx('lv-magazine-homepage')}>
                <div className={cx('label')}>
                    <h2>Arts and Culture.</h2>
                    <p>
                        Read about the Maison's cultural exhibitions, book
                        launches, and artistic collaborations.
                    </p>
                </div>

                <div className={cx('items')}>
                    {arts.map((art, index) => {
                        return (
                            <div className={cx('item')} key={index}>
                                <img src={art.img} alt="img"></img>
                                <div className={cx('item-info')}>
                                    <p>{art.intro}</p>
                                    <h3>{art.title}</h3>
                                    <p>{art.date}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <button>Explore Arts and Culture</button>
            </div>

            <div className={cx('lv-magazine-homepage')}>
                <div className={cx('label')}>
                    <h2>La Maison.</h2>
                    <p>
                        Explore Louis Vuitton's legendary history, unique
                        savoir-faire, and timeless Spirit of Travel.
                    </p>
                </div>

                <div className={cx('items')}>
                    {maisons.map((maison, index) => {
                        return (
                            <div className={cx('item')} key={index}>
                                <img src={maison.img} alt="img"></img>
                                <div className={cx('item-info')}>
                                    <p>{maison.intro}</p>
                                    <h3>{maison.title}</h3>
                                    <p>{maison.date}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <button>Explore La Maison</button>
            </div>

            <div className={cx('lv-magazine-homepage')}>
                <div className={cx('label')}>
                    <h2>Sustainability.</h2>
                    <p>
                        Learn about Our Committed Journey, the Maison's pledges,
                        objectives, and actions towards a more sustainable
                        future.
                    </p>
                </div>
                <div className={cx('items')}>
                    {sustainabilities.map((sus, index) => {
                        return (
                            <div className={cx('item')} key={index}>
                                <img src={sus.img} alt="img"></img>
                                <div className={cx('item-info')}>
                                    <p>{sus.intro}</p>
                                    <h3>{sus.title}</h3>
                                    <p>{sus.date}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <button>Explore Sustainability</button>
            </div>

            <div className={cx('footer')}>
                <div className={cx('footer-content')}>
                    <p>NEWSLETTER</p>
                    <h2>THE LATEST NEWS FROM THE WORLD OF LOUIS VUITTON</h2>
                </div>

                <div className={cx('social-media')}>
                    <button>Subscribe</button>
                    <p>Be the first to know. Follow us on</p>
                    <div className={cx('media-list')}>
                        <a
                            href="https://www.instagram.com/louisvuitton/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Instagram
                        </a>
                        <a
                            href="https://www.facebook.com/LouisVuitton/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Facebook
                        </a>
                        <a
                            href="https://twitter.com/louisvuitton"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Twitter
                        </a>
                        <a
                            href="https://www.youtube.com/user/LOUISVUITTON"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Youtube
                        </a>
                        <a
                            href="https://eu.louisvuitton.com/eng-e1/la-maison/louis-vuitton-on-snapchat"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Snapchat
                        </a>
                        <a
                            href="https://www.pinterest.fr/LouisVuitton/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Pinterest
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorldOfLV;
