import {
    Home,
    LVxYK,
    Gifts,
    New,
    Bags,
    Item,
    Woman,
    Man,
    Jewelry,
    Watches,
    Perfume,
    ArtOfLiving,
    Services,
    WorldOfLV,
} from '../pages';
import { DefaultLayout } from '../components/Layout';

// Public Routes
const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/lv-yk', component: LVxYK, layout: DefaultLayout },
    { path: '/gifts', component: Gifts, layout: DefaultLayout },
    { path: '/new', component: New, layout: DefaultLayout },
    { path: '/bags', component: Bags, layout: DefaultLayout },
    { path: '/item/:detail', component: Item, layout: DefaultLayout },
    { path: '/woman', component: Woman, layout: DefaultLayout },
    { path: '/man', component: Man, layout: DefaultLayout },
    { path: '/jewelry', component: Jewelry, layout: DefaultLayout },
    { path: '/watches', component: Watches, layout: DefaultLayout },
    { path: '/perfume', component: Perfume, layout: DefaultLayout },
    { path: '/art-of-living', component: ArtOfLiving, layout: DefaultLayout },
    { path: '/services', component: Services, layout: DefaultLayout },
    { path: '/world-of-lv', component: WorldOfLV, layout: DefaultLayout },
];

// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
