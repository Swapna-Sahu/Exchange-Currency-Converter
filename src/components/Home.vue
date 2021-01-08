<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="home">
      <h2 class="headings">Fiat - Fiat</h2>
        <div class="container1">
          <div>
            <p class="font-style">Fiat-Fiat CurrencyExchange Rate </p>
            <p class="font-style">You can find many features inside. Try converter button below to find more.. </p>
            <button class="enter-button"> 
              <router-link to="/fiattofiat">
                Currency Converter
              </router-link>
            </button>
          </div >
          <div class="sub-headings"> 
            <h3>Latest</h3>
            <div class="style-div">
            <report />
            </div>
          </div>
        </div>
    </div>
      
    <div class="home">
      <h2 class="headings">Crypto - Crypto</h2>
        <div class="container2">
          <div> 
             <label class="sub-headings"> Popular Cryptocurrency Conversions</label>
            <section>
            <ul class="style-div container4 height-ul">
              <li :key="unit.symbol" v-for="unit in Object.keys(popular)">{{popular[unit].symbol}} : {{popular[unit].price}}</li>
            </ul>
            </section>
          </div>
          <div >
            <button class="enter-button"> 
              <router-link to="/cryptotocrypto">
                Currency Converter
              </router-link>
            </button>
          </div >
        </div>
    </div>
    <div class="home">
      <h2 class="headings">Fiat - Crypto Exchange</h2>
      
          <div class=" container3">
            <div class="div1">
              <p class="font-style">With the best fiat to crypto exchange platforms, you can easily change your fiat money (Pounds, Dollars, Euros etc) into cryptocurrencies such as Bitcoin, Ethereum, Litecoin currency and so on. On other kinds of exchange, you switch one type of cryptocurrency to another by, for example, buying Bitcoin Cash with Ethereum. For the latter, we’ve prepared a guide to crypto-crypto types exchanges. You might also want to read our guide to the best broker type exchanges and our explanation and guide to peer-to-peer exchanges.</p>
              <p class="font-style">The best fiat-crypto exchange sites give you a tremendous amount of flexibility. You can buy your first digital coins using the everyday currency that you are most comfortable with.</p>
            </div>
          <div class="div-color div2"> 
            <p class="sub-headings">Fiat to Crypto </p>
            <button class="enter-button"> 
              <router-link to="/fiattocrypto" class="hover-effect">
                Currency Converter
              </router-link>
            </button>
          </div>
          <div class=" div-color div3">
            <p class="sub-headings">Crypto to Fiat </p>
            <button class="enter-button"> 
              <router-link to="/cryptotofiat">
                Currency Converter
              </router-link>
            </button>
          </div >
          </div>
        </div>
     
  </div>
</template>

<script>
import { EventBus, ResponseEventType } from "../eventbus";
import { axiosAPI } from "../axios-lib";
import Report from "./Report";

export default {
  components: {
    Report,
  },
  data() {
    return {
      title: "Exchange Rate Converter",
      popular: [],
    };
  },
  created() {
    axiosAPI.fiatToCrypto();
  },
  mounted: function () {
    EventBus.$on(ResponseEventType.FIAT_TO_CRYPTO, (response) => {
      this.fetchedData = response.data;
      this.test();
    });
  },
  methods: {
    test: function () {
      let populatUnit = [
        "BTCUSD",
        "BTCAUD",
        "BTCBRL",
        "BTCCNY",
        "ETHUSD",
        "ETHAUD",
        "ETHBRL",
        "ETHCNY",
        "XRPUSD",
        "XRPAUD",
        "XRPBRL",
        "XRPCNY",
        "BCHUSD",
        "BCHAUD",
        "BCHBRL",
        "BCHCNY",
      ];

      let dataFetched = this.fetchedData;
      let arr = [];

      let cur = populatUnit.map((s) => {
        let fil = dataFetched.filter((c) => c.symbol.includes(s));
        arr = arr.concat(fil);
        this.popular = arr;
      });
      console.log("cur",cur);
    },
  },
};
</script>

<style>
@import "../css/home.css";
</style>
