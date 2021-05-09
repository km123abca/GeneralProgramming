import time



starttime=time.time()
lasttime=starttime
lapnum=0
laptime=0
totTime=0
try:
	while True:
		input()
		lapnum+=1
		laptime=round(time.time()-lasttime,2)
		totTime=round(time.time()-starttime,2)
		lasttime=time.time()
		print('laps elapsed:%s'%(lapnum))
		print('laptime:%s'%(laptime))
		print('total time:%s'%(totTime))
except KeyboardInterrupt:
	print('\nDone')

