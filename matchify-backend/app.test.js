const request = require("supertest");
const app = require("./app");

describe("API Tests", () => {
  it("should create a profile successfully", async () => {
    const response = await request(app)
      .post("/create-profile")
      .send({
        name: "John",
        age: 30,
        gender: "Male",
        location: "New York",
        interests: "Hiking",
      });
    expect(response.statusCode).toBe(201);
    expect(response.body.message).toBe("Profile created successfully!");
  });

  it("should fail to create profile with missing fields", async () => {
    const response = await request(app).post("/create-profile").send({});
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("All fields are required.");
  });

  it("should successfully login with valid credentials", async () => {
    const response = await request(app)
      .post("/login")
      .send({ username: "tomsmith", password: "SuperSecretPassword!" });
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Login successful.");
  });

  it("should fail login with invalid credentials", async () => {
    const response = await request(app)
      .post("/login")
      .send({ username: "wrong", password: "wrong123" });
    expect(response.statusCode).toBe(401);
    expect(response.body.message).toBe("Invalid credentials.");
  });
});
