import requests,bs4,sys,webbrowser


def clearFile(filename):
	a=open(filename,'w+')
	a.write('')
	a.close()
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

'''
#selecting the first a element from sample.html
arg='+'.join(sys.argv[1:])
# link="https://google.com/search?q="+"carthage+rome"
# res=requests.get(link)
# soup=bs4.BeautifulSoup(res.text,'html.parser')
link='sample.html'
res=open(link)
soup=bs4.BeautifulSoup(res,'html.parser')
print(soup.select('a')[1].text)
'''

'''
arg='+'.join(sys.argv[1:])
link="https://google.com/search?q="+arg
res=requests.get(link)
resultpage=open("results2.html","wb")
for chunk in res.iter_content(100000):
	resultpage.write(chunk)
resultpage.close()
'''




'''
#viewing a_links in a searched page and storing them in file
res=open('results2.html')
soup=bs4.BeautifulSoup(res,'html.parser')
a_links=soup.select('a')[:50]
clearFile('alinks.txt')
fin=open('alinks.txt','a+')
for i,a_link in enumerate(a_links):
	if 'www.youtube.com' not in a_link.text:
		continue
	fin.write(str(i)+': linkName: ')
	fin.write(a_link.text+"\n")
	fin.write('link url :')
	# fin.write(a_link.get('href').replace('/url?q=','').strip()+'\n')
	fin.write('https://google.com/'+a_link.get('href')+'\n')
	fin.write('*************************\n')
fin.close()
'''









