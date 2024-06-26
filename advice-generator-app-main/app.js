const adviceId = document.getElementById('advice-id');
const messageId = document.getElementById('advice-text');
const adviceButton = document.getElementById('new-advice-btn');
const url = "https://api.adviceslip.com";

async function getAdvice() {
  try {
    const response = await fetch(`${url}/advice`);
    const data = await response.json();
    messageId.innerText = data.slip.advice;
    adviceId.innerText = data.slip.id;
  } catch (error) {
    console.error('Error fetching advice:', error);
  }
}
getAdvice();

adviceButton.addEventListener('click', getAdvice);
