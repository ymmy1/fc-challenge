import React, { useState, useEffect } from 'react';

import InvoiceCard from './InvoiceCard';
import Paginator from './Paginator';
import * as DEFAULT from './defaults';

function InvoiceTable() {
  const [invoices, setInvoices] = useState(DEFAULT.INVOICES);
  const [loading, setLoading] = useState(DEFAULT.LOADING);
  const [totalPages, setTotalPages] = useState(DEFAULT.TOTAL_PAGES);
  const [perPage, setPerPage] = useState(DEFAULT.PER_PAGE);
  const [currentPageNumber, setCurrentPageNumber] = useState(
    DEFAULT.CURRENT_PAGE_NUMBER
  );

  const apiUrl = new URL('https://reqres.in/api/users');
  apiUrl.searchParams.set('page', currentPageNumber);

  function fetchAPI() {
    setLoading((prev) => !prev);

    fetch(apiUrl) // could also be done with axios
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
        setInvoices(jsonData);
        setTotalPages(jsonData.total_pages);
        setPerPage(jsonData.per_page);
        setLoading((prev) => !prev);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }

  useEffect(() => {
    fetchAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPageNumber]);

  return (
    <>
      {loading ? <h1>LOADING API</h1> : <p>{JSON.stringify(invoices.data)}</p>}
      <InvoiceCard />
      <Paginator
        currentPageNumber={currentPageNumber}
        setCurrentPageNumber={setCurrentPageNumber}
        totalPages={totalPages}
        loading={loading}
      />
    </>
  );
}

export default InvoiceTable;
