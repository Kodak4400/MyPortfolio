<template>
  <div class="workcard">
    <b-card
      :title="title"
      :img-src="loadImg()"
      img-alt="Image"
      img-top
      tag="article"
      class="b-card-box"
      v-bind:class="{'add-b-card-box-end':isAction}" v-on:click="isAction = ! isAction"
    >
      <transition name="add-b-card">
      <b-card-text class="add-b-card-text" v-if="isAction" >
        {{ showObject.message }}
      </b-card-text>
      </transition>
      <transition name="add-b-card">
      <b-button v-if="isAction" class="add-b-button" :href="link" variant="primary">Blog Link</b-button>
      </transition>
    </b-card>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: this.showObject.title,
      imgurl: this.showObject.screen,
      link: this.showObject.bloglink,
      isAction: false
    }
  },
  props: {
    showObject: {
      type: Object
    }
  },
  methods: {
    loadImg: function () {
      console.log(this.imgurl)
      return require(`../assets/${this.imgurl}`)
    }
  }
}
</script>

<style>
.workcard {
  display: inline-block;
}

.b-card-box {
  color: black;
  width: 300px;
  height: 200px;
  transition: all ease 1s;
}

.add-b-card-box-end {
  height: 400px;
}
.card-body {
  padding: 10px;
}
.add-b-card-text {
  overflow: hidden;
}
.add-b-card-enter-active {
  animation: bounce-in .8s;
}
.add-b-card-leave-active {
  animation: bounce-in .8s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  60% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
