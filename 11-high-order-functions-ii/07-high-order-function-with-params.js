/* 

  what if it takes in a parameter?

  OLD EXAMPLES
  https://goo.gl/DejnHB
  https://goo.gl/qYWCPL

}

let rosalindGreeter = getGreeter('Rosalind');
rosalindGreeter();
rosalindGreeter();


let sulamitaGreeter = getGreeter('Sulamita');
sulamitaGreeter();
rosalindGreeter();
sulamitaGreeter();

function getGreeter(name) {
  let hellos = 0;
  
  return function() {
    console.log(`Hi ${name}, I have said hi ${hellos} number of times`);
    hellos++;
  };
}

let rosalindGreeter = getGreeter('Rosalind');
rosalindGreeter();

let marieGreeter = getGreeter('Marie');
marieGreeter();
marieGreeter();