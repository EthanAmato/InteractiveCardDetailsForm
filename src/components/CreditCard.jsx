import { useRef } from 'react';
import '../styles/creditCardStyles.scss'

function CreditCard({ cardNumber, cardSecurityCode }) {
    const cardNumberRef = useRef()
    const cardSecurityRef = useRef()
    return (
        <div className='creditCardContainer'>
            <div className='creditCardWrapper'>
                <div className="frontSide">
                    <div className='shapes'>
                        <div className='circle-1'></div>
                        <div className='circle-2'></div>
                    </div>
                    <p className='cardNumber'>0000 0000 0000 0000</p>
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