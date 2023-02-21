import { useRef, useEffect, useState } from 'react';
import '../styles/creditCardStyles.scss'

function CreditCard({ cardNumber, cardSecurityCode }) {
    let templateString = "0000 0000 0000 0000"
    const [parsedCardNumber, setParsedCardNumber] = useState("0000 0000 0000 0000")
    useEffect(() => {
        if (!cardNumber) return
        setParsedCardNumber((current) => {
            let temp = current[cardNumber.length - 1]
            console.log()
            if (temp !== "0") {
                return cardNumber.slice(0, cardNumber.length) + " " + current.slice(cardNumber.length-1,current.length)
            } else {
                return cardNumber.slice(0, cardNumber.length) + current.slice(cardNumber.length-1,current.length)
            }
            return current
        })

    }, [cardNumber])
    

    return (
        <div className='creditCardContainer'>
            <div className='creditCardWrapper'>
                <div className="frontSide">
                    <div className='shapes'>
                        <div className='circle-1'></div>
                        <div className='circle-2'></div>
                    </div>
                    <p className='cardNumber'>{parsedCardNumber||templateString}</p>
                    <p className='name'>Jane Appleseed</p>
                    <p className='expirationDate'>00/00</p>
                </div>
                <div className="backSide">
                    <p className='securityCode'>000</p>
                </div>
            </div>
        </div>
    )
}

export default CreditCard;