<template>
  <div id="myportfolio" :style="styleObject">
    <nav class="nav clearfix">
      <b-button variant="outline-primary" class="nav-item">
        <router-link to="./" class="router-link-item">Home</router-link>
      </b-button>
      <b-button variant="outline-secondary" class="nav-item">
        <router-link to="./profile" class="router-link-item">Profile</router-link>
      </b-button>
      <b-button variant="outline-success" class="nav-item">
        <a class="router-link-item" href="https://kodak.hatenablog.com/">Blog</a>
      </b-button>
      <b-button variant="outline-danger" class="nav-item">
        <router-link to="./works" class="router-link-item">Works</router-link>
      </b-button>
    </nav>
    <router-view class="to-router"/>
    <!-- <div>
      <p>Copyright (C) 2000-2017 ○○○○○ Corporation. All Rights Reserved.</p>
    </div> -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      'info': '0',
      styleObject: {
        'background-color': 'black'
      }
    }
  },
  created: function () {
    axios.get('https://www.tama-kodak.com/multi-origin-behavior/portfolio_data.json')
      .then(res => {
        console.log(res.data)
        if (res.data.info === '1') {
          this.styleObject['background-color'] = 'white'
        }
      })
  }
}
</script>

<style>
#myportfolio {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  margin: 0;
  min-height: 100vh;
  text-align: center;
  color: lightblue;
}
.nav {
  z-index:1;
  display: inline-block;
  margin: 20px auto;
}
.nav-item {
  position: relative;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  margin: 0 10px;
}
.router-link-item {
  line-height: 40px;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.copyright{
  margin-top: auto;
}
.to-router {
  z-index: 1;
}
@media print, screen and (max-width: 500px) {
  .nav {
    display: inline-block;
    margin: 20px auto;
    width: 300px;
  }
  .nav-item {
    position: relative;
    border-radius: 5px;
    width: 100px;
    height: 40px;
    margin: 10px 20px;
  }
  .router-link-item {
    line-height: 40px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .copyright{
    margin-top: auto;
  }
}
</style>
