import '../styles/css/InvoiceDropdownMenu.css';

export const InvoiceDropdownMenu = (data) => {
  return (
    <div className='invoiceDropdownMenu hidden'>
      <ul>
        <li>View</li>
        <li>Edit</li>
        <li className='invoiceDropdownMenu_deleteOption'>Delete</li>
      </ul>
    </div>
  );
};
