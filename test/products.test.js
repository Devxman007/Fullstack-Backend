const request = require("supertest");
const app = require("../src/index");

describe("Calling /posts with GET", () => {
  test("should response with a 200 status code ", async () => {
    const response = await request(app).get("/admin").send();
    expect(response.status).toBe(200);
  });

  test("It should response with an Array", async () => {
    const response = await request(app).get("/admin").send();
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe("Creating a post without a title", () => {
  test("It should response with 404 status", async () => {
    const response = await request(app).post("/admin").send({
      body: "",
    });

    expect(response.status).toBe(404);
  });
});
