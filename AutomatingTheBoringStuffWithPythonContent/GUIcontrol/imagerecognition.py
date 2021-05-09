import pyautogui,time


# pyautogui.PAUSE=1
# pyautogui.FAILSAFE=True

# time.sleep(4)

# coords=pyautogui.locateOnScreen('submit.png')
# center_of_cords=pyautogui.center(coords)
# pyautogui.click(center_of_cords)



class Error(Exception):
   """Base class for other exceptions"""
   pass

class nontyp(Error):
   """Raised when the input value is too small"""
   
   pass

time.sleep(4)
lis1=['usernametext.png','passwordtext.png']
lis2=['km','dobrev']
try:
	for field,val in zip(lis1,lis2): 
		coordsuser=pyautogui.locateOnScreen(field)
		if coordsuser==None:
			a=input(field+' was not found')
			raise nontyp
		center_of_cords=pyautogui.center(coordsuser)
		pyautogui.click(center_of_cords)
		#pyautogui.typewrite(val)
		pyautogui.typewrite(val,2)
		time.sleep(1)
	coords=pyautogui.locateOnScreen('submitbutton.png')
	center_of_cords=pyautogui.center(coords)
	pyautogui.click(center_of_cords)

except nontyp:
	print('something happened')


pyautogui.typewrite(['a', 'b', 'left', 'left', 'X', 'Y','enter'])




