import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const JML_Resume = require('./JML_Resume.pdf')


export default function Resume() {

    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
 
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

    return (
        <>
        <h1 className='display-3'>Resumé</h1>
        <Container>
            <ResponsiveEmbed>
                <Document file='./JML_Resume.pdf'>
                    <Page pageNumber={1} />
                </Document>
        </ResponsiveEmbed>
        </Container>
        </>
    )
}