import router from "../router";
import { AddData, getAll2 } from "./profiles";
import { Add, GetAll, Login } from "./users";
import { NotificationProgrammatic } from "@oruga-ui/oruga-next/dist/esm/notification";






const session = {
    userFollowers:[],
    checkData: false,
    profile: null,
    user: null,
    messages: [],
    toRoute: '/feed',
    regConfirm: false,
    NoSameUsers: "Sorry, already a user with that handle, please enter a different one!",
    CheckForSameUsers: false,
    handle: null,
    async GetUserFollowings(user){
        try{
           
          
           
            let result = await user.following.map(a => a.handle); 
            
        
            return result;

        }
        catch(error){
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
    async GetProfileData(user) {
        try {
            let listofprofiles = await (getAll2());
            this.profile = listofprofiles;


            let userprofiledata = this.profile.find(o => o.user_handle === user.handle);
            this.profile = userprofiledata;
            return this.profile;







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
        try {
            let listofusers = await (GetAll());
            console.log(listofusers);
            for (var i of listofusers) {
                if (i.handle == user.handle) {
                    this.CheckForSameUsers = true;
                    console.log(user.handle);
                    console.log(this.CheckForSameUsers);
                    return Promise.reject({ code: 422, msg: "Sorry, already a user with that handle! enter a different one" })
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
    async AddNewProfile(profile) {


        try {
            const response = await AddData(profile);

            console.log(response);

           

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





    Error(error) {
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