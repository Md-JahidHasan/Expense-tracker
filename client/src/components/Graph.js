import React from 'react';
import {Chart, ArcElement} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import './../App.css'
import Label from './Label';
import {default as api} from '../store/apiSlice'
import { chart_data, getTotal } from './Helper/Helper';

Chart.register(ArcElement)





const Graph = () => {
    const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();

    let GraphData;
    if (isFetching) {
        GraphData = <div>Data is Fetching</div>
    } else if (isSuccess) {
        
        GraphData = <Doughnut {...chart_data(data)}></Doughnut>
        // console.log(getLabels(data, 'type'));
        // GraphData = getLabels(data, 'type').map((v, i) => <LabelComponent key={i} data={v}></LabelComponent>)
    } else if (isError) {
        GraphData = <div>Error</div>
    }

    return (
        <div className='flex justify-center max-w-xs mx-auto'>
            <div className="item">
                <div className="chart relative">
                    {GraphData}
                    <h3 className='mb-4 font-bold title'>Total <span className='block text-3xl text-emerald-500'>${getTotal(data) ?? 0}</span></h3>
                </div>
                <div className="flex flex-col py-10 gap-4">
                    {/* Labels */}
                    <Label></Label>
                    
                </div>
            </div>
        </div>
    );
};

export default Graph;