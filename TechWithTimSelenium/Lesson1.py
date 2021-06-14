# import selenium
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

def w2file(txt):
	fil=open('filecontent.txt','w+')
	fil.write(txt)
	fil.close();

	

WEBDRIVERPATH='D:\\ChromeDriverLocation\\chromedriver.exe'
driver=webdriver.Chrome(WEBDRIVERPATH)
driver.get('https://techwithtim.net')
search= driver.find_element_by_name("s")
search.send_keys("test") #type in test
search.send_keys(Keys.RETURN) #press enter

try:
	main=WebDriverWait(driver,10).until(EC.presence_of_element_located((By.ID,"main")))
except:
	driver.quit()

w2file(main.text)

time.sleep(5)
#driver.close() #closes the tab
driver.quit() #closes the browser