import pandas as pd 

df=pd.read_csv("./test.csv")

df.index=pd.DatetimeIndex(df['date'])
print(df.loc['2020-01-15':'2020-02-15'])
