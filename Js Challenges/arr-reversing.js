function reversedArr() {
    let arr = [1,2,3,4,5,6,7];
      let newArr = [];
      for(var i =arr.length-1;i>=0;i--){
        newArr = arr[i];
      }
      console.log(newArr);
    }
    
    reversedArr(); 
    