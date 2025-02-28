import chaiHttp from "chai-http";
import * as chai from "chai";
import server from "../server.js"; 

chai.use(chaiHttp);

const { expect } =require (chai);

describe("User  API", () => {
    let testUser ; 

    before(() => {
        console.log("Setting up test environment...");
    });

    beforeEach(async () => {
        testUser  = { name: "Test User", email: "test@example.com" };
        const res = await chai.request(server)
            .post("/users")
            .send(testUser );
        testUser .id = res.body.user.id; 
    });

    afterEach(async () => {
        if (testUser  && testUser .id) {
            await chai.request(server)
                .delete(`/users/${testUser .id}`);
        }
    });

    after(() => {
        console.log("Cleaning up test environment...");
    });

    it("should get all users", async () => {
        const res = await chai.request(server)
            .get("/users");
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
    });

    it("should create a user", async () => {
        const res = await chai.request(server)
            .post("/users")
            .send({ name: "Charlie", email: "charlie@example.com" });
        expect(res).to.have.status(201);
        expect(res.body.user).to.have.property("name", "Charlie");
    });

    it("should update a user", async () => {
        const res = await chai.request(server)
            .put(`/users/${testUser .id}`)
            .send({ name: "Updated User" });
        expect(res).to.have.status(200);
        expect(res.body.user).to.have.property("name", "Updated User");
    });

    it("should get a user by ID", async () => {
        const res = await chai.request(server)
            .get(`/users/${testUser .id}`);
        expect(res).to.have.status(200);
        expect(res.body.user).to.have.property("id", testUser .id);
    });

    it("should delete a user", async () => {
        const res = await chai.request(server)
            .delete(`/users/${testUser .id}`);
        expect(res).to.have.status(204);
    });
});