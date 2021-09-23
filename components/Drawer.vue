<template>
    <v-navigation-drawer
      v-model="drawer"
      fixed style="background-color: #F80146"
      app dark
    >
      <v-list style="background-color: #000000">
        <v-list-item>   
          <v-list-item-action>
              <v-icon size="30" color="#F91555" v-if="$vuetify.theme.dark">mdi-brightness-4</v-icon>
              <v-icon size="30" v-else>mdi-brightness-5</v-icon>
          </v-list-item-action>
          <v-switch color="orange" v-model="$vuetify.theme.dark" />
        </v-list-item>
        <v-list-item>
          <v-text-field v-model="id" dense style="padding:5%"
              outlined rounded @keydown.enter="get(id)" 
              label="search by id">
          </v-text-field>  
        </v-list-item>
      </v-list>  
      <img width="100%"  src="https://64.media.tumblr.com/6ba77013cbbbe95c8bbe0caf28400748/tumblr_olzwzbdSNq1t4rhclo3_1280.png" alt="">
    </v-navigation-drawer>
</template>

<script>
export default {
    props: ['drawer'],
    data(){
        return{
            id: ''
        }
    },
    methods : {
        get(){
        this.$store.dispatch('getHeroes',this.id)
        this.id = ''
        }
    }
}
</script>

<style>

</style>