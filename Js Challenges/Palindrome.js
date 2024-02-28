function Palindrome(str) {
    str = str.toLowerCase();
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            console.log(false);
            return;
        }
    }
    console.log(true);
  }
  
  Palindrome('madam'); 
  