import React from "react";
import Card from '../../components/Card/Card.js'



function ApplicationDetail() {
    return(
        <div style={{alignItems:'flex-start'}}>
            <div>
                <Card textValue={'test'} imgValue={'../../assets/img/kakao1.jpg'}/>
                <Card textValue={'test1'} imgValue={'../../assets/img/kakao1.jpg'}/>
            </div>
        </div>
    );
}

export default ApplicationDetail;