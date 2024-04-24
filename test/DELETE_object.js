const { expect } = require("chai");
const supertest = require("supertest");
const { baseURL } = require("../globalVariable");

describe("Delete User", () => {
  it("Succes Delete User", async () => {
    const response = await supertest(baseURL).get("/api/users/2");
  });
});
