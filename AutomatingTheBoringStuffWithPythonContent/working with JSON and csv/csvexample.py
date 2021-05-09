import csv,os,re

reg=re.compile(r'^corr[0-9]{1}.csv')

firstrow=True
firstfile=True
os.makedirs('headerRemoved',exist_ok=True)
outputfilepat=os.path.join('headerRemoved','resultfile.csv')

emptylis=[]
for file_name in os.listdir('.'):
	firstrow=True
	stt=reg.findall(file_name)
	if len(stt)==0:
		continue
	print('analysed ',file_name)
	fil=(open(file_name))
	filis=list(csv.reader(fil))

	for row in filis:
		if firstrow:
			firstrow=False
			if firstfile:
				firstfile=False
			else:
				continue
		emptylis.append(row)

outputfile=open(outputfilepat,'w',newline='')
outputwriter=csv.writer(outputfile)
for row in emptylis:
	outputwriter.writerow(row)

outputfile.close()






