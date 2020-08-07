import React from 'react';
import "./ContainerLeft.css"
import { useDispatch } from 'react-redux';
import { setCasesTypeAction } from '../../../actions/country';

function InfoBox(props){
    const {title,cases} = props;

    const dispatch = useDispatch();
    const action = setCasesTypeAction(title);

    const changeCasesType = ()=>{
        dispatch(action);
    }
    return(
        <div onClick={changeCasesType} className={`container_total ${title}`}>
            <div className="total">{cases}</div>
            <div className="type">{title}</div>
        </div>
    )
}


export default InfoBox;