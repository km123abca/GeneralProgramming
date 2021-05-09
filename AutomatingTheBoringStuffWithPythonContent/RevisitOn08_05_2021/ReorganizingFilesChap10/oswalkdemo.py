import os
for folName,subFolNames,fileNames in os.walk('RootFolder'):
	print("We are presently in "+folName)
	for subFolName in subFolNames:
		print("subfolder, "+subFolName+" of "+folName)
	for fileName in fileNames:
		print("file:"+fileName+" inside "+folName)