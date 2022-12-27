
import React from 'react'
import {AiFillDelete} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';
const Card = () => {
    const {cartItems,subTotal,tax,shipping,total}=useSelector(state=>state.cart)
     const dispatch=useDispatch()
    const increment=(id)=>{
      dispatch({type:"addToCart", payload:{id}});
      dispatch({type:"calculatePrice"})
          
    }
    const decrement=(id)=>{
        dispatch({type:"decrement", payload:id});
        dispatch({type:"calculatePrice"})
    }
  
     const deleteHandler=(id)=>{
        dispatch({type:"deletefromCart", payload:id});
        dispatch({type:"calculatePrice"})
     }

  return (
    <div className='cart'>
          <main>
            {
                cartItems.length>0 ? (
                    cartItems.map(i=>(
                        <Cartitem
                         imgsrc={i.imgsrc}
                         name={i.name}
                         price={i.price}
                         qty={i.quantity}
                         id={i.id}
                         key={i.id}
                         increment={increment}
                         decrement={decrement}
                         deleteHandler={deleteHandler}
                        />
                    ))
                ) :(
                    <h1>No itme yet</h1>
                )
            }
          </main>
          <aside>
            <h2>Subtotal: ${subTotal}</h2>
            <h2>Shipping: ${shipping}</h2>
            <h2>Tax: ${tax}</h2>
            <h2>Total: ${total}</h2>
          </aside>
    </div>
  )
}
const Cartitem=({imgsrc,name,price,qty,decrement,increment,deleteHandler,id})=>(
  <div className='cartItem'>
      <img src={imgsrc} alt="name" />
      <article>
        <h3>{name}</h3>
        <p>${price}</p>
      </article>
      <div>
        <button onClick={()=>decrement(id)}>-</button>
        <p>{qty}</p>
        <button onClick={()=>increment(id)}>+</button>
      </div>
      <AiFillDelete  onClick={()=>deleteHandler(id)}/>
  </div>
)
export default Card