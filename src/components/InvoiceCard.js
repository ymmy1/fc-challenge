import '../styles/css/InvoiceCard.css';
import defaultUserSrc from '../assets/defaultUser.png';
import { useState, useEffect } from 'react';

import { InvoiceDropdownMenu } from './InvoiceDropdownMenu';

import {
  randomInvoiceStatus,
  randomInvoiceAmount,
  randomInvoiceDate,
} from './lib/customRandom';

function InvoiceCard({ invoice, loading }) {
  console.log(invoice);

  const [rInvoiceStatus, setRInvoiceStatus] = useState(null);
  const [rInvoiceAmount, setRInvoiceAmount] = useState(null);
  const [rInvoiceDate, setRInvoiceDate] = useState(null);

  useEffect(() => {
    randomInvoiceStatus(setRInvoiceStatus);
    randomInvoiceAmount(setRInvoiceAmount);
    randomInvoiceDate(setRInvoiceDate);
  }, [invoice]);

  return (
    <>
      <div className={`invoiceCard ${loading ? 'loading' : ''}`}>
        <header>
          <img
            src={invoice.avatar && !loading ? invoice.avatar : defaultUserSrc}
            alt={invoice.email}
            className='user_picture'
          />
          <h4 className='username'>
            {invoice.first_name} {invoice.last_name}
          </h4>
          <p className='settings'>
            ⋯
            <InvoiceDropdownMenu />
          </p>
        </header>
        <main>
          <div className='invoice_row'>
            <span>Last invoice</span>
            <span>{rInvoiceDate}</span>
          </div>
          <hr />
          <div className='invoice_row'>
            <span>Amount</span>
            <span className='amountUSD'>
              {rInvoiceAmount}

              <b className={`status ${rInvoiceStatus?.toLowerCase()}`}>
                {rInvoiceStatus}
              </b>
            </span>
          </div>
        </main>
      </div>
    </>
  );
}

export default InvoiceCard;
