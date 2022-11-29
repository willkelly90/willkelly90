/**
 * Esta función compara el contenido del PDF y el excel.
 * @param {*} pdf 
 * @param {*} excel 
 */
function compareContent(pdf, excel) {
    pdf = pdf ?? "";
    excel = excel ?? "";
    
    
    var retorno = [];

    pdf = String(pdf.match(/[Tt]{1} *[Cc]{1} *\-? *[0-9]{2} *\-? *[0-9]{4} *\-? *[0-9]{4}/g));
    console.log("pdf after regex: ",pdf)
    pdf = pdf.split(",");
    var pdfString = pdf.join(" ");

    excel = String(excel.match(/[Tt]{1} *[Cc]{1} *\-? *[0-9]{2} *\-? *[0-9]{4} *\-? *[0-9]{4}/g));
    console.log("excel after regex: ",excel)
    excel = excel.split(",");
    var excelString = excel.join(" ");

    for (let i in pdf) {
        excelString = excelString.replace(pdf[i].trim(), "");
    }

    for (let i in excel) {
        pdfString = pdfString.replace(excel[i].trim(), "");
    }
    retorno.push("<hr>");
    retorno.push("<p style='font-weight:bold'>Elements not found in AGENDA (Database):</p> <br>" + pdfString.replace(/\,+/g, " ").replace(/\ +/g, "<br>"));
    retorno.push("<hr>");
    retorno.push("<p style='font-weight:bold'>Elements not found in ACTA (Excel):</p> <br>" + excelString.replace(/\,+/g, " ").replace(/\ +/g, "<br>"));

    return retorno;
}
