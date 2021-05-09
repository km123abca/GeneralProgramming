import PyPDF2,os


pdffiles=[]
for filename in os.listdir('./pdfs'):
	if filename.endswith('.pdf'):
		pdffiles.append(filename)
pdffiles.sort(key=str.lower)

writer=PyPDF2.PdfFileWriter()
starter=True
for elem in pdffiles:
	reader=PyPDF2.PdfFileReader(open('pdfs/'+elem,'rb'))
	for pagenum in range(reader.numPages):
		if starter:
			starter=False
			writer.addPage(reader.getPage(pagenum))
		else:
			if pagenum==0:
				continue
			writer.addPage(reader.getPage(pagenum))
	
pdfout=open('./pdfs/pdfcombined.pdf','wb')
writer.encrypt('sonja')
writer.write(pdfout)
pdfout.close()
