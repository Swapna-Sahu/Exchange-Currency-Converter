import home from './components/Home.vue';
import fiattofiat from './components/FiatToFiat.vue';
import cryptotocrypto from './components/CryptoToCrypto.vue';
import fiattocrypto from './components/FiatToCrypto.vue';
import cryptotofiat from './components/CryptoToFiat.vue';

export default [
    {
        path: '/', component: home
    },
    {
        path: '/fiattofiat', component: fiattofiat
    },
    {
        path: '/cryptotocrypto', component: cryptotocrypto
    },
    {
        path: '/fiattocrypto', component: fiattocrypto
    },
    {
        path: '/cryptotofiat', component: cryptotofiat
    },
]