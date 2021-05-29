import PyPDF2,time
import keyboard
succeeded=False

def decryptFile(filename,foldername,pword):
	try:
		fileHandleToRead=open(foldername+"\\"+filename,'rb')	
	except:
		print("cant open this file")
		return False
	fileData=PyPDF2.PdfFileReader(fileHandleToRead)
	

	if not fileData.isEncrypted or not fileData.decrypt(pword):
		fileHandleToRead.close()
		# print("file is either not encrypted or password is wrong")
		return False


	fileDataNew=PyPDF2.PdfFileWriter()

	
	for i in range(fileData.numPages):
		fileDataNew.addPage(fileData.getPage(i))
	try:		
		fileHandleToWrite=open(foldername+"\\"+filename.replace('.pdf','')+'_decrypted.pdf','wb')		
		fileDataNew.write(fileHandleToWrite)
		fileHandleToWrite.close()
		fileHandleToRead.close()
		return True
	except:
		fileHandleToRead.close()	
		print("unexpected error at line 32")	
		return False 

def AttemptWith(candidate):
	print("attempting with "+candidate)
	if not pdfData.decrypt(candidate):
		print("unsuccesful")
	else:
		print("successfully done.................")
		succeeded=True

fileHandle=open("EncryptedPDFHere\\unknown_encrypted.pdf","rb")
fileHandle2=open("EncryptedPDFHere\\commonlyUsedPasswords.txt","r")


pdfData=PyPDF2.PdfFileReader(fileHandle)
if pdfData.isEncrypted:
	print("file is encrypted")
else:
	print("file is not encrypted")
	exit()

for line in fileHandle2.readlines():
	if keyboard.is_pressed('q'):
		print("forced break")
		break
	if decryptFile("unknown_encrypted.pdf","EncryptedPDFHere",line.replace('\n','')):
		print("successfully decrypted")
		break
	else:
		print(line.replace('\n','')+" did not work")
	time.sleep(1)




		





fileHandle.close()
fileHandle2.close()
