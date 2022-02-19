import cv2
import numpy as np 
import pyautogui
import time
SCREEN_SIZE=(1920,1080)
fourcc=cv2.VideoWriter_fourcc(*"XVID")
out=cv2.VideoWriter("output.avi",fourcc,20.0,(SCREEN_SIZE))
startTime=time.time()
while True:
	img=pyautogui.screenshot()
	frame=np.array(img)
	frame=cv2.cvtColor(frame,cv2.COLOR_BGR2RGB)
	out.write(frame)	
	# if cv2.waitKey(1) != 1:
	# 	print(f'{cv2.waitKey(1)} was pressed')	
	keypress= cv2.waitKey(1)
	if keypress & 0xFF ==ord("q"):
		break
	if time.time() - startTime > 60:
		break
cv2.destroyAllWindows()
out.release()