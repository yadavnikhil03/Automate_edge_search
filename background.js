let intervalId;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'startRandomSearch') {
    let wordsToSearch = [
      'apple', 'banana', 'cherry', 'date', 'elderberry',
      'fig', 'grape', 'honeydew', 'kiwi', 'lemon',
      'mango', 'orange', 'pear', 'quince', 'raspberry',
      'strawberry', 'tangerine', 'watermelon', 'apricot', 'blackberry',
      'cantaloupe', 'dragonfruit', 'eggplant', 'fennel', 'grapefruit',
      'huckleberry', 'imbe', 'jackfruit', 'kumquat', 'lime',
      
    ]; // List of 30 words to search

    let currentIndex = 0;

    intervalId = setInterval(() => {
      if (currentIndex < wordsToSearch.length) {
        performRandomSearch(wordsToSearch[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(intervalId); // Stop the interval when all words are searched
      }
    }, 2500); // 2.5 seconds delay
  } else if (request.action === 'stopRandomSearch') {
    clearInterval(intervalId); // Clear interval if stop message is received
  }
});

function performRandomSearch(keyword) {
  console.log("Performing random search for: " + keyword);

  // Example: Update active tab with a random search query
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.update(tabs[0].id, { url: 'https://www.bing.com/search?q=' + encodeURIComponent(keyword) });
  });
}
