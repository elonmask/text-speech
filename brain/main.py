from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer
from chatterbot.trainers import ListTrainer

from flask import Flask
from flask_cors import CORS,cross_origin
from flask import request
app = Flask(__name__)
CORS(app)

from convokit import Corpus, download
corpus_movie = Corpus(filename=download("movie-corpus"))
corpus_conv_reddit = Corpus(filename=download("conversations-gone-awry-cmv-corpus"))
corpus_friends = Corpus(filename=download("friends-corpus"))

chatbot = ChatBot('Tyler')

# Create a new trainer for the chatbot
trainer = ChatterBotCorpusTrainer(chatbot)
trainer.train("chatterbot.corpus.english")
trainer.train(corpus_movie)
trainer.train(corpus_conv_reddit)
trainer.train(corpus_friends)


@app.route("/", methods=['GET'])
def index():
   speech = request.args.get('speech')
   response = chatbot.get_response(speech)
   return {
   "response": str(response)
   }

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)