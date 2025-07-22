
import PropTypes from 'prop-types';
import CartStore from "../../store/CartStore.js";
const CartSubmitButton = (props) => {

    let {isCartSubmit}=CartStore();
    if(isCartSubmit===false){
        return  <button onClick={props.onClick} type="submit" className={props.className}>{props.text}</button>
    }else {
        return (
            <button disabled={true} className={props.className}><div className="spinner-border spinner-border-sm" role="status"></div>Processing...</button>
        );
    }
};
CartSubmitButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
};
export default CartSubmitButton;