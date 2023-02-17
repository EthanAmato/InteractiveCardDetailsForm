import { useState } from 'react'
import CreditCard from './components/CreditCard'
import './styles/formStyles.scss'
function App() {
  function ensureSixteenDigits(e) {
    if (e.target.value.length > 16) {
      e.target.value = e.target.value.slice(0,16);
    }
  }


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
            <input type="number" name='cardNumber' id='cardNumber' maxLength={16} onInput={(e)=>ensureSixteenDigits(e)}/>
          </div> 
          <div className='input group'>
            <div>
              <label htmlFor="name">EXP. DATE (MM/YY)</label><br />
              <input type="text" name='cardNumber' id='cardNumber' />
              <input type="text" name='cardNumber' id='cardNumber' />
            </div>
            <div>
              <label htmlFor="name">CVC</label><br />
              <input type="text" name='cardNumber' id='cardNumber' />
            </div>
          </div>
          <div className='input full'>
            <button type='submit'>Confirm</button>
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
