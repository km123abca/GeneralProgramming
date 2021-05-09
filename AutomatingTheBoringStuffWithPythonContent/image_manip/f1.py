from PIL import ImageColor
from PIL import Image
import os
def pr(strr):
	lm=input(strr+' ok?')


# pr('lets see red')
# a=ImageColor.getcolor('red','RGBA')
# print(a)
# pr('lets see CornflowerBlue')
# a=ImageColor.getcolor('CornflowerBlue', 'RGBA')
# print(a)
# pr('lets see chocolate')
# ImageColor.getcolor('chocolate', 'RGBA')
# print(a)



# os.chdir('D:\\Onedrive\\Work_12aug2018FromDesktopPC\\automate_the_boring_stuff_with_Python\\image_manip\\files')
# catIm=Image.open('zophie.png')

# feature_list=[]
# width, height = catIm.size
# feature_list.append('width:'+str(width))
# feature_list.append('height:'+str(height))
# feature_list.append('filename:'+str(catIm.filename))
# feature_list.append('format:'+str(catIm.format))
# feature_list.append('format description:'+str(catIm.format_description))
# catIm.save('zophie2.jpg')
# for elem in feature_list:
# 	print(elem)



# os.chdir('D:\\Onedrive\\Work_12aug2018FromDesktopPC\\automate_the_boring_stuff_with_Python\\image_manip\\files')
# im=Image.new('RGBA',(100,200),'purple')
# im.save('purpleImage.png')



# os.chdir('D:\\Onedrive\\Work_12aug2018FromDesktopPC\\automate_the_boring_stuff_with_Python\\image_manip\\files')
# im2 = Image.new('RGBA', (20, 20))
# im2.save('transparentImage.png')



# os.chdir('D:\\Onedrive\\Work_12aug2018FromDesktopPC\\automate_the_boring_stuff_with_Python\\image_manip\\files')
# catIm=Image.open('zophie.png')
# croppedIm = catIm.crop((335, 345, 565, 560))
# croppedIm.save('cropped.png')
# catCopyIm = catIm.copy()



# os.chdir('D:\\Onedrive\\Work_12aug2018FromDesktopPC\\automate_the_boring_stuff_with_Python\\image_manip\\files')
# catIm=Image.open('zophie.png')
# faceIm = catIm.crop((335, 345, 565, 560))
# catCopyIm = catIm.copy()
# catCopyIm.paste(faceIm, (0, 0))
# catCopyIm.paste(faceIm, (400, 500))
# catCopyIm.save('pasted.png')



# os.chdir('D:\\Onedrive\\Work_12aug2018FromDesktopPC\\automate_the_boring_stuff_with_Python\\image_manip\\files')
# catIm=Image.open('zophie.png')
# width, height = catIm.size
# quartersizedIm = catIm.resize((int(width / 2), int(height / 2)))
# quartersizedIm.save('quartersized.png')
# catIm.rotate(180).save('rotated180.png')
# catIm.rotate(6, expand=True).save('rotated6_expanded.png')
# catIm.transpose(Image.FLIP_LEFT_RIGHT).save('horizontal_flip.png')
# catIm.transpose(Image.FLIP_TOP_BOTTOM).save('vertical_flip.png')




# im = Image.new('RGBA', (100, 100))
# for x in range(100):
# 	for y in range(50):
# 		im.putpixel((x, y), (210, 210, 210))

# for x in range(100):
# 	for y in range(50, 100):
# 		im.putpixel((x, y), ImageColor.getcolor('darkgray', 'RGBA'))
# print(im.getpixel((0, 50)))
# im.save('putPixel.png')




