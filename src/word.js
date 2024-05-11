
function Word({word, changeWords, num, focus, lang}) {
    return (
      <>
      
      <div onClick={() => changeWords(num, lang)} className={focus ? 'wordCheck' : 'word'}>{word}</div>
      </>
               
    );
  }
  
  export default Word;
  