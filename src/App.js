import './styles/css/App.css';
import InvoiceTable from './components/InvoiceTable';

function App() {
  return (
    <div className='App'>
      <header>
        <h1>Monthly Bookkeeping</h1>
        <p>List of paid and outstanding invoices</p>
      </header>
      <main>
        <InvoiceTable />
      </main>
    </div>
  );
}

export default App;
