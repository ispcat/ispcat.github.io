document.addEventListener('DOMContentLoaded', function() {
    const myButton = document.getElementById('myButton');
    const messageParagraph = document.getElementById('message');
  
    myButton.addEventListener('click', function() {
      messageParagraph.textContent = 'Button Clicked!';
      alert('You clicked the button!');
    });
  });