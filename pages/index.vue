<template>
  <div>
    <center style="background-color: #dd003b">
        <h1 class="fontBebasNeue shadow">{{txt}}</h1>
    </center>
    <v-row>
      <search/>
    </v-row>
    <v-row>
      <grilla/>
    </v-row>
  </div>

</template>
<script>
import grilla from '@/components/Grilla.vue'
import search from '@/components/SearchName.vue'
export default {
  components : {
    grilla,search
  },
  data() {
    return{
      txt: 'superheroapp',
    }
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comic+Neue:wght@300&family=Montserrat&display=swap');
.fontComicNeue{
  font-family: 'Comic Neue', cursive;
  font-size: 2em;
  font-weight: bold;
}
.fontBebasNeue{
  font-family: 'Bebas Neue', cursive;
  font-size: 4em;
  margin-top: 0%;
}
.fontMonserrat{
  font-family: 'Montserrat', sans-serif;
}
.shadow {
  font-weight: bold;
  text-shadow: -0.08em .05em .01em rgb(117, 4, 36);
  animation: shadow 5s infinite;
}
@keyframes shadow {
  0% {
    text-shadow: -0.08em .05em .02em rgb(117, 4, 36);
  }
  
  20% {
    text-shadow:  -0.08em -.05em .01em rgb(117, 4, 36);
  }
  
  40% {
    text-shadow:  0.08em -.05em .01em rgb(117, 4, 36);
  }
  
  60% {
    text-shadow:  0.08em .05em .01em rgb(117, 4, 36);
  }
  80% {
    text-shadow: -0.08em .05em .01em rgb(117, 4, 36);
  }
  100% {
    text-shadow:  -0.08em .05em .01em rgb(117, 4, 36);
  }
}
</style>