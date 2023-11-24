function minMax() {
    let min = parseInt(document.getElementById('min').value);
    let max = parseInt(document.getElementById('max').value);
  
    if (isNaN(min) || isNaN(max)) {
      return "Please enter valid numbers";
    }
  
    if (max < min) {
      [max, min] = [min, max];
    }
  
    return max;
  }
  
  let calculateBtn = document.getElementById('calculateBtn');
  calculateBtn.addEventListener('click', function() {
    let result = minMax();
    document.getElementById("result").innerHTML = "Maximum value is: " + result;
  });
  
  document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('min').value = "";
    document.getElementById('max').value = "";
    document.getElementById("result").innerHTML = "";
  });
  
  