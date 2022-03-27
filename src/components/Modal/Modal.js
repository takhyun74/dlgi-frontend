// @ts-nocheck

import React from "react";
import axios from "axios";

import { useHistory } from "react-router-dom";
import { Button, Modal } from "reactstrap";

import { refresh } from "utils/Token.js"

function CModal(props) {
    let history = useHistory();
    const { data } = props;
    const info = { 
        'id': '',
        'header': '',
        'message': '',
        'close': 'close',
        'ok': 'ok',
        'className': 'modal-md',
        'modalClassName': 'bd-example-modal-md'
    }
    
    if(data.id !== "" && data.id !== undefined && data.id !== null) { info.id = data.id }
    if(data.header !== "" && data.header !== undefined && data.header !== null) { info.header = data.header }
    if(data.message !== "" && data.message !== undefined && data.message !== null) { info.message = data.message }
    if(data.close !== "" && data.close !== undefined && data.close !== null) { info.close = data.close }
    if(data.ok !== "" && data.ok !== undefined && data.ok !== null) { info.ok = data.ok }
    if(data.className !== "" && data.className !== undefined && data.className !== null) { info.className = data.className }
    if(data.modalClassName !== "" && data.modalClassName !== undefined && data.modalClassName !== null) { info.modalClassName = data.modalClassName }

    const handleClose = (e) =>{
        props.setModalLive(false);
        
        if(info.id === 'application') {
            history.push({
                pathname: "/application",
                state: {user: null}
            });
        }
    }

    const handleOk = (e) =>{
        props.setModalLive(false);

        if(info.id === 'application') {
            const token = JSON.parse(localStorage.getItem('token'));
            if(token === null) {
                history.push({
                    pathname: "/application",
                    state: {user: null}
                });
            } else {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + token.accessToken;
                axios.defaults.headers.common['Refresh'] = token.refreshToken;
                refresh(axios.defaults.headers.common['Authorization'], axios.defaults.headers.common['Refresh'], function(data){
                    if(data.status === 200) {
                        axios.get('/api/user/' + token.login_user)
                        .then(res => {
                            history.push({
                                pathname: "/application",
                                state: {user: res.data}
                            });
                        })
                        .catch(err => {
                            console.log(err.response);
                        });
                    }
                });
            }
        }
    }

    return (
        <Modal toggle={() => props.setModalLive(false)} isOpen={props.modalLive} className={info.className} modalClassName={info.modalClassName}>
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLiveLabel" style={{ fontWeight:'bold'}}> { info.header } </h5>
                <button className="close" aria-label="Close" onClick={() => props.setModalLive(false)}>
                    <span aria-hidden={true}>×</span> 
                </button>
            </div>
            <div className="modal-body justify-content-center"> 
                <div style={{ textAlign:'left', margin:'10px'}}> {
                    data.message.split('\n').map( data => {
                        return (<span>{ data }<br/></span>)
                    })
                    } 
                </div>
            </div>
            <div className="modal-footer justify-content-end">
                <Button color="primary" onClick={ handleClose } size="sm" style={{ marginRight:'5px'}}> { info.close } </Button>
                <Button color="success" onClick={ handleOk } size="sm"> { info.ok } </Button>
            </div>
        </Modal>

    )
}

export default CModal;