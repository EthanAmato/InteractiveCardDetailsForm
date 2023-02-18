import { useState } from 'react'
import CreditCard from './components/CreditCard'
import './styles/formStyles.scss'
function App() {
  const [error, setError] = useState(false);


  function ensureNumDigits(e, numDigits) {
    if (e.target.value.length > numDigits) {
      e.target.value = e.target.value.slice(0, numDigits);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError(true);
    console.log(e.target['name'].value)
    console.log(e.target['cardNumber'].value)
    console.log(e.target['name'])
    console.log(e.target['name'])
  }

  return (
    <main>
      <CreditCard />
      <div className='formContainer'>
        <form onSubmit={handleSubmit}>

          <div className='input full'>
            <label htmlFor="name">Cardholder Name</label>
            <input type="text" name='name' id='name' />
            {error && <label className='error'>Can't leave name blank</label>}
          </div>
          <div className='input full'>
            <label htmlFor="cardNumber">Card Number</label>
            <input type="number" name='cardNumber' id='cardNumber' maxLength={16} onInput={(e) => ensureNumDigits(e, 16)} />
            {error && <label className='error'>Can't leave card number blank</label>}
          </div>
          <div className='input group'>
            <div>
              <label htmlFor="expMonth">EXP. DATE (MM/YY)</label><br />
              <input type="text" name='expMonth' id='expMonth' />
              <input type="text" name='expYear' id='expYear' /><br />
              {error && <label className='error'>Must Fill Out Expiration Date</label>}
            </div>
            <div>
              <label htmlFor="cvc">CVC</label><br />
              <input type="number" name='cvc' id='cvc' onInput={(e) => ensureNumDigits(e, 3) }/><br />
              {error && <label className='error'>Must Fill Out CVC</label>}
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
