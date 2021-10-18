import router from "../router";
import { Login } from "./users";
import { Add } from "./users";

const session = {
    user: null,
    messages: [],
    toRoute: '/profile',
    fullname: null,
    weight: null,
    description: null,
    age: null,
    Login(handle, password) {

        const response = Login(handle, password);

        this.user = response.user;

        router.push(this.toRoute);

    },
    HomeRegister(handle, password) {
//This method will soon be implemented to REGISTER a user instead of just Logging them in from the main profile screen instead
//This method will also work with the REGISTER button in the SIGNUP Page of our vue app as well
        Add(this.user);

        const response = Login(handle, password);

        this.user = response.user;

       

        router.push(this.toRoute);

    
        
       






    }
};

export default session;

//export function