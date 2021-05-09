import requests,sys,webbrowser,bs4,pyperclip


def save2drive(loc,i=1):
	res=requests.get(loc)
	locfile=open('quadra\\comic_'+str(i)+'.jpg','wb')
	for chunk in res.iter_content(100000):
		locfile.write(chunk)
	locfile.close()

baseaddr='https://xkcd.com/'
addr='http://quadra-blu.com/2011/08/01/the-hunt/'
for i in range(10):
	res=requests.get(addr)

	parsedstuff=bs4.BeautifulSoup(res.text)
	imgcontainer=parsedstuff.select('#comic-1 img')
	#print(str(imgcontainer[0]))
	imgloc=imgcontainer[0].get('src')
	save2drive(imgloc,i)
	prevlinkcont=parsedstuff.select('.comic-navi-right a')
	prevlink=prevlinkcont[1].get('href')
	#prevLink = parsedstuff.select('a[rel="prev"]')[0]  This is also OK
	addr=prevlink

	print('image ',i,' has been downloaded')


# http://quadra-blu.com/2011/08/01/the-hunt/
#http://quadra-blu.com/2011/08/04/the-hunt-pg-2/
#http://quadra-blu.com/2011/08/08/the-hunt-2/



