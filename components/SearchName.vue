<template>
    <v-container>
        <center>
            <div class="search">
                <p class="fontComicNeue" style="font-size:1.5em">
                    Know the data of your super hero, write the name here.
                    <v-icon class="up" size="30" color="orange">mdi-arrow-down-bold</v-icon>
                </p>

                <v-text-field v-model="name" class="fontComicNeue" clearable autofocus
                    outlined rounded @keydown.enter="searchName(name)" color="orange"
                    label="Search the name of your hero">
                </v-text-field>
            </div>
        </center>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            name: '',
        }
    },
    created(){
        this.searchName('batman')
    },
    
    methods : {
        searchName(name){
            this.$store.dispatch('searchName',name)
            this.name = ''
        }
    }
}
</script>

<style scoped>
.search {
    width: 80%;
    margin-top:5%;
}
.up{
    animation: up 3s infinite;
}
@keyframes up{
  0%   {top:-10px;}
  50% {top: 0px}
  75% {top: 0px}
  100% {top:-10px;}

}
.err{
    border-radius:20px;
    width:70%;
}
</style>