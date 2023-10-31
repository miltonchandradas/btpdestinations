const cds = require("@sap/cds");
const { executeHttpRequest } = require("@sap-cloud-sdk/http-client");

module.exports = async (srv) => {
  srv.on("getApplications", async (req) => {
    try {
      let response = await executeHttpRequest(
        {
          destinationName: "CFEnv",
        },
        {
          method: "get",
          url: "/v2/apps",
        }
      );

      let data = response.data.resources;
      return data;
    } catch (error) {
      console.log(error);
    }
  });
};
