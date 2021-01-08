<template>
  <div>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
    <nav class="container-nav">
      <img
        src="./assets/bitcoin-btc-logo.jpg"
        alt="company logo"
        height="40"
        width="40"
        class="logo"
      />
      <span>Exchange rate</span>
      <button class="nav-btn"><i class="fas fa-sign-in-alt"></i> Login</button>
      <button class="nav-btn"><i class="fas fa-user-plus"></i> Sign up</button>
    </nav>

    <div class="container">
      <ul>
        <li>
          <a href="/"> <i class="fas fa-home"></i> Home</a>
        </li>
        <li>
          <a href="#features"><i class="fas fa-list-alt"></i> Features</a>
        </li>
        <li>
          <a href="#section"><i class="fas fa-tags"></i> New offers</a>
        </li>
        <li>
          <a href="#footer1"><i class="fas fa-address-book"></i> Contact us</a>
        </li>
      </ul>
      <Header>
        <div id="header" class="top-left">
          Digital Currencies at Your Fingertips
        </div>
        <p>
          We want to open the market to everyone, with an easy-to-use, intuitive
          interface. To help clients better manage their finances, we developed
          innovative trading features:
        </p>
      </Header>
      <aside><i class="fas fa-comments"></i> Chat with us</aside>
      <div id="features" class="exchange">
        <router-view></router-view>
      </div>
      <Footer id="footer1">
        <sub-footer />
      </Footer>
    </div>
  </div>
</template>

<script>
import Footer from "./components/Footer";

export default {
  components: {
    "sub-footer": Footer,
  },

  data() {
    return {
      title: "Exchange Rate",
      homepage: true,
    };
  },
};
</script>

<style >
@import "./css/app.css";
</style>
