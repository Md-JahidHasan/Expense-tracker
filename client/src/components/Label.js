import React from 'react';
import {default as api} from '../store/apiSlice'
import { getLabels, getSum } from './Helper/Helper';


const Label = () => {
    const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
    console.log(data);
    let Transaction;
    if(isFetching){
        Transaction= <div>Data is Fetching</div>
    }else if(isSuccess){
        console.log(getLabels(data, 'type'));
        Transaction = getLabels(data, 'type').map((v, i) => <LabelComponent key={i} data={v}></LabelComponent>)
    }else if(isError){
        Transaction = <div>Error</div>
    }
    // console.log(api.useGetLabelsQuery() );
    return (
        <>
            {Transaction}
        </>
    );
};

const LabelComponent = ({data}) =>{
    return(
        <div className='flex justify-between mb-2'>
            <div className='flex gap-2'>
                <div className='w-2 h-2 py-3 rounded' style={{ background: data.color ?? '#f9c74f' }}></div>
                <h3>{data.type?? ''}</h3>
            </div>
            <div className='font-bold'>{Math.round(data.parcent)?? 0}%</div>
        </div>
    )
}

export default Label;