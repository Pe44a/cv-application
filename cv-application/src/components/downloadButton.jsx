import jsPDF from 'jspdf';

function DownloadButton() {

  const generatePDF  = () => {
    const report = new jsPDF('portrait', 'pt', 'a4');
    report.html(document.querySelector('.cv')).then(() => {
      report.save('cv.pdf');
    })
    .catch((error) => {
        console.error(error);
    })
  };

  return (
    <button id='downloadButton' onClick={generatePDF}>Download as PDF</button>
  );
}

export default DownloadButton;

