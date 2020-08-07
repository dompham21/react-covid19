import React from 'react';
import './Table.css';

import { useDispatch,useSelector } from 'react-redux';
import { sortData } from '../../../actions/country';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { sortDataDescending, sortDataAscending } from '../../../util';

 

function Table(props){
    const {dataTable} = props;
    const dispatch = useDispatch();
    const isShort = useSelector(state => state.country.isShortDescending)
    const action = sortData();

    function shortData(data){
        return isShort? sortDataDescending(data) : sortDataAscending(data);  //sort data descending by cases
    }
    
    const onClickSort = ()=>{
        dispatch(action);
        console.log(isShort);
    }

    shortData(dataTable);
    return(
        <table className="table">
            
            <thead>
                <tr>
                    <th>Country</th>
                    <th onClick={onClickSort} className="table_head_sort">Confirmed <FontAwesomeIcon className={"table_icon"}  icon={ isShort?faChevronDown:faChevronUp } /></th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                </tr>
            </thead>
            <tbody>
                {dataTable.map(((country,index)=>(
                    <tr key={index}>
                        <td style={{textAlign:"left",backgroundColor:"#EDF2F7"}}>
                            <img alt="flag" style={{width:"16px",height:"12px",marginRight:"5px"}} src={country.countryInfo.flag}></img>
                            {country.country}
                        </td>
                        <td> <strong>{country.cases}</strong></td>
                        <td><strong>{country.recovered}</strong></td>
                        <td><strong>{country.deaths}</strong></td>
                    </tr>
                )
                ))}
            </tbody>
        </table>
    )
}


export default Table;