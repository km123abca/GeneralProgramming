from PIL import ImageColor
from PIL import Image
import os,re
output_location="D:\\Onedrive\\Work_12aug2018FromDesktopPC\\automate_the_boring_stuff_with_Python\\image_manip\\watermarked_images"
images_location='D:\\Onedrive\\Work_12aug2018FromDesktopPC\\automate_the_boring_stuff_with_Python\\image_manip\\outputfolder'
reg=re.compile(r'.*(\.png|\.jpg)$')


os.chdir(images_location)
wm_image=Image.open('catlogo.png')
wm_image=wm_image.resize((100,100))
count=0
for elem in os.listdir('.'):
	os.chdir(images_location)
	if elem=='catlogo.png':
		continue
	if not(reg.match(elem)):
		continue
	temp_image=Image.open(elem)
	width,height=temp_image.size
	strr=''
	if width>300:
		print("width is greater than 300 pixels")
		strr='also'
	if height>300:
		print("height is "+strr +" greater than 300 pixels")
	#temp_image=temp_image.resize((300,300))
	temp_image.paste(wm_image,(width-150,height-260),wm_image)

	os.chdir(output_location)
	count+=1
	temp_image.save(str('image'+str(count)+'.png'))



