import React from 'react';

const object =[
    {
        type:'Savings',
        color: '#f9c74f',
        value:40
    },
    {
        type:'Investment',
        color: '#f0175f',
        value:10
    },
    {
        type:'Expense',
        color: '#9d4edd',
        value:30
    }
]
const Label = () => {
    return (
        <div>
            {
                object.map((v, i)=><LabelComponent
                key={i}
                data={v}
                ></LabelComponent>)
            }
            
        </div>
    );
};

const LabelComponent = ({data}) =>{
    return(
        <div className='flex justify-between mb-2'>
            <div className='flex gap-2'>
                <div className='w-2 h-2 py-3 rounded' style={{ background: data.color ?? '#f9c74f' }}></div>
                <h3>{data.type?? ''}</h3>
            </div>
            <div className='font-bold'>{data.value?? 0}%</div>
        </div>
    )
}

export default Label;