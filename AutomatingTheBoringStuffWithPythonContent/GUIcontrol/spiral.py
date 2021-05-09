import pyautogui,time

# pyautogui.PAUSE=1
# pyautogui.FAILSAFE=True
time.sleep(5)

pyautogui.click()
distance=200

while distance >0:
	pyautogui.dragRel(distance,0,duration=0.2)
	distance=distance-5
	pyautogui.dragRel(0,distance,duration=0.2)
	pyautogui.dragRel(-distance,0,duration=0.2)
	distance-=5
	pyautogui.dragRel(0,-distance,duration=0.2)

# pyautogui.scroll(-800)
