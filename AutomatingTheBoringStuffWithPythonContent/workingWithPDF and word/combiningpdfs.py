import PyPDF2

pdf1=open('meetingminutes.pdf','rb')
pdf2=open('powerpdf.pdf','rb')

reader_pdf1=PyPDF2.PdfFileReader(pdf1)
reader_pdf2=PyPDF2.PdfFileReader(pdf2)

pdfWriter=PyPDF2.PdfFileWriter()

for pageNum in range(reader_pdf1.numPages):
	pageObj=reader_pdf1.getPage(pageNum)
	pdfWriter.addPage(pageObj)

for pageNum in range(reader_pdf2.numPages):
	pageObj=reader_pdf2.getPage(pageNum)
	pdfWriter.addPage(pageObj)

pdfout=open('combinedpdf.pdf','wb')
pdfWriter.write(pdfout)
pdfout.close()
pdf1.close()
pdf2.close()
