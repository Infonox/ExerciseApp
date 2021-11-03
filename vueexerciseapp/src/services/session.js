import router from "../router";
import { Add, Login } from "./users";
//import { Add } from "./users"x;

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
    HomeRegister(handle, password, weight, age, description, firstName, lastName){ //add parameters for all inputs on homepage
        //This method will soon be implemented to REGISTER a user instead of just Logging them in from the main profile screen instead
        //This method will also work with the REGISTER button in the SIGNUP Page of our vue app as well
    
        const myUser = {
            firstName,
            lastName,
            description,
            weight,
            age,
            




        }
        this.user = Add(myUser)
        print(myUser);
        const response = Login(handle, password);

        this.user = response.user;


        router.push(this.toRoute);










    }
};

export default session;

//export function