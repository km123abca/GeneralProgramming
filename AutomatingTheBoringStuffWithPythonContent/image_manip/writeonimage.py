import os
from PIL import Image,ImageDraw,ImageFont


output_location="D:\\Onedrive\\Work_12aug2018FromDesktopPC\\automate_the_boring_stuff_with_Python\\image_manip\\watermarked_images"
images_location='D:\\Onedrive\\Work_12aug2018FromDesktopPC\\automate_the_boring_stuff_with_Python\\image_manip\\outputfolder'

os.chdir(images_location)

im=Image.open('for.jpg')
draw=ImageDraw.Draw(im)

fontsFolder='C:\\Windows\\Fonts'

arialFont=ImageFont.truetype(os.path.join(fontsFolder,'arial.ttf'),32)

draw.text((100,150),'This is a beautiful forest',fill='black',font=arialFont)

os.chdir(output_location)

im.save('tamperedForest.png')