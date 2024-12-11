// Create a new worker, giving it the code in "generate.js"
const worker = new Worker("./generate.js");
// When the user clicks "Generate primes", send a message to the worker.
// The message command is "generate", and the message also contains "quota",
// which is the number of primes to generate.
const genBtn = document.querySelector("#generate");
const reloadBtn = document.querySelector("#reload");
const output = document.querySelector("#output");
const usersInput = document.querySelector("#user-input");
const quo = document.querySelector("#quota");

genBtn.addEventListener("click", () => {
  const quota = quo.value;
  worker.postMessage({
    command: "generate",
    quota,
  });
});
// When the worker sends a message back to the main thread,
// update the output box with a message for the user, including the number of
// primes that were generated, taken from the message data.
worker.addEventListener("message", (message) => {
  output.textContent = `Finished generating ${message.data} primes!`;
});

reloadBtn.addEventListener("click", () => {
  usersInput.value =
    'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});
