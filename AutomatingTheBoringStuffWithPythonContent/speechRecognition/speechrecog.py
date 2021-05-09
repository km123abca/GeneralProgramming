import speech_recognition as sr,os,subprocess
r=sr.Recognizer()
text=''
with sr.Microphone() as source:
	print('Say something:')
	audio=r.listen(source)

	try:
		text=r.recognize_google(audio)
		print('You said:{}'.format(text))
	except:
		print('Sorry brah')

if text=="open Chrome":
	subprocess.Popen("C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe")



