function prime(){
    let arr = [1,2,3,4,5,6,7,8,10,12,13,14,16,17];
     for(let i=0;i<arr.length;i++){
      if (arr[i]%1 == 0 || arr[i]%arr[i] == 0){
        if(arr[i]==2 || arr[i]==3 || arr[i]==5){
          console.log(' is prime');
        }
        else if(arr[i]%2==0 || arr[i]%3==0 || arr[i]%5==0){
           console.log('not prime');
         }
          else{
        console.log('is prime') ;     
            }
       }
     }
   }
   prime()

   