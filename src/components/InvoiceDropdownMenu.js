import '../styles/css/InvoiceDropdownMenu.css';

export const InvoiceDropdownMenu = ({ dropdownData }) => {
  const handleClick = () => {
    alert(`Users email: ${dropdownData}`);
  };
  return (
    <div
      className={`invoiceDropdownMenu ${dropdownData.length ? '' : 'hidden'}`}
    >
      <ul>
        <li
          onClick={() => {
            handleClick();
          }}
        >
          View
        </li>
        <li
          onClick={() => {
            handleClick();
          }}
        >
          Edit
        </li>
        <li
          onClick={() => {
            handleClick();
          }}
          className='invoiceDropdownMenu_deleteOption'
        >
          Delete
        </li>
      </ul>
    </div>
  );
};
