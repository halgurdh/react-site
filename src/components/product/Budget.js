
import React, { Component } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

function updateCashBalance(event) {
  this.setState({CashBalance: event.target.value});
}

function updateTotalMonthlyIncome(event) {
  this.setState({TotalMonthlyIncome: event.target.value});
}

function updateTotalMonthlyExpenses(event) {
  this.setState({TotalMonthlyExpenses: event.target.value});

}

let dataset = {
  labels: [
    'Total Monthly income',
    'Total Monthly expenses',
    'Cash Balance'
  ],
  datasets: [{
    label: 'Montly Overview',
    data: [this.state.TotalMonthlyIncome, this.state.TotalMonthlyExpenses, this.state.CashBalance],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 5
  }]
};

class Budget extends Component() {
  constructor() {
    super();
    this.state = {
      TotalMonthlyIncome : 100,
      TotalMonthlyExpenses : 200,
      CashBalance : 300,
      dataset : {}
    }
  }
  
  render() {
    return (
      <div>
        <div>{<Pie data={dataset} />}</div>
        <div><input onChange={updateTotalMonthlyIncome} id='TotalMonthlyIncome' type='number' placeholder='Total Monthly Income'/></div>
        <div><input onChange={updateTotalMonthlyExpenses} id='TotalMonthlyExpenses' type='number' placeholder='Total Monthly Expenses'/></div>
        <div><input onChange={updateCashBalance} id='CashBalance' type='number' placeholder='Cash Balance'/></div>
      </div>
    )
  }
}

export default Budget