import PyPDF2

folderloc='EncryptedPDFHere'
def encryptFile(filename,foldername,pword):
	try:
		fileHandleToRead=open(foldername+"\\"+filename,'rb')	
	except:
		print("cant open this file")
		return "E"
	fileData=PyPDF2.PdfFileReader(fileHandleToRead)
	

	if fileData.isEncrypted:
		return "AE"

	fileDataNew=PyPDF2.PdfFileWriter()

	
	for i in range(fileData.numPages):
		fileDataNew.addPage(fileData.getPage(i))
	try:		
		fileDataNew.encrypt(pword)
		fileHandleToWrite=open(foldername+"\\"+filename.replace('.pdf','')+'_encrypted.pdf','wb')		
		fileDataNew.write(fileHandleToWrite)
		fileHandleToWrite.close()
		fileHandleToRead.close()
		return "S"
	except:
		fileHandleToRead.close()		
		return "E"   

nameOfPdf=input("Enter name of file:")
pword    =input("Enter password:")
roe      =encryptFile(nameOfPdf,folderloc,'kitchu')

if roe=="S":
	print("successfully encrypted with "+pword)
elif roe=="AE":
	print("already encrypted")
else:
	print("some unknown error")
