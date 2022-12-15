import React from 'react';
import 'boxicons'


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
    return (
        <div className='py-4 flex flex-col gap-3'>
            <h1 className='text-2xl font-bold'>History</h1>
            {
                object.map((v, i)=><Transaction category={v}></Transaction>)
            }
            

        </div>
    );
};


const Transaction = ({category})=>{
    if(!category)return null;
    return(
        <div className='item flex justify-center bg-slate-200 rounded-r-md' style={{borderRight:`10px solid ${category.color?? 'red'}`}}>
            <button className='px-3'><box-icon size="18px" color={category.color ?? 'red'} name='trash'></box-icon></button>
            <span className=' block w-full'>{category.name?? ''}</span>
            
        </div>
    )
}

export default List;