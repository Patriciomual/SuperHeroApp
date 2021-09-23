
export const state = () => ({
    AccessToken : 4502231026500447, //Token para hacer peticiones a API
    name: [],
    alignment: [],
    powerstats: [],
    image: []
})

export const mutations = {

    nameHero(state,payload){
        state.name = payload
    },
    alignmentHero(state,payload){
        state.alignment = payload
    },
    powerstatsHero(state,payload){
        state.powerstats = payload
    },
    imageHero(state,payload){
        state.image = payload
    }
}

export const actions = {

//Función para obtener información en base al ID 
    async getHeroes({commit},id) {
        let token = this.state.AccessToken
        await this.$axios.get(`/api/${token}/${id}`)
            .then(function(response){
                let name = [response.data.name]
                let alignment = [response.data.biography.alignment]
                let powerstats = [response.data.powerstats]
                let image = [response.data.image.url]
                commit('nameHero',name)
                commit('alignmentHero',alignment)
                commit('powerstatsHero',powerstats)
                commit('imageHero',image)
            }).catch(function(error){
                console.log("error",error)
            })
    },   

//Función recibe el nombre a buscar, se hace la petición utilizando ademas el Accesstoken
//de la API presente en state. La variable name no puede ser vacía.
//Se crean arrays para guardar el response correspondiente, la intención es almacenar todos los objetos
//que corresponda para ser mostrados en Grilla.vue ocupando directivas v-for,
//dado que por un mismo nombre (name) puede haber más de un resultado.
    async searchName({commit},name){
        if(name !== ''){
            let token = this.state.AccessToken
            await this.$axios.get(`/api/${token}/search/${name}`)
                .then(function(response){
                    let name = []
                    let alignment = []
                    let powerstats = []
                    let image = []
    
                    response.data.results.forEach(element => {
                        name.push(element.name)
                        alignment.push(element.biography.alignment)
                        powerstats.push(element.powerstats)
                        image.push(element.image.url)
                    });
                    commit('nameHero',name)
                    commit('alignmentHero',alignment)
                    commit('powerstatsHero',powerstats)
                    commit('imageHero',image)
                    
                }).catch(function(error){
                    console.log("error",error)
                })  
        }else{
            alert("Name cannot be empty")
        } 
    }
}