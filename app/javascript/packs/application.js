import Vue from 'vue'
import Team from '../components/teams/main.vue'

document.addEventListener('DOMContentLoaded', () => {
  const el = document.body.appendChild(document.createElement('hello'))
  const app = new Vue({
    el,
    render: h => h(Team)
  })

  console.log(app)
})
