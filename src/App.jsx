import { useState } from 'react'
import CreditCard from './components/CreditCard'
import './styles/formStyles.scss'
function App() {

  return (
    <main>
      <CreditCard />
      <div className='formContainer'>
        <form>

          <div className='input full'>
            <label htmlFor="name">Cardholder Name</label>
            <input type="text" name='name' id='name' />
          </div>
          <div className='input full'>
            <label htmlFor="name">Card Number</label>
            <input type="text" name='cardNumber' id='cardNumber' />
          </div>
          <div className='input group'>
            <label htmlFor="name">EXP. DATE (MM/YY)</label>
            <input type="text" name='cardNumber' id='cardNumber' />
            <input type="text" name='cardNumber' id='cardNumber' />
            <label htmlFor="name">CVC</label>
            <input type="text" name='cardNumber' id='cardNumber' />
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
