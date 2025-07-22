const checkBtn = document.getElementById("check-btn");

const textInput = document.getElementById("text-input");

const result = document.getElementById("result");

function isPalindrome(str){
  const checked = /[^a-z0-9]/ig;
  const cleaned = str.replace(checked, "").toLowerCase();
  return cleaned === cleaned.split("").reverse().join("");
}

checkBtn.addEventListener('click', () => {
  if(textInput.value === ""){
    alert("Please input a value")
  }
  result.textContent = isPalindrome(textInput.value) ? `${textInput.value} is a palindrome`: `${textInput.value} is not a palindrome`;

  textInput.value = "";
});

