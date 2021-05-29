import PyPDF2

folderloc='EncryptedPDFHere'
def decryptFile(filename,foldername,pword):
	try:
		fileHandleToRead=open(foldername+"\\"+filename,'rb')	
	except:
		print("cant open this file")
		return "E"
	fileData=PyPDF2.PdfFileReader(fileHandleToRead)
	

	if not fileData.isEncrypted or not fileData.decrypt(pword):
		fileHandleToRead.close()
		return "AE"


	fileDataNew=PyPDF2.PdfFileWriter()

	
	for i in range(fileData.numPages):
		fileDataNew.addPage(fileData.getPage(i))
	try:		
		fileHandleToWrite=open(foldername+"\\"+filename.replace('.pdf','')+'_decrypted.pdf','wb')		
		fileDataNew.write(fileHandleToWrite)
		fileHandleToWrite.close()
		fileHandleToRead.close()
		return "S"
	except:
		fileHandleToRead.close()		
		return "E"   

nameOfPdf=input("Enter name of file:")
pword    =input("Enter password:")
roe      =decryptFile(nameOfPdf,folderloc,'kitchu')

if roe=="S":
	print("successfully decrypted with "+pword)
elif roe=="AE":
	print("already encrypted")
else:
	print("some unknown error")
