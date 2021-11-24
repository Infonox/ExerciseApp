import { api } from "./myFetch";




export function GetFeed(handle) { 
    return api('workouts/feed/' + handle);  
     


}


export function Get(workouts_id) { return api('exercisedata/' + workouts_id); }
export function Add(workout) {
  
  
        return api('workouts', workout);
    }

export function Update(workouts_id, workouts) {
   return {workouts_id, workouts};
}
export function Delete(workouts_id) {
   
    return api('workouts/' + workouts_id, {}, 'DELETE');
}  