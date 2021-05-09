

import numpy as np
import pandas as pd
from sklearn import svm
from pandas import DataFrame

# import the data
data=pd.read_csv("rawdata_20210412.csv")


# data preprocessing
OECDTotal_median = np.nanmedian(data["OECD - Total"])
new_value = np.where(data["OECD - Total"].isnull(), OECDTotal_median, data["OECD - Total"])
data["OECD - Total"] = new_value
X = data.drop(['Date','Cycle'], axis=1)
y = data['Cycle']


#split the data for testing and training
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2)



#setting svm parameters
from sklearn.svm import SVC
svclassifier = SVC(C=20, gamma=0.15, kernel='linear')
svclassifier.fit(X_train, y_train)


# #predict
# y_pred = svclassifier.predict(X_test)


# # 確認預測準確率
# from sklearn.metrics import classification_report, confusion_matrix
# print(confusion_matrix(y_test,y_pred))
# print(classification_report(y_test,y_pred))


test_array=[84.4,102.39,0.18,65.9,-6.3,-2.65,100.5,-1.30,25.67,7.9]
test_df = pd.DataFrame(test_array).T
test = svclassifier.predict(test_df).astype(int) 

