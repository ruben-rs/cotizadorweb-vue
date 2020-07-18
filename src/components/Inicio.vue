<template>
  <!-- eslint-disable -->
  <div class="inicio" id="inicio"> 
    <!-- <div>{{ msg }}</div> -->
    <div class="cotizador-rs">
      <h1>Bienvenido {{ $route.params.correo }} a nuestro cotizador web</h1>
      <div style="text-align: center"><a href="/"><span><i class="fas fa-arrow-alt-circle-left"></i> Regresar</span></a></div>
      <hr>
      <br>
      <b-form @submit="onSubmit" class="form-in">
        <div v-for="pgt in preguntas">
          <h2>{{ pgt.pregunta }}</h2>
          <br>
          <!-- <img src="~../assets/pregunta1/landing.jpg" alt="Vue.js PWA"> -->
          <!-- <h3 v-for="op in pgt.opciones">{{ op.value }}</h3> -->
          <!-- <li ><a href="">{{ pgt }}</a></li> -->
          <!-- <li v-for="op in pgt.opciones"><a href="">{{ op }}</a></li> -->
          <!-- <b-form-checkbox-group 
              v-model="selected"
              :options="pgt.opciones"
              class="mb-3"
              value-field="value"
              text-field="text"
            ></b-form-checkbox-group>
            <span>Checked names: {{ selected }}</span> -->
          <b-card-group deck>
            <b-card v-for="op in pgt.opciones" :title="op.value" :img-src="op.img" :key="op.id" img-alt="Image" img-top tag="article" class="mb-2">
              <b-card-text>
                {{ op.info }}
                <br>
                <a target="_blank" :href="op.referencia">Fuente: https://www.40defiebre.com/que-es/landing-page </a>
              </b-card-text>
              <input type="radio" :id="op.text" :value="op.value" v-model="checkedNames">
              <label :for="op.text">{{ op.value }}</label>
            </b-card>
            <!-- <input type="checkbox" :id="op.text" :value="op.value" v-model="checkedNames">
              <label :for="op.text">{{ op.value }}</label> -->
          </b-card-group>
          <span>Checked names: {{ checkedNames }}</span>
        </div>
        <b-button type="submit" variant="primary">Siguiente -></b-button>
      </b-form>
      <br>
    </div>

    <b-modal ref="my-modal" hide-footer title="Mensaje">
      <div class="d-block text-center">
        <h3>No ha introducido un correo, para continuar de click en regresar para ingresar su correo</h3>
      </div>
    </b-modal>

  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'inicio',
  data() {
    return {
      selected: [],
      checkedNames: [],
      otro: '',
      correo: '',
      preguntas: [{
          pregunta: '¿Que tipo de Sitio web desea cotizar?',
          opciones: [{
              text: '0',
              value: 'Landing Page',
              info: 'Una landing page, o página de aterrizaje, es una página web diseñada para dar a conococer de manera breve un producto o servicios.',
              referencia: 'https://www.40defiebre.com/que-es/landing-page',
              img: require('../assets/pregunta1/landing.jpg')
            },
            {
              text: '1',
              value: 'Sitio de negocio (corporativas)',
              info: 'Las webs corporativas son aquellas que describen las características de la empresa dónde se recoge información principal de la misma como quiénes son, su ubicación, a que se dedican y otros datos de la propia compañía. ',
              referencia: 'https://www.josegalan.es/tipos-de-paginas-web/',
              img: require('../assets/pregunta1/sitionegocio.jpg')
            },
            {
              text: '2',
              value: 'Tienda Online',
              info: 'Los ecommerces o tiendas online son sitios webs en los que se comercializan productos o servicios. ',
              referencia: '',
              img: require('../assets/pregunta1/landing.jpg')
            }
          ]
        },
        // {
        //   pregunta: '¿Que tipo de pagina web desea cotizar?',
        //   opciones: [{
        //       text: '3',
        //       value: 'hola1',
        //       info: '',
        //       referencia: ''
        //     },
        //     {
        //       text: '4',
        //       value: 'hola2',
        //       info: '',
        //       referencia: ''
        //     }
        //   ]
        // }
      ]
    }
  },
  methods: {
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    onSubmit(evt) {
      evt.preventDefault()

      this.valCorreo()

      // this.$router.push({ name: 'Inicio', params: { correo: 'dddd', otro: 'ffff' } })
      // this.$router.push({params: {correo: 'dddd'}})
      // this.$router.push('/inicio?' + this.form.correo)
      // alert(JSON.stringify(this.form))
    },
    valCorreo() {
      this.otro = this.$route.params.otro
      this.correo = this.$route.params.correo
      console.log(this.checkedNames)

      if (this.correo === undefined) {
        //alert('No ha introducido un correo, para continuar de click en regresar para ingresar su correo')
        this.showModal()
      } else {


        if (this.checkedNames=="") {
          alert('No ha seleccionado ninguna opción')

        }else{

          // alert('con datos')
          this.$router.push({ name: 'Landingpage', params: { correo: this.correo } })
        }
      }
      
    }
  },
  mounted() {
    console.log(this.$route)

  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}

.card-deck {
  margin: 0;
}

h1,
h2,
h3 {
  font-weight: normal;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}

.intro {
  width: 70%;
  text-align: center;
  margin: 0 auto;
}

.form-in {
  width: 80%;
  margin: 0 auto;
  text-align: center;

}

</style>
