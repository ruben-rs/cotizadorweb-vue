import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Landingpage from '@/components/Landingpage'
import Sitioweb from '@/components/Sitioweb'
import Ecommerce from '@/components/Ecommerce'
import Cotizador from '@/components/Cotizador'
import Inicio from '@/components/Inicio'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cotizador',
      component: Cotizador
    },
    {
      path: '/inicio/:correo?',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/landingpage/:correo?',
      name: 'Landingpage',
      component: Landingpage
    },
    {
      path: '/sitioweb/:correo?',
      name: 'Sitioweb',
      component: Sitioweb
    },
    {
      path: '/ecommerce/:correo?',
      name: 'Ecommerce',
      component: Ecommerce
    }
  ]
})
