import { useEffect, useState } from 'react';
import './App.css';
import Word from './word';
let timeoutId
let ru1
let alie1
let ru2
let alie2
 
function App() {
  const [timer, setTimer] = useState(0)
  const [rate, setRate] = useState(0)
  const [ind, setInd] = useState(5)
  const [wordsRu, setWordsRu] = useState()
  const [wordsEng, setWordsEng] = useState()
  const [pfraseVerbRu] = useState( [
    {
      id: 0,
      focus: false,
      word: 'Вести себя странно',
      connect: 99,
      num: null
    },
    {
      id: 1,
      focus: false,
      word: 'Изображать что-то',
      connect: 98,
      num: null
    },
    {
      id: 2,
      focus: false,
      word: 'Иметь смысл',
      connect: 97,
      num: null
    },
    {
      id: 3,
      focus: false,
      word: 'Добавить к чему-то',
      connect: 96,
      num: null
    },
    {
      id: 4,
      focus: false,
      word: 'Включить во что-то',
      connect: 95,
      num: null
    },
    {
      id: 5,
      focus: false,
      word: 'Быть включенным/выключенным',
      connect: 94,
      num: null
    },
    {
      id: 6,
      focus: false,
      word: 'Игнорировать',
      connect: 93,
      num: null
    },
    {
      id: 7,
      focus: false,
      word: 'Расстаться',
      connect: 92,
      num: null
    },
    {
      id: 8,
      focus: false,
      word: 'Потерять контроль',
      connect: 91,
      num: null
    },
    {
      id: 9,
      focus: false,
      word: 'Сбежать',
      connect: 90,
      num: null
    },
    {
      id: 10,
      focus: false,
      word: 'Расспрашивать',
      connect: 89,
      num: null
    },
    {
      id: 11,
      focus: false,
      word: 'Продолжать',
      connect: 88,
      num: null
    },
    {
      id: 12,
      focus: false,
      word: 'Успокоить',
      connect: 87,
      num: null
    },
    {
      id: 13,
      focus: false,
      word: 'Скидываться на что-то',
      connect: 86,
      num: null
    },
    {
      id: 14,
      focus: false,
      word: 'Рассчитывать на кого-то',
      connect: 85,
      num: null
    },
    {
      id: 15,
      focus: false,
      word: 'Посоветоваться',
      connect: 84,
      num: null
    },
    {
      id: 16,
      focus: false,
      word: 'Быть от куда-то родом',
      connect: 83,
      num: null
    },
    {
      id: 17,
      focus: false,
      word: 'Случайно кого-то встретить',
      connect: 82,
      num: null
    },
    {
      id: 18,
      focus: false,
      word: 'Унаследовать',
      connect: 81,
      num: null
    },
    {
      id: 19,
      focus: false,
      word: 'Отвалиться',
      connect: 80,
      num: null
    },
    {
      id: 20,
      focus: false,
      word: 'Зайти в гости',
      connect: 79,
      num: null
    },
  ])
  const [pfraseVerbEng] = useState([
    
    {
      id: 1,
      connect: 99,
      focus: false,
      word: 'Act up'
    
  },
  
  {
    id: 2,
    connect: 98,
    focus: false,
    word: 'Act out'
  
  },
  {
    id: 3,
    focus: false,
    word: 'Add up',
    connect: 97
    
  },
  {
    id: 4,
    focus: false,
    word: 'Add on',
    connect: 96
    
  },
  {
    id: 5,
    focus: false,
    word: 'Add in',
    connect: 95
    
  },
  {
    id: 6,
    focus: false,
    word: 'Be on/off',
    connect: 94
    
  },
  {
    id: 7,
    focus: false,
    word: 'Blow off',
    connect: 93
    
  },
  {
    id: 8,
    focus: false,
    word: 'Break up',
    connect: 92
    
  },
  {
    id: 9,
    focus: false,
    word: 'Break down',
    connect: 91
    
  },
  {
    id: 10,
    focus: false,
    word: 'Break out',
    connect: 90
    
  },
  {
    id: 11,
    focus: false,
    word: 'Ask around',
    connect: 89
    
  },
  {
    id: 12,
    focus: false,
    word: 'Carry on',
    connect: 88
    
  },
  {
    id: 13,
    focus: false,
    word: 'Calm (smb) down',
    connect: 87
    
  },
  {
    id: 14,
    focus: false,
    word: 'Chip in',
    connect: 86
    
  },
  {
    id: 15,
    focus: false,
    word: 'Count on',
    connect: 85
    
  },
  {
    id: 16,
    focus: false,
    word: 'Check with',
    connect: 84
    
  },
  {
    id: 17,
    focus: false,
    word: 'Come from',
    connect: 83
    
  },
  {
    id: 18,
    focus: false,
    word: 'Come across',
    connect: 82
    
  },
  {
    id: 19,
    focus: false,
    word: 'Come into',
    connect: 81
    
  },
  {
    id: 20,
    focus: false,
    word: 'Come off',
    connect: 80
    
  },
  {
    id: 21,
    focus: false,
    word: 'Come over',
    connect: 79
    
  },
  ])
  const [container, setContainer] = useState()
  const [containerEng, setContainerEng] = useState()
  const [start, setStart] = useState(false)
  useEffect(() => {
    const box = []
    const wordBox = []
    const ConnectWord = []
    for(let e = 0; e < 70; e++){
      box.push(getRandomInt(pfraseVerbRu.length))
      }
      for(let i = 0; i < box.length; i ++){
        wordBox.push(pfraseVerbRu.filter(e => e.id === box[i])[0])
      }
      for(let i = 0; i < wordBox.length; i ++){
        ConnectWord.push(pfraseVerbEng.filter(e => e.connect === wordBox[i].connect)[0])
      }
      setContainerEng(ConnectWord)
    setContainer(wordBox)
    
  }, []);

useEffect(()=> {
  let interval
  if(start){
     interval = setInterval(() => setTimer(timer => timer + 1), 1000);
  }

  return () => clearInterval(interval);
}, [start])
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


  useEffect(() => {
   if(container){
    let timeCont = []
    for(let i = 0; i < 5; i ++){
      timeCont.push({...container[i], num: i +1 })
    }
    setWordsRu([...timeCont])
   }
  }, [container])

  useEffect(() => {
    if(containerEng){
     let timeCont = []
     let randomInt = [4, 5, 2, 3, 1]
     for(let i = 0; i < 5; i ++){
       timeCont.push({...containerEng[i], num: randomInt[i] })
     }
     setWordsEng([...timeCont])
    }
   }, [containerEng])

  function compareNumeric(a, b) {
    if (a.num > b.num) return 1;
    if (a.num === b.num) return 0;
    if (a.num < b.num) return -1;
  }

function setTwoWords(){
  if(ru2.connect === alie2.connect){
    const numArr1 = [ru1.num, alie1.num]
    const numArr2 = [ru2.num, alie2.num]
    if(rate >= localStorage.getItem('count')){
      localStorage.setItem('count',  Number(localStorage.getItem('count')) + 1);

    }
    setRate(e => e + 1)
    clearTimeout(timeoutId)
    timeoutId = null
    const elemRu = [...wordsRu.filter(e => e.num !== ru1.num && e.num !== ru2.num), {...container[ind], num: numArr1[0]}, {...container[ind + 1], num: numArr2[0]}]
    const elemEng = [...wordsEng.filter(e => e.num !== alie1.num && e.num !== alie2.num), {...containerEng[ind], num: numArr2[1]}, {...containerEng[ind + 1], num: numArr1[1]}]
    setWordsRu(elemRu)
    setWordsEng(elemEng)
    setInd(e => e + 2)
     ru1 = null 
     alie1= null
     ru2= null
     alie2= null
}else{
    
  setWordsEng(wordsEng.map(e => e.num === alie2.num ? {...e, focus: false} : {...e}))
  setWordsRu(wordsRu.map(e => e.num === ru2.num ? {...e, focus: false} : {...e}))
  setRate(0)
  ru2= null
  alie2= null
}
}
 function setOneWord(){
  if (alie1.connect === ru1.connect){
              
    const numArr = [ru1.num, alie1.num ]
    if(rate >= localStorage.getItem('count')){
      localStorage.setItem('count',  Number(localStorage.getItem('count')) + 1);

    }
    console.log(rate >=  localStorage.getItem('count'));
    setRate(e => e + 1)

      timeoutId = setTimeout(() => {
      const elemRu = [...wordsRu.filter(e => e.num !== ru1.num), {...container[ind], num: numArr[0]}]
      const elemEng = [...wordsEng.filter(e => e.num !== alie1.num), {...containerEng[ind], num: numArr[1]}]
      console.log(wordsEng.filter(e => e.num !== alie1.num));
      setWordsRu(elemRu)
      setWordsEng(elemEng)
    setInd(e => e + 1)
    ru1 = null 
    alie1= null
    ru2= null
    alie2= null
    timeoutId = null

  }, 4000);

  }else{
    ru1 = null 
    alie1= null
    setWordsEng(wordsEng.map(e => e.focus === true ? {...e, focus: false} : {...e}))
setWordsRu(wordsRu.map(e => e.focus === true ? {...e, focus: false} : {...e}))
setRate(0)

    
  }

 }
  function changeWords(num, lang){
    if(!start){
      setStart(true)
    }
    if(lang === 'ru'){
      if(timeoutId){
       ru2 = wordsRu.filter(e => e.num === num)[0]
      setWordsRu(wordsRu.map(e => e.num === num && e.num !== ru1.num ? {...e, focus: !e.focus} : e.num === ru1.num ? {...e} : {...e, focus: false}))
        if(alie2 ){
          setTwoWords()
        }


      }else{
      ru1 = wordsRu.filter(e => e.num === num)[0]
      setWordsRu(wordsRu.map(e => e.num === num ? {...e, focus: !e.focus} : {...e, focus: false}))
      if(alie1){
        setOneWord()
        }
      
      }
    } else if(lang === 'alien'){
      if(timeoutId){
        setWordsEng(wordsEng.map(e => e.num === num && e.num !== alie1.num ? {...e, focus: !e.focus} : e.num === alie1.num ? {...e} : {...e, focus: false}))
         alie2 = wordsEng.filter(e => e.num === num)[0]
          if(ru2 ){
            
            setTwoWords()
          }
  
  
        } else{
          alie1 = wordsEng.filter(e => e.num === num)[0]
          setWordsEng(wordsEng.map(e => e.num === num ? {...e, focus: !e.focus} : {...e, focus: false}))
          if(ru1){
            setOneWord()
        }
      
      }
    }
  }
  return (
    <div className="App">
      
      <h1 className='timer'>{timer}
      </h1>

      <h1>Рекорд {localStorage.getItem('count')}</h1>
      <h2>Счет сейчас {rate}</h2>
      {
        timer > 90 ? "ЭТО ВСЁ" : (
          <div className='container'>
     <div className='wordsRuPanel'>
        
        {wordsRu && wordsRu.sort(compareNumeric).map(e => <Word key={e.num} num={e.num} lang={'ru'} focus={e.focus}   changeWords={changeWords} word={e.word} /> )}
      </div>
      <div className='wordsEngPanel'>
        
        {wordsEng && wordsEng.sort(compareNumeric).map(e => <Word key={e.num} focus={e.focus} num={e.num} lang={'alien'} changeWords={changeWords} word={e.word} /> )}
      </div>
      </div>
        )
      }
      
     
      <div onClick={() => setStart(e => !e)} className={start ? 'btnPlay' : 'btnStop'} >{start ? 'Стоп' : 'Пуск'}</div>
          
      </div>
  );
}

export default App;
