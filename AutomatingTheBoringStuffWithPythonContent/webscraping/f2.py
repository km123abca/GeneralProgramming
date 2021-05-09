import requests,sys

res=requests.get('https://www.powerlifting.sport/fileadmin/ipf/data/federation/Approved__List_2019-2022_Final.pdf')

try:
	res.raise_for_status()
except Exception as aa:
	print('Following error occurred:%s'%(aa))
	sys.exit()
else:
	print('found it')

playFile=open('powerpdf.pdf','wb')
for chunk in res.iter_content(100000):
	playFile.write(chunk)
playFile.close()
