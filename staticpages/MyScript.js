



        const VM = {                                //view model
            data() {
                return {
                    title: 'HELLO WORLD',
                    test: 'TEST TEST 3 4',
                    navBarIsActive: false,
                    sizeCounter: 60,
                }

            },

            methods: {

                weightmanGrow() {

                    this.sizeCounter += 20;

                    if (this.sizeCounter ==    180) {

                        this.sizeCounter = 60;

                    }
                }
            }
        }
                


        
        Vue.createApp(VM).mount('.app')


