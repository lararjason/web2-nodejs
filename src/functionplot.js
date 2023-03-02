console.log('!');

import functionPlot from 'function-plot'

function plot(){
  var userFn = document.getElementById("fn").value;

  const options = {
    target: '#root',
    xAxis: { domain: [0, 3] },
    yAxis: { domain: [0, 5] },
    annotations: [
      { x: 1, text: 'a' },
      { x: 2, text: 'b' }
    ],
    data: [
      {
        fn: userFn
      },
      {
        fn: userFn,
        range: [1, 2],
        nSamples: 30,
        closed: true
      }
    ]
  }

  functionPlot(options)
}

window.onload = (event) => {
    console.log("Hello World!");
    var btn = document.getElementById("btn");
    btn.addEventListener("click", plot);
};



    
