<template>
  <v-app>
    <drawerComponent :drawer.sync="drawer"/>
    <v-main>
      <v-btn fab color="#F80146" class="relojContinuo floatButtom" @click="drawerChance">
        <v-icon size="30" class="shadow">mdi-spider</v-icon>
      </v-btn>
      <Nuxt/>
    </v-main>
    <v-footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import drawerComponent from '@/components/Drawer.vue'
export default {
  components: {
    drawerComponent
  },
  data () {
    return {
      drawer: false,  
    }
  },
  methods: {
    drawerChance(){
      this.drawer = !this.drawer
    }
  }
}
</script>
<style scoped>
.relojContinuo {
    animation: rotation 15s infinite linear;
}

@keyframes rotation {
    from {-webkit-transform: rotate(0deg);}
    to   {-webkit-transform: rotate(360deg);}
}
.floatButtom{
  position: absolute;
  margin-left: 1%;
  margin-top: 1%;
}
</style>