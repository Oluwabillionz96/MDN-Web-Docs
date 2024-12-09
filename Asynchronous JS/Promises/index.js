const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

console.log(fetchPromise);

fetchPromise.then((res) => {
    if (!res.ok){
        throw new Error(`HTTP Error: ${res.status}`);
    }

    return res.json(); 

})
 .then((data) => {
     const one = data
     console.log(`Name......................Price`);
     for (const dat of data) {
         console.log(` ${dat.name}...............$${dat.price}`);   
     }
 })
    .catch((error) => {
        console.error(`Could not fetch Products: ${error}`);
})