function calculateFactorial() {
  const numInput = document.getElementById('numberInput');
  const num = parseInt(numInput.value);
  const output = document.getElementById('output');
  const error = document.getElementById('error');

  output.innerHTML = '';
  error.innerHTML = '';

  if (isNaN(num) || num < 0) {
    error.innerText = 'Please enter a valid positive integer.';
    return;
  }

  const iterative = factorialIterative(num);
  const recursive = factorialRecursive(num);

  output.innerHTML = `
    <p><strong>Iterative:</strong> ${iterative}</p>
    <p><strong>Recursive:</strong> ${recursive}</p>
  `;
}

function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function factorialRecursive(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorialRecursive(n - 1);
}
