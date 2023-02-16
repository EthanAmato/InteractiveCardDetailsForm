import { useState } from 'react'
import CreditCard from './components/CreditCard'
import './styles/formStyles.scss'
function App() {

  return (
    <main>
      <div className='creditCardContainer'>
        <CreditCard />
      </div>
      <div className='formContainer'>
        <form>

          <div className='input full'>
            <label htmlFor="name">Cardholder Name</label>
            <input name='name' id='name' />
          </div>
          <div className='input full'>
            <label htmlFor="name">Card Number</label>
            <input name='cardNumber' id='cardNumber' />
          </div>
          <div className='input group'>
            <label htmlFor="name">EXP. DATE (MM/YY)</label>
            <input name='cardNumber' id='cardNumber' />
            <input name='cardNumber' id='cardNumber' />
            <label htmlFor="name">CVC</label>
            <input name='cardNumber' id='cardNumber' />
          </div>
        </form>
        {/* <!-- Completed state start -->

      Thank you!
      We've added your card details
      Continue */}
      </div>
    </main>
  )
}

export default App
