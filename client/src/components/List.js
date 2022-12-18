import React from 'react';
import 'boxicons'
import {default as api} from '../store/apiSlice'


const object = [
    {
        name: 'Savings',
        color: '#f9c74f',
    },
    {
        name: 'Investment',
        color: '#9d4edd',
    },
    {
        name: 'Expense',
        color: '#f9c74f',
    }
    
]


const List = () => {
    const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
    const [deleteTransaction] = api.useDeleteTransactionMutation()
    const handlerClick = (e) => {
        console.log(e.target.dataset.id);
        if (!e.target.dataset.id) return 0;
        deleteTransaction({ _id: e.target.dataset.id })
    }
    let History;
    // console.log(data);
    if(isFetching){
        History= <div>Data is Fetching</div>
    }else if(isSuccess){
        History = data.map((v, i) => <Transaction key={i} category={v} handler={handlerClick}></Transaction>)
    }else if(isError){
        History = <div>Error</div>
    }

    

    return (
        <div className='py-4 flex flex-col gap-3'>
            <h1 className='text-2xl font-bold'>History</h1>
            {
                History
            }
            

        </div>
    );
};


const Transaction = ({category, handler})=>{
    if(!category)return null;
    return(
        <div className='item flex justify-center bg-slate-200 rounded-r-md p-2' style={{borderRight:`10px solid ${category.color?? 'red'}`}}>
            <button onClick={handler} className='px-3'><box-icon data-id={category._id} size="18px" color={category.color ?? 'red'} name='trash'></box-icon></button>
            <span className=' block w-full'>{category.name?? ''}</span>
            
        </div>
    )
}

export default List;