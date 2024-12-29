import React from 'react'
import Doughnut from './DoughnutChart'
import AnimatedCounter from './AnimatedCounter'
const TotalBalanceBox = ({accounts=[], totalBanks, totalCurrentBalance}: TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
            <Doughnut accounts={accounts}/>
        </div>
        <div className='flex flex-col gap-6'>
            <h2 className='header-2 ml-4'>Bank Accounts : {totalBanks} </h2>
            <div className='flex flex-col gap-2'>
                <h3 className='total-balance-label'>Total Current Balance :</h3>
                <h3 className='total-balance-amount flex-center gap-2'>
                    <AnimatedCounter amount={totalCurrentBalance}/>
                    </h3> 
            </div>
           
        </div>
    </section>
  )
}

export default TotalBalanceBox