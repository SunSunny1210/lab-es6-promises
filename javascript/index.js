
// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
}, (error) => console.log(error));
 
getInstruction("mashedPotatoes", 1, (step2) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
}, (error) => console.log(error));
 
getInstruction("mashedPotatoes", 2, (step3) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
}, (error) => console.log(error));
 
getInstruction("mashedPotatoes", 3, (step4) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
}, (error) => console.log(error));
 
getInstruction("mashedPotatoes", 4, (step5) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
}, (error) => console.log(error));*/



// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += '<li>Mashed Potatoes are ready!</li>'
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((step1) => document.querySelector("#steak").innerHTML += `<li>${step1}</li>`)
  .then(() => obtainInstruction('steak', 1))
  .then((step2) => document.querySelector("#steak").innerHTML += `<li>${step2}</li>`)
  .then(() => obtainInstruction('steak', 2))
  .then((step3) => document.querySelector("#steak").innerHTML += `<li>${step3}</li>`)
  .then(() => obtainInstruction('steak', 3))
  .then((step4) => document.querySelector("#steak").innerHTML += `<li>${step4}</li>`)
  .then(() => obtainInstruction('steak', 4))
  .then((step5) => document.querySelector("#steak").innerHTML += `<li>${step5}</li>`)
  .then(() => obtainInstruction('steak', 5))
  .then((step6) => document.querySelector("#steak").innerHTML += `<li>${step6}</li>`)
  .then(() => obtainInstruction('steak', 6))
  .then((step7) => document.querySelector("#steak").innerHTML += `<li>${step7}</li>`)
  .then(() => obtainInstruction('steak', 7))
  .then((step8) => document.querySelector("#steak").innerHTML += `<li>${step8}</li>`)
  .catch((error) => console.log(error))
  .finally(() => document.querySelector('#steak').innerHTML += '<li>Steak is ready!</li>')
// Iteration 3 using async/await
function broccoliSteps(step) {
  return new Promise((resolve, reject) => {
    if (broccoli[step]) {
      document.querySelector('#broccoli').innerHTML += `<li>${broccoli[step]}</li>`;
      resolve()
    } else {
      reject()
    }
  })
}
async function makeBroccoli() {
  try {
   await broccoliSteps(0)
   await broccoliSteps(1)
   await broccoliSteps(2)
   await broccoliSteps(3)
   await broccoliSteps(4)
   await broccoliSteps(5)
   await broccoliSteps(6)
  } catch (error) {
    console.log(error)
  } finally {
    document.querySelector('#broccoli').innerHTML += '<li>Broccoli is ready!</li>'
  }
}
makeBroccoli();
// Bonus 2 - Promise all
// ...