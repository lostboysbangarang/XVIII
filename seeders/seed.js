const mongoose = require('mongoose');
const db = require(`../models/workout.js`);

mongoose.connect('mongodb://localhost/workout', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
const Dayyyyo = new Date;
  let year = Dayyyyo.getFullYear()
  let month = Dayyyyo.getMonth()
  let day = Dayyyyo.getDate()
  let hour = Dayyyyo.getUTCHours()
const workoutSeed = [
  {
    exercises: [
      {
        type: 'resistance',
        name: 'Bicep Curl',
        duration: 20,
        weight: 100,
        reps: 10,
        sets: 4,
      },
    ],
    date: [
      {
        year: [year],
        month: [month],
        day: [day - 9],
        hour: [hour- 3]

      }
    ],
    totals: [
      {
        duration: [20],
        weight: [100]
      }
    ]
  },
  {
    exercises: [
      {
        type: 'resistance',
        name: 'Lateral Pull',
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4,
      },
    ],
    date: [
      {
        year: [year],
        month: [month],
        day: [day - 12],
        hour: [hour- 6]

      }
    ],
    totals: [
      {
        duration: [20],
        weight: [300]
      }
    ]
  },
  {
    exercises: [
      {
        type: 'resistance',
        name: 'Push Press',
        duration: 25,
        weight: 185,
        reps: 8,
        sets: 4,
      },
    ],
    date: [
      {
        year: [year],
        month: [month],
        day: [day - 14],
        hour: [hour- 4]

      }
    ],
    totals: [
      {
        duration: [25],
        weight: [185]
      }
    ]
  },
  {
    exercises: [
      {
        type: 'cardio',
        name: 'Running',
        duration: 25,
        distance: 4,
      },
    ],
    date: [
      {
        year: [year],
        month: [month],
        day: [day - 15],
        hour: [hour- 7]

      }
    ],
    totals: [
      {
        duration: [25],
        distance: [4]
      }
    ]
  },
  {
    exercises: [
      {
        type: 'resistance',
        name: 'Bench Press',
        duration: 20,
        weight: 285,
        reps: 10,
        sets: 4,
      },
    ],
    date: [
      {
        year: [year],
        month: [month],
        day: [day - 18],
        hour: [hour- 4]

      }
    ],
    totals: [
      {
        duration: [20],
        weight: [285]
      }
    ]
  },
  {
    exercises: [
      {
        type: 'resistance',
        name: 'Bench Press',
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4,
      },
    ],
    date: [
      {
        year: [year],
        month: [month],
        day: [day - 19],
        hour: [hour- 6]

      }
    ],
    totals: [
      {
        duration: [20],
        weight: [300]
      }
    ]
  },
  {
    exercises: [
      {
        type: 'resistance',
        name: 'Quad Press',
        duration: 30,
        weight: 300,
        reps: 10,
        sets: 4,
      },
    ],
    date: [
      {
        year: [year],
        month: [month],
        day: [day - 21],
        hour: [hour- 6]

      }
    ],
    totals: [
      {
        duration: [30],
        weight: [300]
      }
    ]
  },
  {
    exercises: [
      {
        type: 'resistance',
        name: 'Bench Press',
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4,
      },
    ],
    date: [
      {
        year: [year],
        month: [month],
        day: [day - 22],
        hour: [hour- 3]

      }
    ],
    totals: [
      {
        duration: [20],
        weight: [300]
      }
    ]
  },
  {
    exercises: [
      {
        type: 'resistance',
        name: 'Military Press',
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4,
      },
    ],
    date: [
      {
        year: [year],
        month: [month],
        day: [day - 23],
        hour: [hour- 6]

      }
    ],
    totals: [
      {
        duration: [20],
        weight: [300]
      }
    ]
  },
];

// console.log(`\n\n\t\t\tdb\n`, new db);

// runny = (() => {
//   y = db.collection.getIndexes();
//   return y;
// })
// console.log(db.getIndexes())

// db.collection.getIndexes().then(res => {
//   console.log(res)
// })

db.collection.insertMany(workoutSeed)
  // .then(() => db.collection.insertMany(workoutSeed))
  // // .then(() => {
  // // })
  .then((data) => {
    
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
  
