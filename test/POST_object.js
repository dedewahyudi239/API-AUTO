const { expect } = require("chai");
const supertest = require("supertest");
const { baseURL } = require("../globalVariable");

describe("POST User", () => {
  it("Succes POST User", async () => {
    const response = await supertest(baseURL).post("/api/users").send({
      name: "morpheus",
      job: "leader",
    });
    console.log(response.body);
    expect(response.status).equal(201);
    expect(response.body.name).equal("morpheus");
  });
});
