import { api } from "./myFetch";


export function Update(profiles_id, profiles) {
    return {profiles_id,profiles};
}


export function getAll2() {
    return api('profiles');
 }


export function Get(profiles_id) { return api('profiles/' + profiles_id); }
export function AddData(profile) {
  
  
        return api('profiles', profile);
    }

