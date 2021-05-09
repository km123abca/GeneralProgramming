from pyautogui import *
import pyautogui
import time
import keyboard
import random
import win32api,win32con


time.sleep(2)
def click(x,y):
	win32api.SetCursorPos((x,y))
	win32api.mouse_event(win32con.MOUSEEVENTF_LEFTDOWN,0,0)
	time.sleep(0.01)
	win32api.mouse_event(win32con.MOUSEEVENTF_LEFTUP,0,0)


'''
How to take a screen shot
im1=pyautogui.screenshot(region=(0,0,500,600))  #0,0 is the starting position 500,600 are x and y coordinates
im1.save(r"F:\\gitClones\\PythonBots\\ss.png")
'''

