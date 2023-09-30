import '../styles/css/Paginator.css';

function Paginator({
  currentPageNumber,
  setCurrentPageNumber,
  totalPages,
  loading,
}) {
  const options = [];
  for (let i = 1; i <= totalPages; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  function handleClick(actionName, e) {
    switch (actionName) {
      case 'Next':
        if (currentPageNumber < totalPages)
          setCurrentPageNumber(currentPageNumber + 1);
        break;
      case 'Previous':
        if (currentPageNumber > 1) setCurrentPageNumber(currentPageNumber - 1);
        break;
      case 'Dropdown':
        setCurrentPageNumber(parseInt(e.target.value));
        break;
      default:
        return;
    }
  }
  return (
    <div className='paginator'>
      <button
        disabled={currentPageNumber <= 1 || loading}
        onClick={() => handleClick('Previous')}
      >
        Previous
      </button>
      <select
        disabled={loading}
        name='pageDropdown'
        id='pageDropdown'
        value={currentPageNumber}
        onChange={(e) => handleClick('Dropdown', e)}
      >
        {options}
      </select>
      <button
        disabled={currentPageNumber === totalPages || loading}
        onClick={() => handleClick('Next')}
      >
        Next
      </button>
    </div>
  );
}

export default Paginator;
