import React from 'react';
import Table from './Table';
import {useSelector} from 'react-redux'
import './ContainerRight.css'

function ContainerRight(props){
    const {dataTable} = props;
    const casesType = useSelector(state => state.country.casesType)

    return(
        <div className="container_right">
            <h3 className="table_title">Live Cases By Country</h3>
            <Table dataTable={dataTable}></Table>
        </div>
    )
}

export default ContainerRight;