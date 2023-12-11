const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const User = require("../models/userModel");
const Workout = require("../models/workoutModel");
const workouts = require("./data/workouts.js");

let token = null;

beforeAll(async () => {
  await User.deleteMany({});
  const result = await api
    .post("/api/user/signup")
    .send({ email: "mattiv@matti.fi", password: "R3g5T7#gh" });
  token = result.body.token;
});

describe("Workouts API", () => {
  describe("when there is initially some workouts saved", () => {
    beforeEach(async () => {
      await Workout.deleteMany({});
      await api
        .post("/api/workouts")
        .set("Authorization", `bearer ${token}`)
        .send(workouts[0])
        .send(workouts[1]);
    });

    it("should return workouts as JSON", async () => {
      await api
        .get("/api/workouts")
        .set("Authorization", `bearer ${token}`)
        .expect(200)
        .expect("Content-Type", /application\/json/);
    });

    it("should add a new workout successfully", async () => {
      const newWorkout = {
        title: "testworkout",
        reps: 10,
        load: 100,
      };
      await api
        .post("/api/workouts")
        .set("Authorization", `bearer ${token}`)
        .send(newWorkout)
        .expect(201);
    });
  });
});

// Create backend tests to validate the functionality of the following operations: delete, update, and reading a single workout

describe("when there is initially some workouts saved", () => {
  describe("deleting a workout", () => {
    it("should return 200 if delete a workout successfully", async () => {
      // Test: Delete a workout successfully
      const newWorkout = {
        title: "testworkout",
        reps: 10,
        load: 100,
      };

      const response = await api
        .post("/api/workouts")
        .set("Authorization", `bearer ${token}`)
        .send(newWorkout)
        .expect(201);

      const workoutId = response.body._id;

      await api
        .delete(`/api/workouts/${ workoutId }`)
        .set("Authorization", `bearer ${ token }`)
        .expect(200)

    });
  });
});
describe("updating a workout", () => {
  it("should return 200 if the workout is updated successfully", async () => {
    const newWorkout = {
      title: "testworkout",
      reps: 10,
      load: 100,
    };
    const response = await api
      .post("/api/workouts")
      .set("Authorization", `bearer ${token}`)
      .send(newWorkout)
      .expect(201);

    const updatedWorkout = {
      title: "testworkout",
      reps: 20,
      load: 200,
    };
    await api
      .patch(`/api/workouts/${response.body._id}`)
      .set("Authorization", `bearer ${token}`)
      .send(updatedWorkout)
      .expect(200);
  });
});
describe("reading a single workout", () => {
  it("should return 200 if the workout is read successfully", async () => {
    const newWorkout = {
      title: "testworkout",
      reps: 10,
      load: 100,
    };
    const response = await api
      .post("/api/workouts")
      .set("Authorization", `bearer ${token}`)
      .send(newWorkout)
      .expect(201);

    await api
      .get(`/api/workouts/${response.body._id}`)
      .set("Authorization", `bearer ${token}`)
      .expect(200);
  });
});
