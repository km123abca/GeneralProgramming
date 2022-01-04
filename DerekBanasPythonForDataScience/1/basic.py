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
	# start= dt.datetime(syear,smonth,sday)
	# end= dt.datetime(eyear,emonth,eday)
	# df['Date']=pd.to_datetime(df['Date'])	
	mask= ( (df['Date'] >= start) & (df['Date'] <= end) )
	daily_ret=df.loc[mask]['daily_return'].mean()
	df2 = df.loc[mask]
	# print(df2)
	days=df2.shape[0]
	return (days * daily_ret)

def mplfinance_plot(ticker,chart_type,syear,smonth,sday,eyear,emonth,eday):
	start =f"{syear}-{smonth}-{sday}"
	end =f"{eyear}-{emonth}-{eday}"	
	df=get_df_from_csv(ticker)
	df.index=pd.DatetimeIndex(df['Date'])
	df_sub=df.loc[start:end]
	mpf.plot(df_sub,type='candle')
	mpf.plot(df_sub,type='line')
	mpf.plot(df_sub,type='ohlc',mav=4)
	s=mpf.make_mpf_style(base_mpf_style='charles',rc={'font.size':8})
	fig=mpf.figure(figsize=(12,8),style=s)
	ax=fig.add_subplot(2,1,2)
	av=fig.add_subplot(2,1,2,sharex=ax)
	mpf.plot(df_sub,type=chart_type,mav=(3,5,7),ax=ax,volume=av,show_nontrading=True)
	mpf.show()

def price_plot(ticker,syear,smonth,sday,eyear,emonth,eday):
	start =f"{syear}-{smonth}-{sday}"
	end =f"{eyear}-{emonth}-{eday}"	
	df=get_df_from_csv(ticker)
	df.index=pd.DatetimeIndex(df['Date'])
	df_sub=df.loc[start:end]
	df_np=df_sub.to_numpy()
	np_adj_close= df_np[:,5]
	date_arr = df_np[:,1]
	fig= plt.figure(figsize=(12,8),dpi=100)
	axes= fig.add_axes([0,0,1,1])
	axes.plot(date_arr,np_adj_close,color='navy')
	axes.xaxis.set_major_locator(plt.MaxNLocator(8))
	axes.grid(True,color='0.6',dashes=(5,2,1,2))
	axes.set_facecolor('#FAEBD7')
	plt.show()


# df=save_to_csv_from_yahoo('AMZN',2020,1,1,2020,12,31)

# amazon_dataframe= get_df_from_csv('AMZN')

# add_daily_return_to_df(amazon_dataframe,'AMZN')


# x=get_return_defined_time(amazon_dataframe,2020,12,1,2020,12,25)
# print(f'total return:{x}')


# mplfinance_plot('AMZN','ohlc',2020,12,1,2020,12,25)

price_plot('AMZN',2020,12,1,2020,12,25)

