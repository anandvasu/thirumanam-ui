import React from 'react';
import './Modal.css';
import Backdrop from '../../components/backdrop/Backdrop';
import closeImage from '../../assets/images/close.png';
import Aux from '../../hoc/Aux';

function modal(props) {

    const screenHeight = window.innerHeight - 100;

    return(
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div className={props.className}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0',
                    height: screenHeight
                }}>
            <div className="closeImage" style={{display:props.displayClose}}>
                <img src={closeImage} onClick={props.modalClosed} width="25px" height="25px"></img>
            </div>
                {props.children}  
            <div style={{display:props.displayClose, paddingTop:'10px'}}>
                <button onClick={props.modalClosed}>Close</button>
            </div>          
            </div>
        </Aux>
    );
}

export default modal;