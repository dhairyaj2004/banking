import React from 'react'
import HeaderBox from '../../components/HeaderBox'
import TotalBalanceBox from '../../components/TotalBalanceBox'
import Rightsidebar from '@/components/Rightsidebar'
function Home() {
    const loggedIn={firstName:"Dhairya", lastName:"Shah", email:"dhairyaj2004@gmail.com"}
  return (
    <section className='home'>
        <div className='home-content'>
            <div className='home-header'>
                <HeaderBox
                type="greeting"
                title="Welcome"
                subtext="Access and manage your account and Transactions effeciently"
                user={loggedIn?.firstName || "Guest"}
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