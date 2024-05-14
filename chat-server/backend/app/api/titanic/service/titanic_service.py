
import numpy as np
from app.api.titanic.model.titanic_model import TitanicModel
import pandas as pd


class TitanicService:

    model = TitanicModel() 

    def process(self):
        print(f'프로세스 시작')
        this = self.model
        this.train = self.new_model('train.csv')
        this.test = self.new_model('test.csv')
        feature = ['PassengerId', 'Survived', 'Pclass', 'Name','Sex','Age','SibSp','Parch','Ticket','Fare','Cabin','Embarked']
        this.id = this.test['PassengerId']
        self.df_info(this)
        this = self.extract_title_from_name(this)


        this = self.name_nominal(this) # Name을 명목형으로 변환
        this = self.drop_feature(this,'Cabin', 'Ticket','SibSp','Parch','Name')
        self.df_info(this)
        this = self.pclass_ordinal(this) # Pclass를 순서형으로 변환
        this = self.age_ratio(this) # Age를 범주형으로 변환
        this = self.Fare_ratio(this)
        this = self.embarked_nominal(this)
        this = self.create_train(this)

        
        


    
    @staticmethod
    def extract_title_from_name(this) -> object:
        combine = [this.train, this.test]
        for dataset in combine:
            dataset['Title'] = dataset.Name.str.extract('([A-Za-z]+)\.', expand=False)
        return this
        
    


    @staticmethod #훈련센터
    def create_train(this) -> str:
        return this.train.drop('Survived',axis=1) # 0:행, 1:열

    @staticmethod #테스트센터
    def create_label(this) -> str:
        return this.train['Survived'] 

    @staticmethod
    def drop_feature(this, *feature) -> object: 
        # for i in feature: # 리스트로 넘긴다.
        #     this.train = this.train.drop([i], axis=1)
        #     this.test = this.test.drop(i, axis=1)
        
        # for i in [this.train, this.test]:
        #     for j in feature:
        #         i.drop(j, axis=1, inplace=True)

        [i.drop(j, axis=1, inplace=True) for j in feature for i in [this.train, this.test]]

        return this
    
    @staticmethod
    def df_info(this):
        # for i in [this.train, this.test]:
        #     print(f'{i.info(3)}')
        
        [print(f'{i}') for i in [this.train, this.test]] 

    # ['PassengerId', 'Survived', 'Pclass', 'Name','Sex','Age','SibSp','Parch','Ticket','Fare','Cabin','Embarked']

    @staticmethod
    def pclass_ordinal(this) -> object:
        this.train['Pclass'] = this.train['Pclass'].map({1:'A', 2:'B', 3:'C'})
        this.test['Pclass'] = this.test['Pclass'].map({1:'A ', 2:'B', 3:'C'})
        return this
    
    @staticmethod
    def age_ratio(this) -> object:
        for i in [this.train, this.test]:
            i['Age'] = i['Age'].fillna(-0.5)
            bins = [-1, 0, 5, 12, 18, 24, 35, 60, np.inf]
            labels = ['Unknown', 'Baby', 'Child', 'Teenager', 'Student', 'Young Adult', 'Adult', 'Senior']
            i['AgeGroup'] = pd.cut(i['Age'], bins, labels=labels)
        return this
    
    @staticmethod
    def Fare_ratio(this) -> object:
        for i in [this.train, this.test]:
            i['Fare'] = i['Fare'].fillna(-0.5)
            bins = [-1, 0, 8, 15, 31, np.inf]
            labels = ['Unknown', '1_quartile', '2_quartile', '3_quartile', '4_quartile']
            i['FareGroup'] = pd.cut(i['Fare'], bins, labels=labels)
        return this
    
    @staticmethod
    def embarked_nominal(this) -> object:
        this.train['Embarked'] = this.train['Embarked'].fillna('S')
        this.test['Embarked'] = this.test['Embarked'].fillna('S')
        this.train['Embarked'] = this.train['Embarked'].map({'S':0, 'C':1, 'Q':2})
        this.test['Embarked'] = this.test['Embarked'].map({'S':0, 'C':1, 'Q':2})
        return this
    
    @staticmethod
    def name_nominal(this) -> object:
        title_mapping = {"Mr":0, "Miss":1, "Mrs":2, "Master":3, "Dr":3, "Rev":3, "Col":3, "Major":3, "Mlle":3, "Countess":3, "Ms":3, "Lady":3, "Jonkheer":3, "Don":3, "Dona":3, "Mme":3, "Capt":3, "Sir":3}
        for i in [this.train, this.test]:
            i['Title'] = i['Title'].map(title_mapping)
        return this
        
    
    
 
    
        
        
       
            

        

    
    
