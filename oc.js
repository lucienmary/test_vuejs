var vm = new Vue({
    el: '#app',
    data: {
        title: 'Liste des articles du shop',

        bananas: 2,
        apple: 3,
        pinapple: 7,

        name: ''
    },
    computed:{
        somme(){
            return this.apple + this.bananas + this.pinapple
        }
    },
    methods:{

    }
})
