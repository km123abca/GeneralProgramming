import imapclient
import pyzmail
imapObj= imapclient.IMAPClient('imap.gmail.com',ssl=True)
imapObj.login('zack.kane19@gmail.com','1234abcdA')
imapObj.select_folder('INBOX',readonly=True)
UIDs=imapObj.search('ALL')
for uid in UIDs:
	print(uid)

go_on=True
while go_on:
	go_on=False
	try:
		sel_uid=input('choose one of them:')
		rawMessages = imapObj.fetch([sel_uid], ['BODY[]', 'FLAGS'])
		message = pyzmail.PyzMessage.factory(rawMessages[sel_uid]['BODY[]'])
	except:
		print('There was a problem')
		go_on=True
		pass
