## Weather Forecast

A basic Next.js Web Application that you can login using github and search the weather in your city.

### NEXT-AUTH
* [https://next-auth.js.org/getting-started/introduction](https://next-auth.js.org/getting-started/introduction)
* NextAuth.js is a complete open-source authentication solution for Next.js applications.
* Weather forecast used next-auth for login authentication using GitHub Credentials

### API
`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apiKey}`

### Styling
* Weather forecast used .modules, sass and BEM-Methodology for styling.

### Running the local environment ###

To run the project on your localhost:
  1. Clone the repository and run `https://github.com/jrso15/weather-forecast.git`
  2. Go to the project `cd weather-forecast`
  3. Get the required node modules by installing `npm i` or `npm install`
  4. Create a `.env.local` file to store the required environments.
  5. Change the required values for keys/secrets in `next.config.js`.
  6. Run `npm run dev` to run the project.
  7. Confirm everything is set up properly by opening [http://localhost:3000](http://localhost:3000) in your browser.
