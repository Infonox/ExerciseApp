import { api } from "./myFetch";



export function GetAll2() {
    return api('profiles');
 }


export function Get(profiles_id) { return api('profiles/' + profiles_id); }
export function AddData(profile) {
  
  
        return api('profiles', profile);
    }

export function Update(profiles_id, profiles) {
   return {profiles_id, profiles};
}
