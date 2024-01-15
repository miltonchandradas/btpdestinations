const appRouter = require("@sap/approuter");
const router = appRouter();
const jwtDecode = require("jwt-decode");

router.first.use((req, res, next) => {
  console.log("The following request was made...");
  console.log("Method: ", req.method);
  console.log("URL: ", req.url);

  next();
});

router.beforeRequestHandler.use((req, res, next) => {
  if (req.user?.token?.accessToken) {
    console.log("Access Token: ", req.user?.token?.accessToken);
    // let decodedJWTToken = jwtDecode(req.user.token.accessToken);
    // console.log("beforeRequestHandler: Decoded token: ", decodedJWTToken);
  } else {
    console.log("beforeRequestHandler: No token available for the request...");
  }

  next();
});

router.start();
