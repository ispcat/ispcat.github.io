document.addEventListener('DOMContentLoaded', function() {
  const myButton = document.getElementById('myButton');
  const messageParagraph = document.getElementById('message');
  const matrixDiv = document.getElementById('matrix');
  const solveButton = document.getElementById('solveButton');

  myButton.addEventListener('click', function() {
    messageParagraph.textContent = 'You have donated $1,000,000,000!';
    alert('I can get my Lamborghini now!');
  });

  function generateRandomMatrix() {
    let matrixHTML = '<table>';
    for (let i = 0; i < 10; i++) {
      matrixHTML += '<tr>';
      for (let j = 0; j < 10; j++) {
        const randomNumber = Math.floor(Math.random() * 100);
        matrixHTML += `<td>${randomNumber}</td>`;
      }
      matrixHTML += '</tr>';
    }
    matrixHTML += '</table>';
    matrixDiv.innerHTML = matrixHTML;
  }

  generateRandomMatrix();
  setInterval(generateRandomMatrix, 5000);

  solveButton.addEventListener('click', function() {
    alert('Easy solve clicked!');
  });
});