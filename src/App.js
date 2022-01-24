import logo from './logo.svg';
import './App.css';
import { play } from '@anggamanggala21/text-to-speech'
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

  /*
  * TASKS
  *
  * 1) Create delayed messages
  * 2) Voice volume changing
  * 3) Automatic googling
  *
  *
  *
  *
  * */

  const [text, setText] = useState("");

  const ACTIONS = {
    text: ["delayMessage", "find", "repeatText"],
    selfActions: ["change", "turn_on", "turn_off"]
  }

  const commandDelayAnswers = {
    answerStart: ["Okay", "Good", "No problem", "Sure"],
    answerMid: ["I will cover this", "Will be done", "i'll remember this"]
  }

  const chat = {
    "help": ["help","help me","hey help me"],
    "greet_hello": ["what's up","what's good","hi","yo","wassup","hello","hey","hullo"],
    "greet_time": ["good morning","good afternoon","good evening"],
    "joke": ["tell me a joke", "tell a joke", "joke", "a joke", "jokes", "make me laugh", "another", "another one", "once more"],
    "abt_assistant": ["who are you","what's your name","what is your name","tell me about yourself"],
    "abt_creators": ["who made you", "hey who's your fada", "who's you creator","who created you"],
    "ask_wellbeing": ["hey how are you","how do you do","how are you","howdy"],
  }

  const mics = {
    "web_search": ["opensite","openwebsite","where is","google","youtube","define","what's the meaning of","search ","meaning of","what is"],
    "time":["time","current time","what's the time","tell me the time","what time it is"],
    "date": ["date","today's date","what's the date","current date"],
    "date_day": ["what's the day","day","what day is it","what day it is"],
    "date_month": ["what's the month","month","what month is it","what month it is"],
    "date_year": ["year","what's the year","what year is it","what year it is"],
    "notes_write": ["write a note","save a note","add a note","add a reminder","note",],
    "reminder_write": ["reminder", "save a reminder", "write a reminder", "remind me"],
    "notes_read": ["are there any notes","notes","do i have any note","past notes","read notes"],
    "reminder_read": ["are there any reminders","do i have any reminders","reminders","read reminders","past reminders"],
    "email": ["email","send a email","send an email","write an email","compose email","compose an email"],
    "weather": ["weather","weather today","what's the weather","current weather","what's the temperature outside","how's the josh","temperature"],
    "weather_frcst": ["weather forecast","weather tomorrow", "what's the weather forecast","how's the weather going to be"],
    "song": ["play","song"],
    "news": ["news","headlines","top headlines","today's news"],
    "test":["test"]
  }

  const name = "Alexa"

  /*const analyze_basic = (speech) => {
    mics.reminder_write.forEach(item => {
      if (speech.includes(item)) {
        const testText = "Good morning"

        play(commandDelayAnswers.answerStart[Math.floor(Math.random()*commandDelayAnswers.answerStart.length)] + ", " + commandDelayAnswers.answerMid[Math.floor(Math.random()*commandDelayAnswers.answerMid.length)])
      }
    })
    if (speech === "" || speech.length === 0) {
      play(smallTalk.common[Math.floor(Math.random()*smallTalk.common.length)])
    }
  }*/


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type={"text"} onChange={(e) => {
          setText(e.target.value);
        }}/>
        <button onClick={() => {
          try {
            //analyze_basic(text)
            /*axios.get(`localhost:5000/`).then((response) => {
              console.log(response.data)
              play(response.data?.response)
            })*/

            play(text)
          } catch (e) {
            console.log(play("On my. " + e))
          }
        }}>
          Speech
        </button>
      </header>
    </div>
  );
}

export default App;
