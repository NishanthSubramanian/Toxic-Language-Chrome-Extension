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
    # return string_class
    # return render_template('popup.html')

# @app.route('/text',  methods=['POST'])
# def hello_world3():
#     string = request.form.get('textbox')
#     string_class = func(string)
#     # return string_class
#     return render_template('index.html',message = string, string_class = string_class)

# @app.route('/android',  methods=['POST'])
# def android():
#     #how to get data from android
#     string = request.form.get('textbox')
#     string_class = func(string)
#     data = {'name':string_class}
#     print(data)
#     return jsonify(data)

# @app.route('/recognize')
# def hello_world():    

#     # create recognizer and mic instances
#     recognizer = sr.Recognizer()
#     microphone = sr.Microphone()

#     # get a random word from the list
#     # word = random.choice(WORDS)

  
#     print('say something')
#     guess = recognize_speech_from_mic(recognizer, microphone)


#     if guess["error"]:
#         message = "ERROR"
#     message = "You said: {}".format(guess["transcription"])
#     string = format(guess["transcription"])

#     #CALL FUNCTION
#     string_class = func(string)
    
#     print("You said: {}".format(guess["transcription"]))
#     return render_template('index.html', message = message, string_class = string_class)


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

# # def func(string):
# #     tokens = word_tokenize(string)
# #     stop_words = set(stopwords.words('english'))
# #     tokens = [w for w in tokens if not w in stop_words]
# #     vectorizer_f = open("file.pickle", "rb")
# #     vectorizer = pickle.load(vectorizer_f)
# #     vectorizer_f.close()
# #     test_vectors = vectorizer.transform(tokens)
# #     # name = str(i + '.pickle')
# #     # for i in range (6):
# #     #     classifier_f = open(name , "rb")
# #     #     classifier_f = pickle.load(classifier_f)
# #     #     classifier_f.close()
# #     #     x = classifier.predict(test_vectors)
    
# #     classifier_f = open("dict.pickle", "rb")
# #     classifier = pickle.load(classifier_f)
# #     classifier_f.close()
# #     x = classifier.predict(test_vectors)
# #     return x


# def recognize_speech_from_mic(recognizer, microphone):
#     """Transcribe speech from recorded from `microphone`.

#     Returns a dictionary with three keys:
#     "success": a boolean indicating whether or not the API request was
#                successful
#     "error":   `None` if no error occured, otherwise a string containing
#                an error message if the API could not be reached or
#                speech was unrecognizable
#     "transcription": `None` if speech could not be transcribed,
#                otherwise a string containing the transcribed text
#     """
#     # check that recognizer and microphone arguments are appropriate type
#     if not isinstance(recognizer, sr.Recognizer):
#         raise TypeError("`recognizer` must be `Recognizer` instance")

#     if not isinstance(microphone, sr.Microphone):
#         raise TypeError("`microphone` must be `Microphone` instance")

#     # adjust the recognizer sensitivity to ambient noise and record audio
#     # from the microphone
#     with microphone as source:
#         recognizer.adjust_for_ambient_noise(source)
#         audio = recognizer.listen(source)

#     # set up the response object
#     response = {
#         "success": True,
#         "error": None,
#         "transcription": None
#     }

#     # try recognizing the speech in the recording
#     # if a RequestError or UnknownValueError exception is caught,
#     #     update the response object accordingly
#     try:
#         response["transcription"] = recognizer.recognize_google(audio)
#     except sr.RequestError:
#         # API was unreachable or unresponsive
#         response["success"] = False
#         response["error"] = "API unavailable"
#     except sr.UnknownValueError:
#         # speech was unintelligible
#         response["error"] = "Unable to recognize speech"

#     return response


# """Filename: file.py"""

# from flask import Flask, render_template, request, url_for, redirect
# import speech_recognition as sr
# from sklearn.externals import joblib
# import random
# import time
# from scipy import misc
# import speech_recognition as sr
# import numpy as np
# import pickle
# from flask import jsonify
# import requests
# import nltk
# from nltk.tokenize import word_tokenize
# from nltk.corpus import stopwords

# from sklearn.feature_extraction.text import TfidfTransformer
# from sklearn.feature_extraction.text import TfidfVectorizer
# import pandas as pd
# from urllib.request import urlopen
# from bs4 import BeautifulSoup
# import matplotlib.pyplot as plt
# import seaborn as sns

# app = Flask(__name__)
# @app.route('/')
# def main():
#     return render_template('main.html')

# @app.route('/news')
# def news():
#     url = "https://www.indy100.com/article/these-are-the-most-offensive-swear-words-you-can-never-say-on-american-television-7343796"
#     html = urlopen(url)
#     soup = BeautifulSoup(html, 'lxml')
#     # page = requests.get('https://www.indy100.com/article/these-are-the-most-offensive-swear-words-you-can-never-say-on-american-television-7343796')
#     # print(soup.find_all('a'))
#     # print(soup.find_all('p'))
#     # print(soup.find_all('h1'))
#     # print(soup.find_all('h2'))
#     # print(soup.find_all('h3'))
#     # print(soup.find_all('h4'))
#     # print(soup.find_all('h5'))
#     # print(soup.find_all('ul'))
#     string = str(soup.find_all('a')) + str(soup.find_all('p')) + str(soup.find_all('h1')) + str(soup.find_all('h2')) + str(soup.find_all('h3')) + str(soup.find_all('h4')) + str(soup.find_all('h5')) + str(soup.find_all('li')) + str(soup.find_all('ul'))
#     str_class = func(string)

#     return render_template('news.html',str_class = str_class)

# def func(string):
#     tokens = word_tokenize(string)
#     stop_words = set(stopwords.words('english'))
#     tokens = [w for w in tokens if not w in stop_words]
#     vectorizer_f = open("file(1).pickle", "rb")
#     vectorizer = pickle.load(vectorizer_f)
#     vectorizer_f.close()
#     test_vectors = vectorizer.transform(tokens)
#     list_abuse = ['toxic','severe_toxic','obscene','threat','insult','identity_hate']
#     ans = []
#     for i in range(6):
#         name = str(i) +"(1).pickle"
#         classifier_f = open(name, "rb")
#         classifier = pickle.load(classifier_f)
#         classifier_f.close()
#         x= classifier.predict(test_vectors)
#         for j in range(len(x)):
#             if x[j]==1:
#                 ans.append(list_abuse[i])
#                 break
#     return ans    

