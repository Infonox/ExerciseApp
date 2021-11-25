import router from "../router";
import { Get, GetAll2 } from "./profiles";
import { Add, GetAll, Login } from "./users";
import { NotificationProgrammatic } from "@oruga-ui/oruga-next/dist/esm/notification";






const session = {
    checkData: false,
    profile: null,
    user: null,
    messages: [],
    toRoute: '/feed',
    regConfirm: false,
    NoSameUsers: "Sorry, already a user with that handle, please enter a different one!",
    CheckForSameUsers: false,
    handle: null,

    async AddProfileData(){
        const response = await GetAll2();
        console.log(response);
        const user = await GetAll()
        console.log(user);
        for(var i of user){

            if(i.handle == response.user_handle)
            {
           
            this.checkData = true;
            console.log(this.checkData);
         
            }

        }
        

    },
    async GetProfileData(){
        const Profiles = await GetAll2()

        if( Profiles.user_handle == this.user.handle)
        {

           const getData = await Get(Profiles._id)
           return getData;


        }
    },
    async Login(handle, password) {

        try {
            const response = await Login(handle, password);

            this.user = response.user;

            router.push(this.toRoute);

        } catch (error) {
            this.messages.push({ text: error.msg, type: 'warning' })
            NotificationProgrammatic.open({
                duration: 5000,
                message: error.msg,
                variant: 'danger',
                type: 'danger',
                closable: true
            })
            this.Error(error);

        }




    },
    async Register(user) {
       try{
        let listofusers = await(GetAll());
        console.log(listofusers);
        for (var i of listofusers) {
            if(i.handle == user.handle){
                this.CheckForSameUsers=true;
                return Promise.reject( { code: 422, msg: "Sorry, already a user with that handle! enter a different one" } )
         }
        }
        
    
        
    
        
        
       

            const response = await Add(user);

            this.user = response.user;

            router.push(this.toRoute);
            this.regConfirm = true;
           

        } catch (error) {
            this.messages.push({ text: error.msg, type: 'warning' })
            NotificationProgrammatic.open({
                duration: 5000,
                message: error.msg,
                variant: 'danger',
                type: 'danger',
                closable: true
            })
            this.Error(error);

        }




    },
    Error(error){
        console.error(error);
        const msg = error.msg ?? error;

        this.messages.push({ text: msg, type: 'warning' })
        NotificationProgrammatic.open({
            duration: 5000,
            message: msg,
            variant: 'danger',
            type: 'danger',
            closable: true,

        })

    }

};

export default session;

//export function