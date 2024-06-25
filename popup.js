document.addEventListener('DOMContentLoaded', function() {
  let startButton = document.getElementById('startButton');
  let stopButton = document.getElementById('stopButton');

  startButton.addEventListener('click', function() {
    startButton.style.display = 'none';
    stopButton.style.display = 'inline-block';
    chrome.runtime.sendMessage({ action: 'startRandomSearch' });
  });

  stopButton.addEventListener('click', function() {
    stopButton.style.display = 'none';
    startButton.style.display = 'inline-block';
    chrome.runtime.sendMessage({ action: 'stopRandomSearch' });
  });
});
