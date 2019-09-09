export const updateObjectsInArray = (items,itemId,objectProperty,newObjectsProperties) => 
items.map(u=>{
        if (u[objectProperty]===itemId){
            return ({...u, ...newObjectsProperties})}
            return u 
        })
