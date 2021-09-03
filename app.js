// https://randomapi.com/

// https://www.youtube.com/watch?v=qZXt1Aom3Cs



const app = Vue.createApp({

    data() {

        return {
            firstName: 'An',
            lastName: 'Non',
            email: 'AnNon@mus.com',
            gender: 'NA',
            picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN3xOJdtjRFbk3ojxyud2DlyJauvUwxqfwizclsRghR3ol35zdBgM0pA0g80mhGlMz8zk&usqp=CAU'
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()
            console.log(results)
            this.setUser(results[0])

            //--- Static setup
            // ... use this if you don't want to call to API
            // this.setUser(this.userList())    
            // console.log(this.setUser(this.userList()))   // for data output and debugging to console
        },
        randomUser(maxUsers = 3) {
            return Math.floor(Math.random() * maxUsers)
        },
        setUser(params) {
            console.log(params)
            this.firstName = params.name.first
            this.lastName = params.name.last
            this.email = params.email
            this.gender = params.gender
            this.picture = params.picture.large
        },
        userList() {
            users = [
                { 
                    name: {
                        first: 'John',
                        last: 'Doe'
                    },
                    gender: 'male',
                    picture: { large: 'https://randomuser.me/api/portraits/med/men/90.jpg' },
                    email: 'test@test.com'
                },
                {
                    name: {
                            first: 'John', 
                            last: 'Snoe'
                    },                    
                    gender: 'male',
                    picture: { large: 'https://randomuser.me/api/portraits/med/men/90.jpg' },
                    email: 'rest@test.com'
                },
                {
                    name:
                    {
                        first: 'Sam',
                        last: 'Doe'
                    },
                    gender: 'female',
                    picture: { large: 'https://randomuser.me/api/portraits/med/women/90.jpg'},
                    email: 'best@test.com'
                }
            ] 
            return users[this.randomUser()]
        }

    }

})

app.mount('#app')

