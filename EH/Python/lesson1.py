import re
'''
sentence="hello people"
print(re.match(r".*",sentence))
'''
sentence="2 hello king khan#ronny has a tiger"
print(re.search(r"[a-z]+",sentence))
print(re.match(r"[a-z]+",sentence))

'''
print("here is match")
res=re.match(r"[a-z\s]*","2 hello king khan#ronny has a tiger")
if res:
	print(res)

print("and here is search")
res=re.search(r"[a-z\s]*","2 hello king khan#ronny has a tiger")
if res:
	print(res)
'''
