<template>
  <div class="landingpage">
    <div class="container center">
      <h2>Landing Page </h2>
      <br>
      <blockquote>
        <p>El precio actual es de un desarrollo basico, el cual tiene incluido el costo del hospedaje y dominio (.com o .com.mx), ademas del desarrollo con 3 secciones (informacion de negocio, productos o servicios, ofertas) y formulario de contacto</p>
      </blockquote>
      <h4 class="precio">Costo: ${{ precio }}</h4>
      <br>
      <h4>Si desea personalizar más su Landing Page a continuación se desglosan algunas opciones dependiendo de las elegidas aumentara un poco el costo.</h4>
      <br>
      <div class="row ">
        <b-form-group label="" class="col-md-12">
          <label for="secciones">Número de Apartados extra</label>
          <p>Los apartados extra pueden servir para extender mas la despcripcion de los productos o servicios que se ofrecen, de igual manera para incluir imagenes, galerias o videos, agregar, fichas tecnicas de un producto en especifico, etc.</p>
          <b-form-radio-group @change="select" id="radio-group-1" v-model="selected" :options="options" name="radio-options"></b-form-radio-group>
        </b-form-group>
        <b-form-group class="col-md-12">
          <label for="mapa">Registro de ficha en Googlemaps e incorporacíon del mapa</label>
          <b-form-checkbox id="checkbox-1" v-model="maps" name="checkbox-1" value="accepted" unchecked-value="not_accepted">
            Agregar mapa a Landing page y Google maps
          </b-form-checkbox>
        </b-form-group>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'landinpage',
  data() {
    return {
      precio: 2200,
      precio2: 2200,
      selected: '',
      maps: '',
      options: [
        { text: '1 Secciones', value: '1' },
        { text: '2 Secciones', value: '2' },
        { text: '3 Secciones', value: '3' },
        { text: '4 Secciones', value: '4' }
      ]
    }
  },
  methods: {
    select() {
      let me = this
      setTimeout(function() {
        if (me.selected == "1") {
          me.precio = me.precio2 + 100
        }
        if (me.selected == "2") {
          me.precio = me.precio2 + 150
        }
        if (me.selected == "3") {
          me.precio = me.precio2 + 200
        }
        if (me.selected == "4") {
          me.precio = me.precio2 + 250
        }
      }, 10)

    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2,
h3 {
  font-weight: normal;
  text-align: center;
}

.center {
  text-align: center;
}

label {
  color: #0822b5;
  font-weight: 500;
  font-size: 22px !important;
}

h4.precio {
  color: #d23b0c;
  font-weight: 700;
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

</style>
