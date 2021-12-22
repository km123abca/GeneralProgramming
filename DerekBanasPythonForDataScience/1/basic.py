import numpy as np 
import pandas as pd 
from pandas_datareader import data as web
import matplotlib.pyplot as plt 
import matplotlib.dates as mdates
# %matplotlib inline
import datetime as dt 
import mplfinance as mpf


def CreateFile(nm):
	fs=open(nm,"w+")
	fs.close()
def save_to_csv_from_yahoo(ticker,syear,smonth,sday,eyear,emonth,eday):
	start= dt.datetime(syear,smonth,sday)
	end= dt.datetime(eyear,emonth,eday)
	df = web.DataReader(ticker,'yahoo',start,end)
	CreateFile("./csvs/"+ticker+'.csv')
	df.to_csv("./csvs/"+ticker+'.csv')
	return df 

def get_df_from_csv(ticker):
	try:
		df=pd.read_csv("./csvs/"+ticker+'.csv')
	except FileNotFoundError:
		print("File does not exist :-(")
	else:
		return df 

def add_daily_return_to_df(df,ticker):
	df['daily_return'] = (df['Adj Close']/df['Adj Close'].shift(1))-1
	df.to_csv("./csvs/"+ticker+'.csv')
	return df

def get_return_defined_time(df,syear,smonth,sday,eyear,emonth,eday):
	start =f"{syear}-{smonth}-{sday}"
	end =f"{eyear}-{emonth}-{eday}"
	df['Date']=pd.to_datetime(df['Date'])
	mask= (df['Date'] >= start & df['Date'] <= end)
	daily_ret=df.loc[mask]['daily_return'].mean()
	df2 = df.loc[mask]
	days=df2.shape[0]
	return (days * daily_ret)


df=save_to_csv_from_yahoo('AMZN',2020,1,1,2020,12,31)
amazon_dataframe= get_df_from_csv('AMZN')
add_daily_return_to_df(amazon_dataframe,'AMZN')
x=get_return_defined_time(amazon_dataframe,2020,6,1,2020,8,1)
print(f'total return:{x}')
