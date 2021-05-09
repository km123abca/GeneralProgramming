import pyautogui


pyautogui.PAUSE=1
pyautogui.FAILSAFE=True

# width,height=pyautogui.size()

# for i in range(10):
# 	pyautogui.moveTo(100, 100, duration=0.25)
# 	pyautogui.moveTo(200, 100, duration=0.25)
# 	pyautogui.moveTo(200, 200, duration=0.25)
# 	pyautogui.moveTo(100, 200, duration=0.25)



# for i in range(2):
# 	pyautogui.moveRel(100, 0, duration=0.25)
# 	pyautogui.moveRel(0, 100, duration=0.25)
# 	pyautogui.moveRel(-100, 0, duration=0.25)
# 	pyautogui.moveRel(0, -100, duration=0.25)


# posx,posy=pyautogui.position()

# print('currently at:',posx,',',posy)



# try:
# 	while True:
# 		x,y=pyautogui.position()
# 		positionStr = 'X: ' + str(x).rjust(4) + ' Y: ' + str(y).rjust(4)
# 		print(positionStr, end='')
# 		print('\b' * len(positionStr), end='', flush=True)

# except KeyboardInterrupt:
# 	print('\nDone')


try:
	while True:
		x,y=pyautogui.position()
		positionStr = 'X: ' + str(x).rjust(4) + ' Y: ' + str(y).rjust(4)
		#print(positionStr, end='')
		

		pixelColor = pyautogui.screenshot().getpixel((x, y))
		positionStr += ' RGB: (' + str(pixelColor[0]).rjust(3)
		positionStr += ', ' + str(pixelColor[1]).rjust(3)
		positionStr += ', ' + str(pixelColor[2]).rjust(3) + ')'
		print(positionStr, end='')
		print('\b' * len(positionStr), end='', flush=True)

except KeyboardInterrupt:
	print('\nDone')