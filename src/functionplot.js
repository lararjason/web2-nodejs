console.log('!');

import functionPlot from 'function-plot'

window.onload = (event) => {
    console.log("Hello World!");
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
          fn: 'x * x'
        },
        {
          fn: 'x * x',
          range: [1, 2],
          nSamples: 30,
          closed: true
        }
      ]
    }
  
  functionPlot(options)
};



    
