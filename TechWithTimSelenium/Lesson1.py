# import selenium
from selenium import webdriver
WEBDRIVERPATH='D:\\ChromeDriverLocation\\chromedriver.exe'
driver=webdriver.Chrome(WEBDRIVERPATH)
driver.get('https://techwithtim.net')
print(driver.title)

#driver.close() #closes the tab
#driver.quit() #closes the browser