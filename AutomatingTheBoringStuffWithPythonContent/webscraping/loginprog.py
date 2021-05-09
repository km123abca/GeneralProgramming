import requests,bs4


url='http://localhost/sqlsamplesite/login2.php'
url='http://localhost/sqlsamplesite/index.php'

username='km'
password='dobrev'


resp=requests.post(url,allow_redirects=True,data={"username":username,"password":password})
res=requests.get(url)
parsedstuff=bs4.BeautifulSoup(res.text)
print(resp.text)


'''
print('I tried with username:'+username+' and password:'+password)
print('This is the response we got')
print(resp.content);
'''




