import os,PyPDF2
count=0
def DoIt():
	for folName,subFolNames,fileNames in os.walk('RootFolder'):
		for fileName in fileNames:
			if fileName.endswith('.pdf'):
				try:
					if decryptFile(folName,fileName):
						os.system('del '+folName+'\\'+fileName)
				except:
					print(fileName+" failed")

				# print('####')
				# print(folName+fileName)
				# print('del '+folName+'\\'+fileName)
				# print('###########')


def encryptFile(folderName,fileName):
	# print('folderName:'+folderName)
	# print('fileName:'+fileName)	
	filer=open(folderName+'\\'+fileName,'rb')
	fileReadObj=PyPDF2.PdfFileReader(filer)
	if fileReadObj.isEncrypted:
		print(fileName+' is encrypted ')		
		filer.close()
		return False
	else:
		filew=open(folderName+'\\'+fileName[:-4]+'_encrypted.pdf','wb')
		fileWriteObj=PyPDF2.PdfFileWriter()
		for n in range(fileReadObj.numPages):
			fileWriteObj.addPage(fileReadObj.getPage(n))
		fileWriteObj.encrypt('kitchu')
		fileWriteObj.write(filew)
		filew.close()
		filer.close()
		return True

def decryptFile(folderName,fileName):
	# print('folderName:'+folderName)
	# print('fileName:'+fileName)	
	filer=open(folderName+'\\'+fileName,'rb')
	fileReadObj=PyPDF2.PdfFileReader(filer)
	if not fileReadObj.isEncrypted:
		print(fileName+' is not encrypted ')		
		filer.close()
		return False
	else:
		filew=open(folderName+'\\'+fileName[:-14]+'.pdf','wb')
		fileWriteObj=PyPDF2.PdfFileWriter()
		fileReadObj.decrypt('kitchu')
		for n in range(fileReadObj.numPages):
			fileWriteObj.addPage(fileReadObj.getPage(n))
		# fileWriteObj.encrypt('kitchu')
		fileWriteObj.write(filew)
		filew.close()
		filer.close()
		return True

DoIt()