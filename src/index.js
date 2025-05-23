import './index.css'

const quotes = [
  "Ever since I was a kid, I've dreamed of building scalable distributed systems... said no kid ever. But here I am, and I genuinely love it.",
  "As a child, while others dreamed of space or dinosaurs, I aspired to build fault-tolerant microservices. Okay, not really—but it turns out I'm pretty good at it now.",
  "When I was little, I didn't dream of solving race conditions—but somehow, debugging multi-threaded code brings me peace now.",
  "Most kids wanted to be astronauts or firefighters. I just wanted clean APIs and 99.99% uptime—eventually.",
  "No one grows up dreaming about load balancers and CI/CD pipelines. But somewhere along the way, I found my passion in making systems work better."
]

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  return quotes[randomIndex]
}

function updateQuote() {
  const quote = getRandomQuote()
  const quoteElement = document.querySelector('.text-lg')
  if (quoteElement) quoteElement.textContent = `"${quote}"`
}

// Update quote on page load
document.addEventListener('DOMContentLoaded', updateQuote)