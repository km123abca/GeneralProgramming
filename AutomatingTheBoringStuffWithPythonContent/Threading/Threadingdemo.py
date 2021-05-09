import threading,time

def takeANap():
	time.sleep(5)
	print('woke up after a 5 minute sleep')

def takeALongNap():
	time.sleep(10)
	print('woke up after a 10 minute sleep')

def stopwatch():
	cn=0
	while True:
		time.sleep(1)
		cn+=1
		print (str(cn)+' seconds elapsed')
		if cn>10:
			break




print('Program has started')

threadObj=threading.Thread(target=takeANap)
anotherThreadObj=threading.Thread(target=takeALongNap)
yetanotherThreadObj=threading.Thread(target=stopwatch)


threadObj.start()
anotherThreadObj.start()
yetanotherThreadObj.start()