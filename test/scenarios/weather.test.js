import { assert } from "chai";
import weatherbitAPI from "../pages/weather.api";
import * as data from "../data/weather.data";

describe('Test weather', () => {
    it('Should get weather from lat and lon', async() => {
        const response = await weatherbitAPI.get_current_weather(data.VALID_PARAMS);
        let jsonData = response.data
        // console.log(jsonData.data);
        console.log(jsonData.data[0].state_code);
        console.log(jsonData.status);

        assert.equal(response.status, 200);
        assert.equal(jsonData.data[0].state_code, 'NY');
    });
});

describe('Test forecast', () => {
    it('Should get forecast from postal code and hours', async() => {
        const response = await weatherbitAPI.get_forecast_weather(data.VALID_PARAMS);
        let jsonParse = response.data
        console.log(jsonParse.data[0].timestamp_utc);
        console.log(jsonParse.data[0].weather);

        assert.equal(response.status, 200);
        assert.equal(jsonParse.data[0].timestamp_utc, '2022-10-26T10:00:00');
        assert.equal(jsonParse.data[0].weather.code, '804');
        assert.equal(jsonParse.data[0].weather.description, 'Overcast clouds');
        assert.equal(jsonParse.data[0].weather.icon, 'c04n');
    });
});