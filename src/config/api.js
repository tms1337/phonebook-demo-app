const { ENV } = process;

const endpoints = {
  development: {
    url: "https://www.mocky.io/v2/581335f71000004204abaf83"
  },
  staging: {
    url: "https://www.mocky.io/v2/581335f71000004204abaf83"
  },
  production: {
    url: "https://www.mocky.io/v2/581335f71000004204abaf83"
  }
};

export default endpoints[ENV || "development"];
