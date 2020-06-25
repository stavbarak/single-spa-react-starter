import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "app2",
  app: () =>
    System.import(
      "http://localhost:8080/src/index.js"
    ),
  activeWhen: ["/app2"],
});



start({
  urlRerouteOnly: true,
});
