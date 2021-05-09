import requests,sys,webbrowser,bs4,pyperclip,time,threading



def save2drive(loc,i=1):
	res=requests.get(loc)
	locfile=open('comics\\comic_'+str(i)+'.jpg','wb')
	for chunk in res.iter_content(100000):
		locfile.write(chunk)
	locfile.close()



def downloadstuff():
	try:
		global addr
		global baseaddr
		global seconds
		global lastKnownlislength
		global tobe_downloaded	
		while True:
			lengthnow=len(tobe_downloaded)
			if lengthnow>lastKnownlislength:
				for i in range(lastKnownlislength,lengthnow):
					save2drive(tobe_downloaded[i],i)
					print('image ',i,' has been downloaded')
			lastKnownlislength=lengthnow
			time.sleep(1)
	except KeyboardInterrupt:
		#print('Program ended,'+str(seconds)+' seconds elapsed')
		print('done')

def goToPagesAndCollectInfo():
	try:
		global addr
		global baseaddr
		global seconds
		global lastKnownlislength
		global tobe_downloaded
		for i in range(3000):
			res=requests.get(addr)

			parsedstuff=bs4.BeautifulSoup(res.text)
			imgcontainer=parsedstuff.select('#comic img')
			#print(str(imgcontainer[0]))
			imgloc=addr+imgcontainer[0].get('src')
			#save2drive(imgloc,i)
			tobe_downloaded.append(imgloc)

			prevlinkcont=parsedstuff.select('.comicNav a')
			prevlink=baseaddr+prevlinkcont[1].get('href')[1:]
			#prevLink = parsedstuff.select('a[rel="prev"]')[0]  This is also OK
			addr=prevlink
			#print(addr+'\n\n')
			if(addr[len(addr)-1:]=='#'):
				break
	except KeyboardInterrupt:
		'''
		debugfile=open('deb.txt','a+')
		for elem in tobe_downloaded:
			debugfile.write(elem+'\n')
		debugfile.close()
		'''
		#print('Program ended,'+str(seconds)+' seconds elapsed')
		print('done')

def timmer():
	try:
		global seconds
		while True:
			time.sleep(1)
			seconds+=1
	except KeyboardInterrupt:
		print('Program ended,'+str(seconds)+' seconds elapsed')


tobe_downloaded=[]
lastKnownlislength=0
seconds=0
baseaddr='https://xkcd.com/'
addr='https://xkcd.com/'		
try:
	t1=threading.Thread(target=goToPagesAndCollectInfo)
	t2=threading.Thread(target=downloadstuff)
	t3=threading.Thread(target=timmer)

	t1.start()
	t2.start()
	t3.start()
except KeyboardInterrupt:
	print('Program ended,'+str(seconds)+' seconds elapsed')





