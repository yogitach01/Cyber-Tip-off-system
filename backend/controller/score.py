


import sys, json, numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.neighbors import KNeighborsClassifier

df = pd.read_csv('https://raw.githubusercontent.com/aniket193-web/dwaw/main/survey.csv',engine='python',encoding='UTF-8')
df.replace('?',-99999,inplace=True)

X=np.array(df.drop(['target'],1))
Y=np.array(df['target'])   
    
def read_in():
    lines=sys.stdin.readlines()
    return json.loads(lines[0])

def main(lines):
    Newdataset =np.array(lines.split(',')).reshape(1,6)
    rf = RandomForestClassifier(n_estimators=4,criterion='entropy', max_depth=3)
    rf=rf.fit(np.nan_to_num(X),Y)
    predictions = rf.predict(Newdataset)
    i=0
    while predictions[i]=="" :
        i+=1
    print( predictions[i])
if __name__=='__main__':
    main(sys.argv[1])
   # main(sys.argv[1])
