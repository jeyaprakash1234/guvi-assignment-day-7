


const countdown = (num, callback) => {
    if (num > 0) {
      setTimeout(() => {
        document.getElementById('countdown').innerText = num;
        countdown(num - 1, callback);
      }, 1000);
    } else {
      callback();
    }
  };
  

  const displayHappyNewYear = () => {
    setTimeout(() => {
      document.getElementById('countdown').innerText = ' Advance Happy New Year sir!';
    }, 1000);
  };
  
  countdown(10, displayHappyNewYear);
  
