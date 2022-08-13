import alternative from '../reducers/alternative.jpg';
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING, FIND_IN_STORE} from '../actions/action-types/cart-actions'


const initState = {
    items: [
        {
            id:1,
            author_id:1,
            author: "Levans Miguelle",
            title: "Oliver Twist",
            cover_image: alternative,
            pages: 234,
            price:200,
            releaseDate: "1839",
            isbn: "wt345"
        },
        {
            id:2,
            author_id: 1,
            author: "Levans Miguelle",
            title: "Hard Times",
            cover_image: alternative,
            pages: 300,
            price:100,
            releaseDate: "1854",
            isbn: "jk654"
        },
        {
            id:3,
            author_id: 3,
            author: "Levans Miguelle",
            title: "Hamlet",
            cover_image: alternative,
            pages: 160,
            price:150,
            releaseDate: "1603",
            isbn: "po789"
        },
        {
            id:4,
            author_id: 2,
            author: "Levans Miguelle",
            title: "IT",
            cover_image: alternative,
            pages: 500,
            price:350,
            releaseDate: "2017",
            isbn: "yu098"
        },
        {
            id:5,
            author_id:4,
            author: "Levans Miguelle",
            title: "Norwegian Wood",
            cover_image: "http://t1.gstatic.com/images?q=tbn:ANd9GcQvJJDi2mzwg9v_PlmKYL31gXIz0kvAObJak7DVFPcD_mJTIyec",
            pages: 296,
            price:124,
            releaseDate: "1987",
            isbn: "hj846"
        },
        {
            id:6,
            author_id:4,
            author: "Levans Miguelle",
            title: "Kafka on the Shore",
            cover_image: "http://t0.gstatic.com/images?q=tbn:ANd9GcRHFU_j93PPsbQGqoaZJnHH6-Emk_sIxG823SkoRTL0nvdEP41f",
            pages:505,
            price:412,
            releaseDate: "2002",
            isbn: "op012"
        },
        {
            id:7,
            author_id:4,
            author: "Levans Miguelle",
            title: "After Dark",
            cover_image: "http://t3.gstatic.com/images?q=tbn:ANd9GcQBMNA8A19vQpNY4bkgadsLhiRUFqBKwKAA6ANrw8VEtOiPrYQJ",
            pages:208,
            price:351,
            releaseDate: "2004",
            isbn: "cv456"
        },
        {
            id:8,
            author_id:4,
            author: "Levans Miguelle",
            title: "1Q84",
            cover_image: "http://t0.gstatic.com/images?q=tbn:ANd9GcTBQZSg-b2LFkLlt9fWndS1w8SONabDZBHf0dtdb3-bqcuKxduL",
            pages:928,
            price:125,
            releaseDate: "2009",
            isbn: "al207"
        },
        {
            id:9,
            author_id:4,
            author: "Levans Miguelle",
            title: "1Q84",
            cover_image: "http://t0.gstatic.com/images?q=tbn:ANd9GcTBQZSg-b2LFkLlt9fWndS1w8SONabDZBHf0dtdb3-bqcuKxduL",
            pages:928,
            price:124,
            releaseDate: "2009",
            isbn: "al207"
        }
    ],
    addedItems:[],
    total: 0

}

const cartReducer= (state = initState,action)=>{
   
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === FIND_IN_STORE){
        let addedItem = state.items.find(item=> item.id === action.id)
       let existed_item= state.addedItems.find(item=> action.id === item.id)
       if(existed_item)
       {
          addedItem.quantity += 1 
           return{
              ...state,
               total: state.total + addedItem.price 
                }
      }
       else{
          addedItem.quantity = 1;
          let newTotal = state.total + addedItem.price 
          
          return{
              ...state,
              addedItems: [...state.addedItems, addedItem],
              total : newTotal
          }
          
      }
  }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type==='SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer
