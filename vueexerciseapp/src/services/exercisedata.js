import { api } from "./myFetch";




export function GetFeed(handle) { 
    return api('exercisedata/feed/' + handle);  
     


}


export function Get(workouts_id) { return api('exercisedata/' + workouts_id); }
export function Add(workouts) {
  
     return { ...workouts };
}
export function Update(workouts_id, workouts) {
   return {workouts_id, workouts};
}
export function Delete(workouts_id) {
   
    return api('exercisedata/' + workouts_id, {}, 'DELETE');
}  