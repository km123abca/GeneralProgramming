import PyPDF2
file1=open('firstandsecondcombined.pdf','rb')
file2=open('watermark.pdf','rb')
file3=open('firstandsecondcombined_watermarked.pdf','wb')

fileObj1=PyPDF2.PdfFileReader(file1)
fileObj2=PyPDF2.PdfFileReader(file2)

fileObj3=PyPDF2.PdfFileWriter()

for n in range(fileObj1.numPages):
	fileObj1.getPage(n).mergePage(fileObj2.getPage(0))
	fileObj3.addPage(fileObj1.getPage(n))

fileObj3.encrypt('data')
fileObj3.write(file3)


file3.close()
file2.close()
file1.close()
