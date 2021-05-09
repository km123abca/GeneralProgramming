import pyautogui,time


itemlist=[]
text2type=[]

fil2read=open('stored_images\\infoabout_images.txt')
for line in fil2read.readlines():
	itemlist.append(line[0:-1].split(' ')[0])
	text2type.append(line[0:-1].split(' ')[1])

# print(itemlist)
# print(text2type)

#pyautogui.PAUSE=1
# pyautogui.FAILSAFE=True

problem_field=''


class Error(Exception):
   pass

class crashexp(Error):
   pass

time.sleep(4)

# itemlist=['chrome_button.png','addressbar_text_keypress.png','username_text.png','password_text.png','submit_button.png']
# text2type=['none','http://localhost/sqlsamplesite/login2.php','km','dobrev','none']

for i in range(len(itemlist)):
	itemlist[i]='stored_images\\'+itemlist[i]

try:
	for item1,text1 in zip(itemlist,text2type):
		waitcounter=0
		coords=None
		while coords==None:
			coords=pyautogui.locateOnScreen(item1)
			time.sleep(4)
			waitcounter+=1
			if waitcounter>4:
				break
		if coords==None:
			problem_field=item1
			raise crashexp
		cent=pyautogui.center(coords)
		pyautogui.click(cent)
		if 'text' in item1:
			pyautogui.typewrite(text1,0.25)
		if 'keypress' in item1:
			pyautogui.typewrite(['enter'])
		time.sleep(2)
except crashexp:
	print('There was a problem with '+problem_field)
except KeyboardInterrupt:
	print('\nHey You Pressed cntrl+c didn\'t you?')




