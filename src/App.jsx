import { useState } from 'react'
import CreditCard from './components/CreditCard'
import './styles/formStyles.scss'
function App() {
  const [error, setError] = useState(false);

  const [name, setName] = useState();
  const [cardNumber, setCardNumber] = useState();
  const [securityCode, setSecurityCode] = useState();
  const [expMonth, setExpMonth] = useState();
  const [expYear, setExpYear] = useState();
  const [hasSubmit, setHasSubmit] = useState(false)

  function ensureNumDigits(e, numDigits) {
    if (e.target.value.length > numDigits) {
      e.target.value = e.target.value.slice(0, numDigits);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !cardNumber || !expMonth || !expYear || !securityCode) setError(true)
    else {
      setHasSubmit(true)
    }
  }

  return (
    <main>
      <CreditCard
        cardNumber={cardNumber}
        cardSecurityCode={securityCode}
        name={name}
        expMonth={expMonth}
        expYear={expYear}
      />
      <div className='formContainer'>
        {
          !hasSubmit ? <form onSubmit={handleSubmit}>

            <div className='input full'>
              <label htmlFor="name">Cardholder Name</label>
              <input type="text"
                name='name'
                id='name'
                onChange={(e) => setName(() => e.target.value)}
              />
              {error && !name && <label className='error'>Can't leave name blank</label>}
            </div>
            <div className='input full'>
              <label htmlFor="cardNumber">Card Number</label>
              <input type="number"
                name='cardNumber'
                id='cardNumber'
                maxLength={16}
                onInput={(e) => ensureNumDigits(e, 16)}
                onChange={(e) => setCardNumber(() => e.target.value)}
              />
              {error && !cardNumber  &&  <label className='error'>Can't leave card number blank</label>}
            </div>
            <div className='input group'>
              <div>
                <label htmlFor="expMonth">EXP. DATE (MM/YY)</label><br />
                <input type="number"
                  name='expMonth'
                  id='expMonth'
                  onInput={(e) => ensureNumDigits(e, 2)}
                  onChange={(e) => setExpMonth(() => e.target.value)}
                />
                <input type="number"
                  name='expYear'
                  id='expYear'
                  onInput={(e) => ensureNumDigits(e, 2)}
                  onChange={(e) => setExpYear(() => e.target.value)}
                /><br />
                {error && (!expMonth || !expYear) && <label className='error'>Must Fill Out Expiration Date</label>}
              </div>
              <div>
                <label htmlFor="cvc">CVC</label><br />
                <input type="number"
                  name='cvc'
                  id='cvc'
                  onInput={(e) => ensureNumDigits(e, 3)}
                  onChange={(e) => setSecurityCode(() => e.target.value)}
                /><br />
                {error && !securityCode && <label className='error'>Must Fill Out CVC</label>}
              </div>
            </div>
            <div className='input full'>
              <button type='submit'>Confirm</button>
            </div>
          </form> : 
            <div className='thankYou'>
              <div>
                <h2>Thank you!</h2>
                <p>Your Card Information has been added to the list</p>
                <button>Continue</button>
              </div>
            </div>
        }
      </div>
    </main>
  )
}

export default App
