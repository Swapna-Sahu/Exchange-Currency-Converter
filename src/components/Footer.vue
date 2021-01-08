<template>
  <div class="sub-footer">
      <div class="icon-section">
        <span class="icon-color"><i class="fab fa-facebook"></i></span>
        <span class="icon-color"><i class="fab fa-github"></i></span>
        <span class="icon-color"><i class="fab fa-linkedin"></i></span>
        <span class="icon-color"><i class="fab fa-twitter-square"></i></span>
      </div>
        <h2 >Sign Up For Newsletters</h2>
        <label> Enter email
        <input type="email" placeholder="Your email address" required />
        </label>
        <button>SUBSCRIBE</button>
        <p>Swapna Sahu @{{ new Date().getFullYear() }}. All rights reserved.</p>
  </div>    
</template>
<script>
export default {
  name: "Footer",
  
};
</script>
<style>
.sub-footer {
  background-color: rgb(10, 10, 82) !important;
  padding: 20px;
}
.icon-section{
  margin:30px;
}
.icon-color {
  color: rgb(56, 201, 206) !important;
  margin:40px;
}
</style>