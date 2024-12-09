const name = document.getElementById("name");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");
const txt = document.getElementById("txt");

function alarm(person, delay) {
    return new Promise((resolve, reject) => {
        if (person && delay) {
         if (Number(delay) === 0) {
           throw new Error(`Alarm must be set for later`);
         } else if (delay < 0) {
           throw new Error(`Alarm can't be negative`);
         } else {
           setTimeout(() => {
             resolve(`Wake up ${person}`);
           }, delay);
         }  
        } else {
            throw new Error('No input must be empty');
      }
   
  });
}

btn.addEventListener("click", async () => {
  try {
    const message = await alarm(name.value, delay.value);
    txt.textContent = message;
  } catch (error) {
      txt.textContent = `Couldn't set Alarm`;
      console.error(error)
  }
});
