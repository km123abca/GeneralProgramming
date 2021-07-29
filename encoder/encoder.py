import sys,re,os

def encode_decode(chx,inc,encode,a,b):
	ascVal=ord(chx)
	if encode:		
		nextVal=ascVal+inc
		if nextVal > b:
			nextVal=a-1 + nextVal-(b)
	else:		
		nextVal=ascVal-inc
		if nextVal < a:
			nextVal=b+1 - (a - nextVal)
	return chr(nextVal)

def encode(chx,inc,encode):
	ascVal=ord(chx)
	if  ascVal >= 97 and ascVal <= 122:
		return encode_decode(chx,inc,encode,97,122)
	else:
		return encode_decode(chx,inc,encode,65,90)


file_name=input("enter file Name:")
opt=input("encode(y/n)?")
inc=10
fileh=None
try:
	fileh=open(file_name,"r")
except:
	print("failed")
	sys.exit()

fileo=open(file_name[:-4]+'_encoded.txt',"a+")

for line in fileh.readlines():
	emptyLine=""
	for chx in line:
		if opt=='y':
			if re.search(r'[a-zA-Z]',chx):
				emptyLine+=encode(chx,inc,True)
			else:
				emptyLine+=chx
		else:
			if re.search(r'[a-zA-Z]',chx):
				emptyLine+=encode(chx,inc,False)
			else:
				emptyLine+=chx
	fileo.write(emptyLine)

fileh.close()
fileo.close()
os.system(f'del {file_name[:-4]}.txt')
os.system(f'ren {file_name[:-4]}_encoded.txt {file_name[:-4]}.txt')




'''
for line in fileh.readlines():
	emptyLine=""
	for chx in line:
		if inc >0:
			if re.search(r'[a-yA-Y]',chx):
				emptyLine+=chr(ord(chx)+inc)
			else:
				emptyLine+=chx
		else:
			if re.search(r'[b-zB-Z]',chx):
				emptyLine+=chr(ord(chx)+inc)
			else:
				emptyLine+=chx
	fileo.write(emptyLine)
'''