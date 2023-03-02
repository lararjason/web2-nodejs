# WEB2 Node.js Avslutnings projekt

Mitt bildupplandingssida.

# Webpack för Front-End Require

### Kör: 
    - npm install function-plot --save-dev
    - npm install webpack webpack-cli --save-dev

### Titta på:
    - webpack.config.js
    - Den letar efter en functionplot.js (som i sin tur imporerar function-plot noden)
    - Sen compile:ar du, med webpack, allt till en app.js i public-mappen som du sedan kan köra

### Uppdatera package.json
Till att under scripts lägga till "build": "webpack"  
Du kör sedan npm run webpack för att compliea.  

### Hur funkar function-plot?
Kolla i src/functionPlot.js
    


## Uppdatering:
I functionplot.js finns nu mera en uppdatering för att köra en function direkt från en input.