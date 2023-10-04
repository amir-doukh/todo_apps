const request = require("supertest");
const app = require("./bin/www");

describe(" GET /allItems: ", () => {
  test("Recuperation de tous les élements", async () => {
    const userId = "123"; // Replace with a valid user ID
    const response = await request(app).get(`/allItems`);
    expect(response.status).toBe(200);
  });
});
