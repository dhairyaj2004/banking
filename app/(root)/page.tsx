import React from 'react'
import HeaderBox from '../../components/HeaderBox'
import TotalBalanceBox from '../../components/TotalBalanceBox'
import Rightsidebar from '@/components/Rightsidebar'
import { getLoggedInUser } from '../../lib/actions/user.actions';
async function Home() {
  const loggedIn =await getLoggedInUser()
  console.log(loggedIn)
  return (
    <section className='home'>
        <div className='home-content'>
            <div className='home-header'>
                <HeaderBox
                type="greeting"
                title="Welcome"
                subtext="Access and manage your account and Transactions effeciently"
                user={loggedIn?.name || "Guest"}
                />
            </div>
                <TotalBalanceBox 
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1250.25}
                />
                Recent Transactions
        </div>
    <Rightsidebar user={loggedIn} transactions={[]} banks={[{currentBalance: 123.50},{currentBalance : 503.45}]}/>
    </section>
  )
}

export default Home