import Word from "./word";

function BlockWord({elem, changeWords}) {
  return (
    
      <div className='block'>
        {/* {elem.map((e, index) => <Word key={index} word={e}/>)} */}
        <Word word={elem.ru.word}/>
        <Word word={elem.en.word}/>
      </div> 
    
  );
}

export default BlockWord;
