import pandas as pd 

# df=pd.read_csv("./test.csv")

# df.index=pd.DatetimeIndex(df['date'])
# print(df.loc['2020-01-15':'2020-02-15'])
# print(df)


df=pd.DataFrame()
df["animals"]=["cat","dog","cow"]
df["birds"]=["robin","duck","eagle"]
df["reptiles"]=["iguana","lizard","gilamonster"]
df.index=df["birds"]
print(df.loc["robin":"duck"])
