const resumebutton = document.getElementById('resumebtn')

resumebutton.addEventListener('click',() => {

    const pdfurl = './assets/resume/ShubhamVanani_Resume.pdf';

    var link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'document.pdf';

    // Append the anchor to the body (required for Firefox)
    document.body.appendChild(link);

    // Programmatically click the anchor to trigger the download
    link.click();

    // Remove the anchor from the body
    document.body.removeChild(link);
});
