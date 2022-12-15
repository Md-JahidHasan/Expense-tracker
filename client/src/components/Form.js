import React from 'react';
import {useForm} from 'react-hook-form';
import List from './List';


const Form = () => {
    const {register, handleSubmit, resetField} = useForm();

    const onSubmit = (data) =>{
        console.log(data);
    }
    return (
        <div className='max-w-sm mx-auto w-96'>
            <h1 className='font-bold'>Transaction</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid gap-4'>
                    <div className='input-group'>
                        <input {...register('name')} type="text" placeholder='Salary, House Rent, SIP' className='form-input' />
                    </div>
                    <select {...register('type')} className='form-input' name="" id="">
                        <option value="Investment" defaultValue>Investment</option>
                        <option value="Expense" defaultValue>Expense</option>
                        <option value="Savings" defaultValue>Savings</option>
                    </select>
                    <div className='input-group'>
                        <input {...register('amount')} type="text" placeholder='Amount' className='form-input' />
                    </div>
                    <div className="submit-button">
                        <button type='submit' className='bg-indigo-400 p-2 w-full rounded text-white '>Make Transaction</button>
                    </div>

                </div>
            </form>
            <List></List>
        </div>
    );
};

export default Form;