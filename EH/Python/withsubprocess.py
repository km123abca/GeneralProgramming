import subprocess,smtplib

def send_mail(email,password,message):
	server=smtplib.SMTP("smtp.gmail.com",587)
	server.starttls()
	server.login(email,password)
	server.sendmail(email,password,message)
	server.quit()

subprocess.Popen("dir /b",shell=True)