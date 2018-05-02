import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import Web3 from 'web3'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  render: h => h(App)
})


window.addEventListener('load', () => {
    if (typeof web3 !== 'undefined') {
        console.log('Web3 injected browser: OK.')
        window.web3 = new Web3(window.web3.currentProvider)
    } else {
        console.log('Web3 injected browser: Fail. You should consider trying MetaMask.')
        window.web3 = new Web3(new Web3.providers.HttpProvider('http://0.0.0.0:8080/'))
    }
})