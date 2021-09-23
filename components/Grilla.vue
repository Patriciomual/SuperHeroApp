<template>
    <v-container class="fontComicNeue" >
      <v-card v-for="(image,id) in $store.state.image" :key="id"
        class="styleCard"  elevation="20" >
        <v-row  :style='{ backgroundImage: `url("${image}")`}'>
          <v-col class="backIMage" cols="12" xs="12" md="6" lg="6" xl="5" >
            <center>
              <img style="border-radius:20px;padding:10px" width="250px" :src="image" alt="">
            </center> 
          </v-col>
          <v-col  cols="12" xs="12" md="6" lg="6" xl="7">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>

                  </tr>
                  <tr>
                    <th class="text-left">
                      Nombre
                    </th>
                    <th class="text-left">
                      Bando
                    </th>
                    <th class="text-left">
                      Puntaje
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="font-size:.6em">{{$store.state.name[id]}}</td>
                    <td style="font-size:.6em">{{$store.state.alignment[id]}}</td>
                    <td>
                      <v-list-item v-for="(item,idx) in powerstats[id]" :key="idx">
                        <v-list-item-content  >
                          <v-list-item-title> {{idx}} 
                            <v-icon color="orange">mdi-arrow-right-bold</v-icon>
                             {{item}}</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        heroes: [
          {},
        ],
  
      }
    },
    computed: {
      powerstats(){
        return this.$store.state.powerstats
      }
    },
    methods:{

    }
  }
</script>

<style scoped>
.styleCard{
  border-radius:20px;
  margin: 40px;
}
.backIMage{
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(10px);
  border-radius:20px;
}
</style>