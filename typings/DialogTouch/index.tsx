/**
 * @author yidi.zhao
 * modal component only for show
 */
import React, {ReactNode} from 'react';
import './index.scss';
const fn = ()=>{};
interface props {
    title: string;
    customClassName?: string;
    children?: ReactNode;
    handleSure: ()=>{};
    handleClose: ()=>{};
    btnText: string;
}
export default function Dialog(props: props){
    const {title, customClassName, children, handleSure, handleClose, btnText } = props;
    const newTitle = title === undefined ? '我知道了' : title;
    const newHandleSure = handleSure || fn;
    const newHandleClose = handleClose || fn;
    const newCustomClassName = customClassName || '';
    const newChildren = children === undefined ? 'success' : children;
    return (
        <div className={`__simple_dialog_coo_touch ${newCustomClassName}`}>
            <div className="modal" onClick={newHandleClose}/>
            <div className="dialog">
                {getTitle(newTitle)}
                {
                    newChildren ? <div className="dialog-body">{newChildren}</div> : null
                }
                <div onClick={newHandleSure} className='m-btn'>{btnText}</div>
            </div>
        </div>
    );
}

function getTitle (title: string): ReactNode {
    if(!title){
        return null;
    }
    return (
        <div className="dialog-header">{title}</div>
    );
}