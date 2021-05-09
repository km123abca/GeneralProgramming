import PyPDF2
pdfFileObj1=open('firstDoc.pdf','rb')
pdfFile1Data=PyPDF2.PdfFileReader(pdfFileObj1)
pdfFileObj2=open('secondDoc.pdf','rb')
pdfFile2Data=PyPDF2.PdfFileReader(pdfFileObj2)
pdfWriter=PyPDF2.PdfFileWriter()
for n in range(pdfFile1Data.numPages):
	pdfWriter.addPage(pdfFile1Data.getPage(n))
for n in range(pdfFile2Data.numPages):
	pdfWriter.addPage(pdfFile2Data.getPage(n))
pdfOut=open('firstandsecondcombined.pdf','wb')
pdfWriter.write(pdfOut)
pdfFileObj1.close()
pdfFileObj2.close()
pdfOut.close()