'use client';
import React, { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export function CV() {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div>
        <div className='flex justify-center mb-5 '>
        <a className='bg-slate-600 rounded-lg p-1 text-white' href="/cv.pdf" download="cv">Download CV</a>
        </div>

      <Document file="CV.pdf" onLoadSuccess={onDocumentLoadSuccess}>
      <Page pageIndex={pageNumber} 
      renderTextLayer={false}
      renderAnnotationLayer={false}
      />
      </Document>
      <div className='flex flex-row text-white'>
      <p>
        Page {pageNumber+1} of {numPages}
      </p>
      <button className=' ml-auto' onClick={() => setPageNumber((pageNumber+1)%numPages)}> next page</button>
      </div>
    </div>
  );
}