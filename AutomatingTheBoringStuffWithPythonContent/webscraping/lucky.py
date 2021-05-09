import requests,sys,webbrowser,bs4,pyperclip

minimum_no_of_links_to_open=2

dbg=open('debug.txt','w+')
dbg.write('')
dbg.close()

dbg=open('debug.txt','a+')

if len(sys.argv)>1:
	address='+'.join(sys.argv[1:])
	print("The address you have given:"+address)
else:
	address=pyperclip.paste()

print('googling right now')

res=requests.get('https://google.com/search?q='+address)
dbg.write("This is the address:"+'https://google.com/search?q='+address)
try:
	res.raise_for_status()
except Exception as exc:
	print('Following error occurred:%s'%(exc))
	sys.exit()


soup=bs4.BeautifulSoup(res.text,features="html.parser")
# dbg.write(res.text)
links2open=soup.select('.r a')
dbg.write(str(len(links2open)))
#numOpen = min(5, len(links2open))

#webbrowser('https://google.com/search?q='+address)
for i in range(min(minimum_no_of_links_to_open, len(links2open))):
	print(str(links2open[i]))
	webbrowser.open('https://google.com'+links2open[i].get('href'))
	#dbg.write(links2open[i].get('href'))
	#dbg.write('\n\n\n\n')




dbg.close()