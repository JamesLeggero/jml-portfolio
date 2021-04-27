import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import {Document, Page, pdfjs} from "react-pdf";
import JML_Resume from './JML_Resume_UL.pdf'


pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function Resume() {

  //   const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);
 
  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }

    return (
      <>
      <h1 className='display-3'>Resumé</h1>
        <div className='res-container'>
        <embed src={JML_Resume} alt='JML Resumé' />

        

          {/* <iframe src={JML_Resume} title='JML_Resume' /> */}
       
        
        </div>
        </>
    )
}