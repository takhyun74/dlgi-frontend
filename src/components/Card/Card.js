import React from "react";
import { CCard, CCardImage, CCardBody, CCardText } from  '@coreui/react';
import '../../assets/css/card.css';

class Card extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            imgValue:"",
            textValue: ""
        }
    }
    render(){
        const {imgValue, textValue} = this.props;
        return(
            <CCard className={'CCard'} style={{width:'300px', height:'400px',marginLeft: '30px',marginTop:'20px', marginRight:'50px'}}>
                <CCardImage orientation="top" src={imgValue} style={{height:'250px'}}/>
                <CCardBody>
                    <CCardText>
                        {textValue}
                    </CCardText>
                </CCardBody>
            </CCard>            
        );
    }
}

export default Card;