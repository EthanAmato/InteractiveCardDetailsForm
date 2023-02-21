import { useRef, useState } from 'react'
import CreditCard from './components/CreditCard'
import './styles/formStyles.scss'
function App() {
  const [error, setError] = useState(false);

  const [cardNumber, setCardNumber] = useState();

  const nameRef = useRef();
  const numberRef = useRef();
  const dateRef = useRef();
  const codeRef = useRef();

  function ensureNumDigits(e, numDigits) {
    if (e.target.value.length > numDigits) {
      e.target.value = e.target.value.slice(0, numDigits);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    let cardName = nameRef.current.value;
    let cardNumber = numberRef.current.value;
    let expMonth = parseInt(dateRef.current.children['expMonth'].value);
    let expYear = parseInt(dateRef.current.children['expYear'].value);
    let cvc = codeRef.current.value;

    let currentYear = parseInt(String(new Date().getFullYear()).slice(2,)) //take last two digits
    let currentMonth = parseInt(new Date().getMonth() + 1) //month is 0-indexed and clients will not be putting in 0-indexed dates

    
    if(!cardName || !cardNumber || !expMonth || !expYear || !cvc) setError(true)
    else if (cardNumber.length < 16) setError(true)
    else if (expMonth>12 || expMonth <= 0) setError(true)
    else if (expYear < currentYear || (expYear === currentYear && expMonth > currentMonth)) setError(true)
    else {
      console.log("Congrats")
    }
  }

  return (
    <main>
      <CreditCard cardNumber={cardNumber} />
      <div className='formContainer'>
        <form onSubmit={handleSubmit}>

          <div className='input full'>
            <label htmlFor="name">Cardholder Name</label>
            <input type="text" name='name' id='name' ref={nameRef}/>
            {error && <label className='error'>Can't leave name blank</label>}
          </div>
          <div className='input full'>
            <label htmlFor="cardNumber">Card Number</label>
            <input type="number" 
                    name='cardNumber' 
                    id='cardNumber' 
                    maxLength={16} 
                    onInput={(e)=>ensureNumDigits(e, 16)} 
                    onChange={(e)=> setCardNumber(() => e.target.value)} 
                    ref={numberRef} 
            />
            {error && <label className='error'>Can't leave card number blank</label>}
          </div>
          <div className='input group'>
            <div ref={dateRef}>
              <label htmlFor="expMonth">EXP. DATE (MM/YY)</label><br />
              <input type="text" name='expMonth' id='expMonth' />
              <input type="text" name='expYear' id='expYear' /><br />
              {error && <label className='error'>Must Fill Out Expiration Date</label>}
            </div>
            <div>
              <label htmlFor="cvc">CVC</label><br />
              <input type="number" name='cvc' id='cvc' onInput={(e) => ensureNumDigits(e, 3) } ref={codeRef}/><br />
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
