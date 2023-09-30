import './styles/css/App.css';
import InvoiceTable from './components/InvoiceTable';

function App() {
  return (
    <div id='App' className='App'>
      <header className='app_header'>
        <h1>Monthly Bookkeeping</h1>
        <p>List of paid and outstanding invoices</p>
      </header>
      <main className='app_main'>
        <InvoiceTable />
      </main>
    </div>
  );
}

export default App;
