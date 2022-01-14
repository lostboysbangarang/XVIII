// import { prettyPrintJson } from 'pretty-print-json';

const API = {
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/workouts", {
        method: "GET",
        headers: { 'Content-Type': 'application/json'}
      }, (req, res) => {
        const json = await res.json();
        console.log(json[json.length - 1])
        return json[json.length -1]

      });
    } catch (err) {
      console.log(err)
    }
    return res;
  },
  async addExercise(data) {
    const id = new Date.now();
    console.log(`\n\n\tData:\n`, data)
    console.log(`\n\tID:\n`, id);

    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },
  async addExerciseLast(data) {
    const id = location.search.split("=")[1];
    // console.log(`\n\n\tData:\n`, data)
    // console.log(`\n\tID:\n`, id);
    const last = await this.getLastWorkout();
    // lastPrint = (last.__id);
    console.log(`\n\n\t\tLast\n\n`,last._id,`\n\n`)

    const res = await fetch(`/api/workouts/${JSON.stringify(last._id).replaceAll('"','')}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },
  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};
