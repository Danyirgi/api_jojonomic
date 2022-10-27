import { assert } from "chai";
import weatherAPI from "../pages/weather.api";
import * as data from "../data/weather.data";

describe('Test weather', () => {
    it('Should get weather from lat and lon', async() => {
        const response = await weatherAPI.current_weather(data.PARAMS_WEATHER);
        let jsonData = response.data
        console.log(jsonData.status);
        console.log(jsonData.data[0].state_code);

        assert.equal(response.status, 200);
        assert.equal(jsonData.data[0].state_code, 'NY');
    });
});

describe('Test forecast', () => {
    it('Should get forecast from postal code and hours', async() => {
        const response = await weatherAPI.forecast_weather(data.PARAMS_FORECAST);
        let jsonData = response.data
        console.log(jsonData.status);
        console.log(jsonData.data[0].timestamp_utc);
        console.log(jsonData.data[0].weather);

        assert.equal(response.status, 200);
    });
});