const { expect } = require("chai");
const supertest = require("supertest");
const { baseURL } = require("../globalVariable");

describe("Get Users", () => {
  it("Succes All Users", async () => {
    const response = await supertest(baseURL).get("/api/users/2");
    console.log(response.body);
    expect(response.status).equal(200);
    expect(response.body.id).equal("2");
  });
});
