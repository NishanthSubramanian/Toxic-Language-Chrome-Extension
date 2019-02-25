"""Filename: hello-world.py"""

from flask import Flask, render_template, request, url_for, redirect
import speech_recognition as sr
from sklearn.externals import joblib


import random
import time
from scipy import misc
import speech_recognition as sr
import numpy as np
# print(numpy.__version__)
import pickle
from flask import jsonify

import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

from sklearn.feature_extraction.text import TfidfTransformer
from sklearn.feature_extraction.text import TfidfVectorizer
import pandas as pd
app = Flask(__name__)
# @app.route('/')
# def hello_world2():
#     return render_template('initial.html')

@app.route('/test', methods = ['POST'])
def js():
    print(request.data)
    print(request.form)
    s = str(request.form)
    string_class = func(s)
    data = {'class': string_class}
    data = jsonify(data)
    return data   


def func(string):
    tokens = word_tokenize(string)
    stop_words = set(stopwords.words('english'))
    tokens = [w for w in tokens if not w in stop_words]
    vectorizer_f = open("file(1).pickle", "rb")
    vectorizer = pickle.load(vectorizer_f)
    vectorizer_f.close()
    test_vectors = vectorizer.transform(tokens)
    #print(list(vocabulary))  
    list_abuse = ['toxic','severe_toxic','obscene','threat','insult','identity_hate']
    ans = []
    for i in range(6):
        name = str(i)+ "(1).pickle"
        classifier_f = open(name, "rb")
        classifier = pickle.load(classifier_f)
        classifier_f.close()
        x= classifier.predict(test_vectors)
        for j in range(len(x)):
            if x[j]==1:
                ans.append(str(str(tokens[j])+" "+str(list_abuse[i])))
                # ans.append(list_abuse[i])
    return ans    