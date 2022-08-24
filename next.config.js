module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: [],
    loader: "imgix",
    path: "",
  },
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    };
  },
  env: {
    SITE_URL: "http://localhost:3000/",
    GITHUB_CLIENT_ID: "Iv1.3679576c64587634",
    GITHUB_CLIENT_SECRET: "<GITHUB-SECRET>",
    API_URL: "https://api.openweathermap.org/",
    API_KEY: "<API-KEY>",
  },
};
