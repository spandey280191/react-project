import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import Cart from "../Cart/Cart";

const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
        console.log(item.amount)
        return currNumber + item.amount
     }, 0);

     
     const [buttonIsHiglighted, setButtonIsHighlighted] = useState(false);
     const buttonClass = `${classes.button} ${buttonIsHiglighted ? classes.bump : ''} `;
     const { items } = cartCtx;

     useEffect (() => {
        if(items.length>0){
            setButtonIsHighlighted(true);
        }
      const timer =  setTimeout(() => {
        setButtonIsHighlighted(false)
       }, 300 );

       return () => {
        clearTimeout(timer);
       }

     },[items]);
    
    return <button className={buttonClass} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
};


export default HeaderCartButton;