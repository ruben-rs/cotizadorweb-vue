<template>
  <div class="cotizador">
    <!-- <div>{{ msg }}</div> -->
    <div class="cotizador-rs">
      <h1>Bienvenido a nuestro cotizador web</h1>
      <hr>
      <br>
      <p class="intro">En Carasoft siempre buscamos ofrecer servicios de calidad y personalizados para cada cliente, para ofrecerte un buen servicio solo sigue las indicaciones que se vayan indicando y podras tener un aproximado del costo de desarrollo de tu nueva pagina web o tienda online.</p>
      <br>
      <h3>¡ Sin más comencemos !</h3>
      <br>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="form-it">
        <b-form-group id="input-group-1" label="Correo eléctronico:" label-for="input-1">
          <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Ingrese su correo">
          </b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
          <b-form-input id="input-2" v-model="form.nombre" placeholder="Ingrese su nombre">
          </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Siguiente -></b-button>
        <b-button type="reset" variant="danger">Limpiar</b-button>
      </b-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'cotizador',
  data () {
    return {
      form: {
        email: '',
        nombre: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.$router.push({ name: 'Inicio', params: { correo: this.form.email, otro: this.form.nombre } })
      // this.$router.push({params: {correo: 'dddd'}})
      // this.$router.push('/inicio?' + this.form.correo)
      // alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.nombre = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
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

.form-it {
  width: 300px;
  margin: 0 auto;

}

</style>
