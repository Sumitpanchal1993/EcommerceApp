export const delItem = () => {
   return {
      type: "DELETE_ITEM",
      payload: []

   }
}


export const incNumber = () => {
    return {
       type: "INCREMENT",
       payload: 10
 
    }
 
 }
 
 export const decNumber = () => {
    return {
       type: "DECREMENT",
       payload: 10
 
    }
 
 }