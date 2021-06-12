import requests,bs4,sys,webbrowser


#Basic Step
'''
file_handle=open("websitedata.txt","w+")
res = requests.get('https://inventwithpython.com/page_that_does_not_exist')
try:
	res.raise_for_status()
except Exception as exe:
	print(f"There was a problem {exe}")
if res.status_code==requests.codes.ok:	
	file_handle.write(res.text[:10])
file_handle.close()
'''

'''
#Downloading and storing a file to disk
res = requests.get('https://automatetheboringstuff.com/files/rj.txt')
try:
	res.raise_for_status()
	playFile = open('RomeoAndJuliet.txt', 'wb')
	for chunk in res.iter_content(100000):
		playFile.write(chunk)
	playFile.close()
except Exception as exe:
	print(f"There was a problem {exe}")
'''

'''
#how to view the first div element in webpage
res=requests.get('https://nostarch.com')
try:
	res.raise_for_status()
	soup = bs4.BeautifulSoup(res.text, 'html.parser')
	print(soup.select('div')[0])
except Exception as x:
	print(f'error:{x}')
'''


'''
#how to see different attributes of an element inside soup
res=requests.get('https://nostarch.com')
try:
	res.raise_for_status()
	soup = bs4.BeautifulSoup(res.text, 'html.parser')
	print(soup.select('span')[1].get('class'))
	print(soup.select('span')[1].attrs)
except Exception as x:
	print(f'error:{x}')
'''
arg='+'.join(sys.argv[1:])
# link="https://google.com/search?q="+"carthage+rome"
# res=requests.get(link)
# soup=bs4.BeautifulSoup(res.text,'html.parser')
link='sample.html'
res=open(link)
soup=bs4.BeautifulSoup(res,'html.parser')


print(soup.select('a')[1].text)






