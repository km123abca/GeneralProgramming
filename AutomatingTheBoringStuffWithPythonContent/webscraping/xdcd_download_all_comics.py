import requests,sys,webbrowser,bs4,pyperclip
dbg=open('debug.txt','w+')
dbg.write('')
dbg.close()

dbg=open('debug.txt','a+')

def save2drive(loc,i=1):
	res=requests.get(loc)
	locfile=open('comics\\comic_'+str(i)+'.jpg','wb')
	for chunk in res.iter_content(100000):
		locfile.write(chunk)
	locfile.close()

baseaddr='https://xkcd.com/'
addr='https://xkcd.com/'
for i in range(3000):
	res=requests.get(addr)

	parsedstuff=bs4.BeautifulSoup(res.text)
	dbg.write(addr+"\n")
	imgcontainer=parsedstuff.select('#comic img')
	#print(str(imgcontainer[0]))

	try:
		imgloc=addr+imgcontainer[0].get('src')
		save2drive(imgloc,i)
	except:
	 	dbg.write("There was a problem getting"+addr+"\n")
	 	


	
	prevlinkcont=parsedstuff.select('.comicNav a')
	prevlink=baseaddr+prevlinkcont[1].get('href')[1:]
	#prevLink = parsedstuff.select('a[rel="prev"]')[0]  This is also OK
	addr=prevlink
	#print(addr+'\n\n')
	if(addr[len(addr)-1:]=='#'):
		break
	print('image ',i,' has been downloaded')


dbg.close()




