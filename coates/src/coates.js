const readCsvFile = require('csvtojson')

class coates {
    constructor(){
        this.csvPath = __dirname+ '/../data/sydney-temperature.csv'
        this.globalArray = []
        this.minimumSpread = ''
        this.month = ''
        this.meanMaximumTemperature= ''
        this.meanMinimumTemperature = ''
    }

    getListOfTemperatureSpreads(){
        return this.globalArray
    }

    getMinimumTempSpread(){
    return this.minimumSpread
    }

    getMonth(){
        return this.month
    }

    getMeanMaximumTemperature(){
        return this.meanMaximumTemperature.replace('*', '')
    }

    getMeanMinimumTemperature(){
        return this.meanMinimumTemperature.replace('*', '')
    }
 /**
  * calculateTemp() method reads the CSV file & computes the minimum spread of temperature
  * for a particular calendar month & displays the corresponding month.
  */   
    async calculateTemp(){
        let data = await readCsvFile().fromFile(this.csvPath)
        for(let i=1; i<Object.keys(data).length; i++){
            let number = JSON.parse(data[i].field2.replace('*', '')) - JSON.parse(data[i].field3.replace('*', ''))
            number = Math.floor(number*100)/100
            this.globalArray.push(number)    
        }
        this.minimumSpread = Math.min(...this.globalArray)
        let positionOfMinimumSpread = this.globalArray.indexOf(this.minimumSpread)
        this.month = data[positionOfMinimumSpread+1]['Monthly average temperature for Sydney 2019']
        this.meanMaximumTemperature = data[positionOfMinimumSpread+1].field2
        this.meanMinimumTemperature = data[positionOfMinimumSpread+1].field3
        return data[positionOfMinimumSpread+1]
    }
}

module.exports = coates