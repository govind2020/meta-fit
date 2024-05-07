import Link from 'next/link';

export default function MuscleWorkout({
  workout_days,
}: {
  workout_days: number;
}) {
  console.log('workout_days==>', workout_days);
  const programs = {
    days_2: [
      {
        workout_type: 'Upper Body',
        exercices: [
          { name: 'Bench Press', sets: '4', reps: '8 - 10' },
          { name: 'Bent Over Barbell Rows', sets: '3', reps: '8 - 10' },
          { name: 'Shoulder Press', sets: '3', reps: '8 - 10' },
          { name: 'Dumbbell Bicep Curls', sets: '3', reps: '8 - 10' },
          { name: 'Dumbbell Tricep Extensions', sets: '3', reps: '8 - 10' },
        ],
      },
      {
        workout_type: 'Lower Body',
        exercices: [
          { name: 'Barbell Squats', sets: '4', reps: '8 - 10' },
          { name: 'Dumbbell Lunges', sets: '3', reps: '10 - 12' },
          { name: 'Deadlift', sets: '3', reps: '8 - 10' },
          { name: 'Calf Raises', sets: '3', reps: '12 - 15' },
          { name: 'Hanging Leg Raises', sets: '3', reps: '12 - 15' },
        ],
      },
    ],

    days_3: [
      {
        workout_type: 'Chest and Triceps',
        exercices: [
          { name: 'Bench Press', sets: '4', reps: '8 - 10' },
          { name: 'Incline Dumbbell Press', sets: '3', reps: '8 - 10' },
          { name: 'Dumbbell Flyes', sets: '3', reps: '10 - 12' },
          { name: 'Close Grip Bench Press', sets: '3', reps: '8 - 10' },
          { name: 'Tricep Dumbbell Kickbacks', sets: '3', reps: '10 - 12' },
          { name: 'Tricep Dips', sets: '3', reps: 'until failure' },
        ],
      },
      {
        workout_type: 'Back and Biceps',
        exercices: [
          { name: 'Deadlifts', sets: '4', reps: '6 - 8' },
          { name: 'Bent-Over Rows', sets: '3', reps: '8 - 10' },
          { name: 'One-Arm Dumbbell Rows', sets: '3', reps: '8 - 10' },
          { name: 'Barbell Bicep Curls', sets: '3', reps: '8 - 10' },
          { name: 'Hammer Curls', sets: '3', reps: '10 - 12' },
          { name: 'Concentration Curls', sets: '3', reps: '10 - 12' },
        ],
      },
      {
        workout_type: 'Legs and shoulders',
        exercices: [
          { name: 'Barbell Squats', sets: '4', reps: '8 - 10' },
          { name: 'Shoulders Press', sets: '4', reps: '8 - 10' },
          { name: 'Dumbbell Lunges', sets: '3', reps: '10 - 12' },
          { name: 'Deadlift', sets: '3', reps: '8 - 10' },
          { name: 'Calf Raises', sets: '3', reps: '12 - 15' },
          { name: 'Hanging Leg Raises', sets: '3', reps: '12 - 15' },
        ],
      },
    ],

    days_4: [
      {
        workout_type: 'Chest and Triceps',
        exercices: [
          { name: 'Bench Press', sets: '4', reps: '8 - 10' },
          { name: 'Incline Dumbbell Press', sets: '3', reps: '8 - 10' },
          { name: 'Dumbbell Flyes', sets: '3', reps: '10 - 12' },
          { name: 'Close Grip Bench Press', sets: '3', reps: '8 - 10' },
          { name: 'Tricep Dumbbell Kickbacks', sets: '3', reps: '10 - 12' },
          { name: 'Tricep Dips', sets: '3', reps: 'until failure' },
        ],
      },
      {
        workout_type: 'Back and Biceps',
        exercices: [
          { name: 'Deadlifts', sets: '4', reps: '6 - 8' },
          { name: 'Bent-Over Rows', sets: '3', reps: '8 - 10' },
          { name: 'One-Arm Dumbbell Rows', sets: '3', reps: '8 - 10' },
          { name: 'Barbell Bicep Curls', sets: '3', reps: '8 - 10' },
          { name: 'Hammer Curls', sets: '3', reps: '10 - 12' },
          { name: 'Concentration Curls', sets: '3', reps: '10 - 12' },
        ],
      },
      {
        workout_type: 'Shoulders and Abs',
        exercices: [
          { name: 'Shoulder Press', sets: '4', reps: '8 - 10' },
          { name: 'Dumbbell Lateral Raises', sets: '3', reps: '10 - 12' },
          { name: 'Dumbbell Front Raises', sets: '3', reps: '10 - 12' },
          { name: 'Dumbbell Shrugs', sets: '3', reps: '10 - 12' },
          { name: 'Plank', sets: '3', reps: '30 - 60 seconds' },
        ],
      },
      {
        workout_type: 'Legs',
        exercices: [
          { name: 'Barbell Squats', sets: '4', reps: '8 - 10' },
          { name: 'Dumbbell Lunges', sets: '3', reps: '10 - 12' },
          { name: 'Deadlift', sets: '3', reps: '8 - 10' },
          { name: 'Calf Raises', sets: '3', reps: '12 - 15' },
          { name: 'Hanging Leg Raises', sets: '3', reps: '12 - 15' },
        ],
      },
    ],

    days_5: [
      {
        workout_type: 'Chest and Triceps',
        exercices: [
          { name: 'Bench Press', sets: '4', reps: '8 - 10' },
          { name: 'Incline Dumbbell Press', sets: '3', reps: '8 - 10' },
          { name: 'Dumbbell Flyes', sets: '3', reps: '10 - 12' },
          { name: 'Close Grip Bench Press', sets: '3', reps: '8 - 10' },
          { name: 'Tricep Dumbbell Kickbacks', sets: '3', reps: '10 - 12' },
          { name: 'Tricep Dips', sets: '3', reps: 'until failure' },
        ],
      },
      {
        workout_type: 'Back and Biceps',
        exercices: [
          { name: 'Deadlifts', sets: '4', reps: '6 - 8' },
          { name: 'Bent-Over Rows', sets: '3', reps: '8 - 10' },
          { name: 'One-Arm Dumbbell Rows', sets: '3', reps: '8 - 10' },
          { name: 'Barbell Bicep Curls', sets: '3', reps: '8 - 10' },
          { name: 'Hammer Curls', sets: '3', reps: '10 - 12' },
          { name: 'Concentration Curls', sets: '3', reps: '10 - 12' },
        ],
      },
      {
        workout_type: 'Shoulders and Abs',
        exercices: [
          { name: 'Shoulder Press', sets: '4', reps: '8 - 10' },
          { name: 'Dumbbell Lateral Raises', sets: '3', reps: '10 - 12' },
          { name: 'Dumbbell Front Raises', sets: '3', reps: '10 - 12' },
          { name: 'Dumbbell Shrugs', sets: '3', reps: '10 - 12' },
          { name: 'Plank', sets: '3', reps: '30 - 60 seconds' },
        ],
      },
      {
        workout_type: 'Legs',
        exercices: [
          { name: 'Barbell Squats', sets: '4', reps: '8 - 10' },
          { name: 'Dumbbell Lunges', sets: '3', reps: '10 - 12' },
          { name: 'Deadlift', sets: '3', reps: '8 - 10' },
          { name: 'Calf Raises', sets: '3', reps: '12 - 15' },
          { name: 'Hanging Leg Raises', sets: '3', reps: '12 - 15' },
        ],
      },
      {
        workout_type: 'Full Body',
        exercices: [
          { name: 'Barbell Squats', sets: '4', reps: '8 - 10' },
          { name: 'Bench Press', sets: '4', reps: '8 - 10' },
          { name: 'Bent-Over Rows', sets: '4', reps: '8 - 10' },
          { name: 'Shoulder Press', sets: '3', reps: '8 - 10' },
          { name: 'Bicep Curls', sets: '3', reps: '8 - 10' },
          { name: 'Tricep Dips', sets: '3', reps: '10 - 12' },
        ],
      },
    ],

    days_6: [
      {
        workout_type: 'Chest and Triceps',
        exercices: [
          { name: 'Bench Press', sets: '4', reps: '8 - 10' },
          { name: 'Incline Dumbbell Press', sets: '3', reps: '8 - 10' },
          { name: 'Dumbbell Flyes', sets: '3', reps: '10 - 12' },
          { name: 'Close Grip Bench Press', sets: '3', reps: '8 - 10' },
          { name: 'Tricep Dumbbell Kickbacks', sets: '3', reps: '10 - 12' },
          { name: 'Tricep Dips', sets: '3', reps: 'until failure' },
        ],
      },
      {
        workout_type: 'Back and Biceps',
        exercices: [
          { name: 'Deadlifts', sets: '4', reps: '6 - 8' },
          { name: 'Bent-Over Rows', sets: '3', reps: '8 - 10' },
          { name: 'One-Arm Dumbbell Rows', sets: '3', reps: '8 - 10' },
          { name: 'Barbell Bicep Curls', sets: '3', reps: '8 - 10' },
          { name: 'Hammer Curls', sets: '3', reps: '10 - 12' },
          { name: 'Concentration Curls', sets: '3', reps: '10 - 12' },
        ],
      },
      {
        workout_type: 'Legs',
        exercices: [
          { name: 'Barbell Squats', sets: '4', reps: '8 - 10' },
          { name: 'Dumbbell Lunges', sets: '3', reps: '10 - 12' },
          { name: 'Deadlift', sets: '3', reps: '8 - 10' },
          { name: 'Calf Raises', sets: '3', reps: '12 - 15' },
          { name: 'Hanging Leg Raises', sets: '3', reps: '12 - 15' },
        ],
      },
      {
        workout_type: 'Shoulders and Abs',
        exercices: [
          { name: 'Shoulder Press', sets: '4', reps: '8 - 10' },
          { name: 'Dumbbell Lateral Raises', sets: '3', reps: '10 - 12' },
          { name: 'Dumbbell Front Raises', sets: '3', reps: '10 - 12' },
          { name: 'Dumbbell Shrugs', sets: '3', reps: '10 - 12' },
          { name: 'Plank', sets: '3', reps: '30 - 60 seconds' },
        ],
      },
      {
        workout_type: 'Full Body',
        exercices: [
          { name: 'Barbell Squats', sets: '4', reps: '8 - 10' },
          { name: 'Bench Press', sets: '4', reps: '8 - 10' },
          { name: 'Bent-Over Rows', sets: '4', reps: '8 - 10' },
          { name: 'Shoulder Press', sets: '3', reps: '8 - 10' },
          { name: 'Bicep Curls', sets: '3', reps: '8 - 10' },
          { name: 'Tricep Dips', sets: '3', reps: '10 - 12' },
        ],
      },
      {
        workout_type: 'Cardio',
        exercices: [
          {
            name: 'Cardio',
            sets: '1',
            reps: '20 - 30 Min (gradually increase the duration and intensity over time)',
          },
        ],
      },
    ],
  };

  // 2 days
  if (workout_days === 2) {
    return (
      <div className="d-flex flex-column mb-5">
        <div className="d-flex flex-column mb-1">
          <h2 className="fw-bold display-4">Workout Plan</h2>
          <span className="text-secondary small fst-normal">
            Tailored Workout Program for You (2 days workout as you requested)
          </span>
        </div>

        {/* Days - details */}
        <div className="flex flex-col gap-16">
          {programs.days_2.map((day, i) => (
            <div key={day.workout_type} className="d-flex flex-column mb-3">
              {/* day */}
              <h3 className="text-bold">
                Day {i + 1} - {day.workout_type}
              </h3>

              {/* exercises */}
              <div className="d-flex flex-column mb-3">
                {day.exercices.map((exercice) => (
                  <div
                    key={exercice.name}
                    className="d-flex align-items-stretch mb-2 position-relative"
                  >
                    <div className="d-flex flex-column pt-1 pe-2 align-items-center">
                      <div
                        className="rounded-circle"
                        style={{
                          width: '16px',
                          height: '16px',
                          backgroundColor: '#e5e7eb',
                        }}
                      ></div>
                      <div
                        className="bg-secondary"
                        style={{
                          width: '2px',
                          height: '100%',
                          margin: '0 auto',
                        }}
                      ></div>
                    </div>
                    <div className="d-flex flex-column">
                      <h3 className="fw-semibold">{exercice.name}</h3>
                      <div className="d-flex align-items-center">
                        <span className="fw-medium">Sets:</span>
                        <span>{exercice.sets}</span>
                      </div>

                      <div className="d-flex align-items-center">
                        <span className="fw-medium">Reps:</span>
                        <span>{exercice.reps}</span>
                      </div>

                      <div className="d-flex align-items-center">
                        <span className="fw-medium">Help:</span>
                        <div className="d-flex align-items-center ms-2">
                          <a
                            target="_blank"
                            className="d-flex align-items-center text-info text-decoration-none"
                            href={`https://www.youtube.com/results?search_query=${exercice.name}`}
                          >
                            <span>Watch Videos</span>
                            {/* Uncomment and import icons as needed */}
                            {/* <AiFillYoutube className="text-danger fs-4 ms-1" /> */}
                          </a>
                          <a
                            target="_blank"
                            className="d-flex align-items-center text-info text-decoration-none ms-3"
                            href={`https://www.google.com/search?q=${exercice.name}&tbm=isch`}
                          >
                            <span>See Images</span>
                            {/* Uncomment and import icons as needed */}
                            {/* <FcGoogle className="fs-4 ms-1" /> */}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // new

  // day 3
  if (workout_days === 3) {
    return (
      <div className="d-flex flex-column mb-5">
        <div className="d-flex flex-column mb-1">
          <h2 className="fw-bold display-4">Workout Plan</h2>
          <span className="text-secondary small fst-normal">
            Tailored Workout Program for You (3 days workout as you requested)
          </span>
        </div>

        {/* Days - details */}
        <div className="flex flex-col gap-16">
          {programs.days_3.map((day, i) => (
            <div key={day.workout_type} className="d-flex flex-column mb-3">
              {/* day */}
              <h3 className="text-bold">
                Day {i + 1} - {day.workout_type}
              </h3>

              {/* exercises */}
              <div className="d-flex flex-column mb-3">
                {day.exercices.map((exercice) => (
                  <div
                    key={exercice.name}
                    className="d-flex align-items-stretch mb-2 position-relative"
                  >
                    <div className="d-flex flex-column pt-1 pe-2 align-items-center">
                      <div
                        className="rounded-circle"
                        style={{
                          width: '16px',
                          height: '16px',
                          backgroundColor: '#e5e7eb',
                        }}
                      ></div>
                      <div
                        className="bg-secondary"
                        style={{
                          width: '2px',
                          height: '100%',
                          margin: '0 auto',
                        }}
                      ></div>
                    </div>
                    <div className="d-flex flex-column">
                      <h3 className="fw-semibold">{exercice.name}</h3>
                      <div className="d-flex align-items-center">
                        <span className="fw-medium">Sets:</span>
                        <span>{exercice.sets}</span>
                      </div>

                      <div className="d-flex align-items-center">
                        <span className="fw-medium">Reps:</span>
                        <span>{exercice.reps}</span>
                      </div>

                      <div className="d-flex align-items-center">
                        <span className="fw-medium">Help:</span>
                        <div className="d-flex align-items-center ms-2">
                          <a
                            target="_blank"
                            className="d-flex align-items-center text-info text-decoration-none"
                            href={`https://www.youtube.com/results?search_query=${exercice.name}`}
                          >
                            <span>Watch Videos</span>
                            {/* Uncomment and import icons as needed */}
                            {/* <AiFillYoutube className="text-danger fs-4 ms-1" /> */}
                          </a>
                          <a
                            target="_blank"
                            className="d-flex align-items-center text-info text-decoration-none ms-3"
                            href={`https://www.google.com/search?q=${exercice.name}&tbm=isch`}
                          >
                            <span>See Images</span>
                            {/* Uncomment and import icons as needed */}
                            {/* <FcGoogle className="fs-4 ms-1" /> */}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // day 4
  if (workout_days === 4) {
    return (
      <div className="d-flex flex-column mb-5">
        <div className="d-flex flex-column mb-1">
          <h2 className="fw-bold display-4">Workout Plan</h2>
          <span className="text-secondary small fst-normal">
            Tailored Workout Program for You (4 days workout as you requested)
          </span>
        </div>

        {/* Days - details */}
        <div className="flex flex-col gap-16">
          {programs.days_4.map((day, i) => (
            <div key={day.workout_type} className="d-flex flex-column mb-3">
              {/* day */}
              <h3 className="text-bold">
                Day {i + 1} - {day.workout_type}
              </h3>

              {/* exercises */}
              <div className="d-flex flex-column mb-3">
                {day.exercices.map((exercice) => (
                  <div
                    key={exercice.name}
                    className="d-flex align-items-stretch mb-2 position-relative"
                  >
                    <div className="d-flex flex-column pt-1 pe-2 align-items-center">
                      <div
                        className="rounded-circle"
                        style={{
                          width: '16px',
                          height: '16px',
                          backgroundColor: '#e5e7eb',
                        }}
                      ></div>
                      <div
                        className="bg-secondary"
                        style={{
                          width: '2px',
                          height: '100%',
                          margin: '0 auto',
                        }}
                      ></div>
                    </div>
                    <div className="d-flex flex-column">
                      <h3 className="fw-semibold">{exercice.name}</h3>
                      <div className="d-flex align-items-center">
                        <span className="fw-medium">Sets:</span>
                        <span>{exercice.sets}</span>
                      </div>

                      <div className="d-flex align-items-center">
                        <span className="fw-medium">Reps:</span>
                        <span>{exercice.reps}</span>
                      </div>

                      <div className="d-flex align-items-center">
                        <span className="fw-medium">Help:</span>
                        <div className="d-flex align-items-center ms-2">
                          <a
                            target="_blank"
                            className="d-flex align-items-center text-info text-decoration-none"
                            href={`https://www.youtube.com/results?search_query=${exercice.name}`}
                          >
                            <span>Watch Videos</span>
                            {/* Uncomment and import icons as needed */}
                            {/* <AiFillYoutube className="text-danger fs-4 ms-1" /> */}
                          </a>
                          <a
                            target="_blank"
                            className="d-flex align-items-center text-info text-decoration-none ms-3"
                            href={`https://www.google.com/search?q=${exercice.name}&tbm=isch`}
                          >
                            <span>See Images</span>
                            {/* Uncomment and import icons as needed */}
                            {/* <FcGoogle className="fs-4 ms-1" /> */}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // day 5
  if (workout_days === 5) {
    return (
      <div className="d-flex flex-column mb-5">
        <div className="d-flex flex-column mb-1">
          <h2 className="fw-bold display-4">Workout Plan</h2>
          <span className="text-secondary small fst-normal">
            Tailored Workout Program for You (5 days workout as you requested)
          </span>
        </div>

        {/* Days - details */}
        <div className="flex flex-col gap-16">
          {programs.days_5.map((day, i) => (
            <div key={day.workout_type} className="d-flex flex-column mb-3">
              {/* day */}
              <h3 className="text-bold">
                Day {i + 1} - {day.workout_type}
              </h3>

              {/* exercises */}
              <div className="d-flex flex-column mb-3">
                {day.exercices.map((exercice) => (
                  <div
                    key={exercice.name}
                    className="d-flex align-items-stretch mb-2 position-relative"
                  >
                    <div className="d-flex flex-column pt-1 pe-2 align-items-center">
                      <div
                        className="rounded-circle"
                        style={{
                          width: '16px',
                          height: '16px',
                          backgroundColor: '#e5e7eb',
                        }}
                      ></div>
                      <div
                        className="bg-secondary"
                        style={{
                          width: '2px',
                          height: '100%',
                          margin: '0 auto',
                        }}
                      ></div>
                    </div>
                    <div className="d-flex flex-column">
                      <h3 className="fw-semibold">{exercice.name}</h3>
                      <div className="d-flex align-items-center">
                        <span className="fw-medium">Sets:</span>
                        <span>{exercice.sets}</span>
                      </div>

                      <div className="d-flex align-items-center">
                        <span className="fw-medium">Reps:</span>
                        <span>{exercice.reps}</span>
                      </div>

                      <div className="d-flex align-items-center">
                        <span className="fw-medium">Help:</span>
                        <div className="d-flex align-items-center ms-2">
                          <a
                            target="_blank"
                            className="d-flex align-items-center text-info text-decoration-none"
                            href={`https://www.youtube.com/results?search_query=${exercice.name}`}
                          >
                            <span>Watch Videos</span>
                            {/* Uncomment and import icons as needed */}
                            {/* <AiFillYoutube className="text-danger fs-4 ms-1" /> */}
                          </a>
                          <a
                            target="_blank"
                            className="d-flex align-items-center text-info text-decoration-none ms-3"
                            href={`https://www.google.com/search?q=${exercice.name}&tbm=isch`}
                          >
                            <span>See Images</span>
                            {/* Uncomment and import icons as needed */}
                            {/* <FcGoogle className="fs-4 ms-1" /> */}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 6 days or 7 days
  return (
    <div className="d-flex flex-column mb-5">
      <div className="d-flex flex-column mb-1">
        <h2 className="fw-bold display-4">Workout Plan</h2>
        <span className="text-secondary small fst-normal">
          Tailored Workout Program for You (6 days workout as you requested)
        </span>
      </div>

      {/* Days - details */}
      <div className="flex flex-col gap-16">
        {programs.days_6.map((day, i) => (
          <div key={day.workout_type} className="d-flex flex-column mb-3">
            {/* day */}
            <h3 className="text-bold">
              Day {i + 1} - {day.workout_type}
            </h3>

            {/* exercises */}
            <div className="d-flex flex-column mb-3">
              {day.exercices.map((exercice) => (
                <div
                  key={exercice.name}
                  className="d-flex align-items-stretch mb-2 position-relative"
                >
                  <div className="d-flex flex-column pt-1 pe-2 align-items-center">
                    <div
                      className="rounded-circle"
                      style={{
                        width: '16px',
                        height: '16px',
                        backgroundColor: '#e5e7eb',
                      }}
                    ></div>
                    <div
                      className="bg-secondary"
                      style={{
                        width: '2px',
                        height: '100%',
                        margin: '0 auto',
                      }}
                    ></div>
                  </div>
                  <div className="d-flex flex-column">
                    <h3 className="fw-semibold">{exercice.name}</h3>
                    <div className="d-flex align-items-center">
                      <span className="fw-medium">Sets:</span>
                      <span>{exercice.sets}</span>
                    </div>

                    <div className="d-flex align-items-center">
                      <span className="fw-medium">Reps:</span>
                      <span>{exercice.reps}</span>
                    </div>

                    <div className="d-flex align-items-center">
                      <span className="fw-medium">Help:</span>
                      <div className="d-flex align-items-center ms-2">
                        <a
                          target="_blank"
                          className="d-flex align-items-center text-info text-decoration-none"
                          href={`https://www.youtube.com/results?search_query=${exercice.name}`}
                        >
                          <span>Watch Videos</span>
                          {/* Uncomment and import icons as needed */}
                          {/* <AiFillYoutube className="text-danger fs-4 ms-1" /> */}
                        </a>
                        <a
                          target="_blank"
                          className="d-flex align-items-center text-info text-decoration-none ms-3"
                          href={`https://www.google.com/search?q=${exercice.name}&tbm=isch`}
                        >
                          <span>See Images</span>
                          {/* Uncomment and import icons as needed */}
                          {/* <FcGoogle className="fs-4 ms-1" /> */}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
