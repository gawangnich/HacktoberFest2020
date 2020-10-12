const primeCheck = (element) => {
    let num = 0;
    for(let i=1; i <= element; i++){
      if(element%i === 0){
        num++
      }
    }
    if(num === 2){
      console.log("prima")
    }else{
      console.log("bukan prima")
    }
  }
  
  // TEST CASES
  primeCheck(0); //bukan prima
  primeCheck(3); //prima
  primeCheck(4); //bukan prima
  primeCheck(13); //prima