import { useRef, useEffect, useState } from 'react';
import '../styles/creditCardStyles.scss'

function CreditCard({ cardNumber, cardSecurityCode, name, expMonth, expYear }) {
    const [parsedCardNumber, setParsedCardNumber] = useState("0000 0000 0000 0000")
    const [parsedCVC, setParsedCVC] = useState("000")

    function formatCVC(input) {
        const MAX_LENGTH = 3; // Maximum length of a credit card number
        let digitsOnly = input.replace(/\D/g, ''); // Remove all non-digit characters
        let formatted = '' 
        digitsOnly = digitsOnly.padEnd(MAX_LENGTH, '0');
        for (let i = 0; i < MAX_LENGTH; i++) {
            formatted += digitsOnly.charAt(i);
          }
        return formatted;
    }

    function formatCreditCardNumber(input) {
        const MAX_LENGTH = 16; // Maximum length of a credit card number
        let digitsOnly = input.replace(/\D/g, ''); // Remove all non-digit characters
        let formatted = ''; // Initialize the formatted string
        
        // Pad the input with leading zeros up to the maximum length
        digitsOnly = digitsOnly.padEnd(MAX_LENGTH, '0');
        
        // Insert spaces every 4 digits
        for (let i = 0; i < MAX_LENGTH; i++) {
          if (i > 0 && i % 4 === 0) {
            formatted += ' ';
          }
          formatted += digitsOnly.charAt(i);
        }
        
        return formatted;
      }
      
    useEffect(() => {
        if (!cardNumber) return
        setParsedCardNumber(() => formatCreditCardNumber(cardNumber))
        // setParsedCVC(()=> formatCVC(cardSecurityCode))
    }, [cardNumber])
    useEffect(() => {
        if (!cardSecurityCode) return
        setParsedCVC(() => formatCVC(cardSecurityCode))
        // setParsedCVC(()=> formatCVC(cardSecurityCode))
    }, [cardSecurityCode])
    

    return (
        <div className='creditCardContainer'>
            <div className='creditCardWrapper'>
                <div className="frontSide">
                    <div className='shapes'>
                        <div className='circle-1'></div>
                        <div className='circle-2'></div>
                    </div>
                    <p className='cardNumber'>{parsedCardNumber||templateString}</p>
                    <p className='name'>{name||"Jane Appleseed"}</p>
                    <p className='expirationDate'>{(expMonth||"00") + "/" + (expYear||"00")}</p>
                </div>
                <div className="backSide">
                    <p className='securityCode'>{parsedCVC}</p>
                </div>
            </div>
        </div>
    )
}

export default CreditCard;