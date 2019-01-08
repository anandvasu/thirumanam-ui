import React from 'react';
import './Modal.css';
import Backdrop from '../../components/backdrop/Backdrop';
import Aux from '../../hoc/Aux';

const modal = ( props ) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div className={props.className}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>
);

export default modal;