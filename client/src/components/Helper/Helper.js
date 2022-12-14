import { configureStore } from '@reduxjs/toolkit';
import _ from 'lodash';


export const getSum =(transaction, type)=>{
    let sum = _(transaction)
    .groupBy('type')
    .map((objs, key)=>{
        if(!type) return _.sumBy(objs,'amount')
        return {
            'type': key,
            'color':objs[0].color,
            'total': _.sumBy(objs, 'amount')
        }
    })
    .value()
    return sum
    
}

export const getLabels=(transaction)=>{
    let amountSum = getSum(transaction, 'type');
    let Total = _.sum(getSum(transaction))
    let parcent = _(amountSum)
    .map(objs=>_.assign(objs, {parcent:(100*objs.total)/Total}))
    .value()
    return parcent
}

export const chart_data = (transaction, custom)=>{
    let bg = _.map(transaction, a=>a.color);
    bg = _.uniq(bg)
    let dataValue = getSum(transaction)
    console.log(bg);
    const config = {
        data: {
            datasets: [{
                label: 'My First Dataset',
                data: dataValue,
                backgroundColor:bg,
                hoverOffset: 5,
                borderRadius: 10,
                spacing: 10
            }]
        },
        options: {
            cutout: 100
        }
    }
    return custom ?? config
}

export const getTotal = (transaction)=>{
    return _.sum(getSum(transaction))
}