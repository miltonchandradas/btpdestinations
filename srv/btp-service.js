const cds = require("@sap/cds");
const { executeHttpRequest } = require("@sap-cloud-sdk/http-client");

module.exports = async (srv) => {
  srv.on("getApplications", async (req) => {
    try {
      let response = await executeHttpRequest(
        {
          destinationName: "cfapi",
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


  srv.on("getUsers", async (req) => {
    try {
      let response = await executeHttpRequest(
        {
          destinationName: "sfapi",
        },
        {
          method: "get",
          url: "/odata/v2/User?$top=2",
        }
      );

      let data = response.data;
      console.log("Data: ", data)

      return data;
    } catch (error) {
      console.log(error);
    }

    return "OK";
  });
};
