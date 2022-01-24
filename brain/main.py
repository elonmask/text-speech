from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer
from flask import Flask
from flask_cors import CORS,cross_origin
app = Flask(__name__)
CORS(app)


chatbot = ChatBot('Rona Obvious')

# Create a new trainer for the chatbot
trainer = ChatterBotCorpusTrainer(chatbot)

# Train the chatbot based on the english corpus
#trainer.train("chatterbot.corpus.english")

@app.route("/", methods=['GET'])
@cross_origin(origin='http://localhost:3000')
def index():
   ##response = chatbot.get_response("How are you?")
   ##print(response)
   return {
   "response": "Response"
   }

if __name__ == "__main__":
    app.run()