### 📘&nbsp; Description
   This repo contains automation api for weatherbitio
   first test to test current weather api
   second test to test forecast weather api

### GETTING STARTED
API Automation using mocha and chai.

## 🚀&nbsp; Installation
1. Register to get the API token key -  [https://www.weatherbit.io/account/create](https://www.weatherbit.io/account/create)
2. Clone the repo
   ```sh
   git clone https://github.com/Danyirgi/api_jojonomic.git
   ```
3. go to project directory

4. Install Yarn Dependencies
   ```sh
   yarn add
   ```
5. Add file `.env` and Enter your API Token
   ```
    "KEY": "your_own_token_from_weatherbitio",
    "BASE_URL"= "https://api.weatherbit.io/v2.0/",
   ```

### How to run
Run Specific Api test File

  ```sh
  yarn run mocha:test
  ```


### How to Trigger CI (Github Action)
1. Commit Changes
2. Push to repository
3. Check Github Action Tab
