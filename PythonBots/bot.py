from pyautogui import *
import pyautogui
import time
import keyboard
import random
import win32api,win32con

#363 425 480 536     300
msgGiven=False
# pixelPosX=[363,425,480,536]
pixelPosX=[542,627,709,799]
y=360
def click(x,y):
	win32api.SetCursorPos((x,y))
	win32api.mouse_event(win32con.MOUSEEVENTF_LEFTDOWN,0,0)
	time.sleep(0.01)
	win32api.mouse_event(win32con.MOUSEEVENTF_LEFTUP,0,0)


while keyboard.is_pressed('a')==False: 
	if not msgGiven:
		print("waiting.....")
	msgGiven=True
while keyboard.is_pressed('q')==False:

	for x in pixelPosX:
		if pyautogui.pixel(x,y)[0]==0:
			click(x,y)

print("stopped")
