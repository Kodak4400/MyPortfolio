<template>
  <div class="profile">
    <h1>Profile</h1>
    <div class="k-card">
      <img src="@/assets/Kodak.png" border="0" class="my-photo">
      <div class="my-details">
        多摩市在住のバックエンドのエンジニア。<br>
        約11年間、客先常駐でマネジメントを続けてきて、技術力が全く無くて後悔していた人。<br>
        34歳でWebエンジニアへ転職して、技術力を身につけて行くことを決意。<br>
      </div>
      <p class="my-title-dev-skills">Development Skills</p>
      <apexchart type=bar height=250px width=95% :options="frontChartOptions" :series="series" />
      <div class="my-dev-skills-details">
        ※Cloud(AWS): EC2, S3, IAM, VPC, Lambda, CloudFront, Route53, DynamoDB, Cognito
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      series: [{
        name: 'Development Skills',
        data: [2, 2, 2, 2, 2, 2, 2]
      }],
      frontChartOptions: {
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        dataLabels: {
          enabled: false
        },
        yaxis: {
          max: 5
        },
        xaxis: {
          title: {
            text: '自己評価'
          },
          categories: ['JavaScript', 'FrontFW[Vue.js, Nuxt.js]', 'CSS', 'Python', 'PHP', 'Cloud(AWS)', 'CMS(WordPress)']
        }
      }
    }
  }
}
</script>

<style>
.k-card {
  color: black;
  border: 0.5px solid;
  border-radius: 10px;
  width: 70%;
  background-color: lightgray;
  margin: 0 auto;
}
.my-photo {
  margin: 10px;
}
.my-details {
  margin: 10px;
}
.my-title-dev-skills {
  font-size: 150%;
  margin: 0;
}
.my-dev-skills-details {
  font-size: 70%;
  text-align: left;
  position: relative;
  margin: 0 0 20px 10px;
}
</style>
