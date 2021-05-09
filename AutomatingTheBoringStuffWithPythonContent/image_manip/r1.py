import re


reg=re.compile(r'.*(\.png|\.jpg)$')

inp=input('value:')

if reg.match(inp):
	print('matched')
else:
	print('not matched')