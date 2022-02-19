import matplotlib.pyplot as plt
import numpy as np 
import pandas as pd 


#simple plot
'''
x_1=np.linspace(0,5,10)
y_1=x_1**2
plt.plot(x_1,y_1)
plt.title('parabola')
plt.xlabel('xvalues')
plt.ylabel('yvalues')
plt.show()
'''

#multipleplots
'''
x_1=np.linspace(0,5,10)
y_1=x_1**2
plt.subplot(1,2,1) #The first 2 args are teh number of rows and columns of the subplot grid
plt.plot(x_1,y_1,'r') #red is for red color plot
plt.subplot(1,2,2)
plt.plot(x_1,y_1,'k') #red is for black color plot
plt.show()
'''

'''
#Figure
x_1=np.linspace(0,5,10)
y_1=x_1**2
fig_1=plt.figure(figsize=(5,4),dpi=100)
axes_1=fig_1.add_axes([0.1,0.1,0.9,0.9])  #left,bottom  width height
axes_1.set_xlabel('Days')
axes_1.set_ylabel('Days Squared')
axes_1.set_title('Days Squared Chart')
axes_1.plot(x_1,y_1,label='x/x2')
axes_1.plot(y_1,x_1,label='x2/x')
axes_1.legend(loc=0)  #loc decided where the legend is to be put 1=> upper right, 2=> upperleft
# plt.show()
#plotting a small plot fig inside the above
axes_2=fig_1.add_axes([0.45,0.45,0.4,0.3])
axes_2.set_xlabel('Days')
axes_2.set_ylabel('Days Squared')
axes_2.set_title('Mini Plot')
axes_2.plot(y_1,x_1,'r')
# axes_2.text(0,20,'Good Stuff')
plt.show()
'''


'''
#subplots with axes
x_1=np.linspace(0,5,10)
y_1=x_1**2
y_2=x_1**3
fig_2,axes_2= plt.subplots(figsize=(8,4),nrows=1,ncols=3)
plt.tight_layout()
axes_2[0].set_title('Plot 1')
axes_2[0].set_xlabel('X')
axes_2[0].set_ylabel('Y=X')
axes_2[0].plot(x_1,x_1)
axes_2[1].set_title('Plot 2')
axes_2[1].set_xlabel('X')
axes_2[1].set_ylabel('YSQ')
axes_2[1].plot(x_1,y_1)
axes_2[2].set_title('Plot 3')
axes_2[2].set_xlabel('X')
axes_2[2].set_ylabel('YCUB')
axes_2[2].plot(x_1,y_2)
plt.show()
'''


#appearance stuff and file saving
x_1=np.linspace(0,5,10)
y_1=x_1**2
fig_3= plt.figure(figsize=(6,4),dpi=100)
axes_3= fig_3.add_axes([0.1,0.1,0.8,0.8])
axes_3.set_xlabel('Days')
axes_3.set_ylabel('Days Squared')
axes_3.plot(x_1,y_1,color='navy',alpha=0.75,lw=2,ls='-.',marker='o',markersize=7,markerfacecolor='y',markeredgecolor='y',markeredgewidth=4)
# axes_3.set_xlim([0,3])
# axes_3.set_ylim([0,8])

# axes_3.grid(True)
axes_3.grid(True,color='0.6',dashes=(5,2,1,2))
axes_3.set_facecolor('#FAEBD7')
plt.show()
fig_3.savefig('savedplot.png')
