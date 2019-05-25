<template>
  <div class="works">
    <h1>Works</h1>
    <WorkCard class='add-workcard' v-bind:show-object="card1" />
    <WorkCard class='add-workcard' v-bind:show-object="card2" />
  </div>
</template>

<script>
import WorkCard from '@/components/WorkCard.vue'

export default {
  data () {
    return {
      card1: {
        'title': 'Potoment',
        'screen': 'Potoment.png',
        'message': '初めて個人作成した成果物。LINE Message APIとRubyを使って写真共有サービスを作りました。詳細はブログを参照ください。',
        'bloglink': 'https://kodak.hatenablog.com/entry/2018/04/08/111954'
      },
      card2: {
        'title': 'MyPortfolio',
        'screen': 'MyPortfolio.png',
        'message': 'このPortfolioサイトのこと。AWSとVue.jsを使ってサーバーレスなサイトになっています。時間帯によってサイトの雰囲気が変わる工夫も？ 詳細はブログを参照ください。',
        'bloglink': 'https://kodak.hatenablog.com/entry/2019/05/26/001806'
      }
    }
  },
  components: {
    WorkCard
  }
}
</script>

<style>
.add-workcard {
  /* display: inline-block; */
  margin: 0 20px;
}

@media print, screen and (max-width: 684px) {
  .add-workcard {
    margin: 20px 20px;
  }
}
</style>
