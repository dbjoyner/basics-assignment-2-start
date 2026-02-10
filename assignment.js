const task3Element = document.getElementById('task-3');

// Task 1: Two functions
function showGreeting() {
  alert('Hello there! Welcome to the assignment.');
}

function showName(name) {
  alert(name);
}

// Task 2: Call both functions
showGreeting();
showName('David');

// Task 3: Add event listener to task3Element
task3Element.addEventListener('click', showGreeting);

// Task 4: Function that concatenates three strings
function combineStrings(str1, str2, str3) {
  return str1 + str2 + str3;
}

// Task 5: Call the function and alert the result
alert(combineStrings('Hello', ' ', 'World'));