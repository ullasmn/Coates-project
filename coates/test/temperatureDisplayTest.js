const coatesClass = require('../src/coates')
const coatesTest = new coatesClass()

getMinimumTemperatureSpread()

async function getMinimumTemperatureSpread(){
    let tempObject = await coatesTest.calculateTemp()
    //console.log('Temperature Object is : '+ JSON.stringify(tempObject))
    console.log('Month is : '+ coatesTest.getMonth())
    console.log('Maximum Temperature is : '+ coatesTest.getMeanMaximumTemperature())
    console.log('Minimum Temperature is : '+ coatesTest.getMeanMinimumTemperature())
    console.log('Minimum Temperature Spread is : '+ coatesTest.getMinimumTempSpread())
    console.log('List Of Temperature Spread is : '+ JSON.stringify(coatesTest.getListOfTemperatureSpreads()))
};

