import Link from 'next/link';

export default function FatWorkout({ workout_days }: { workout_days: number }) {
  const programs = {
    days_2: [
      {
        workout_type: 'Strength Training and Cardio',
        exercices: [
          {
            name: 'Bodyweight Squats',
            sets: '3',
            reps: '15 - 20',
          },
          {
            name: 'Push-ups ',
            sets: '3',
            reps: '15 - 20',
          },
          {
            name: 'Jumping Jacks',
            sets: '3',
            reps: '1 minute',
          },
          {
            name: 'Lunges',
            sets: '3',
            reps: '10 - 12 per leg',
          },
          {
            name: 'Plank',
            sets: '3',
            reps: '30 - 45 seconds',
          },
          {
            name: 'Cardio (Running, Rowing, Cycling, Swimming ...)',
            sets: '1',
            reps: '20 - 30 minutes',
          },
        ],
      },
      {
        workout_type: 'HIIT',
        exercices: [
          { name: 'Burpees', sets: '3 - 4', reps: '30 seconds' },
          { name: 'Mountain climbers', sets: '3 - 4', reps: '30 seconds' },
          { name: 'High knees', sets: '3 - 4', reps: '30 seconds' },
          { name: 'Jump squats', sets: '3 - 4', reps: '30 seconds' },
          { name: 'Bicycle crunches', sets: '3 - 4', reps: '30 seconds' },
          {
            name: 'Cardio (Running, Rowing, Cycling, Swimming ...)',
            sets: '1',
            reps: '10 - 15 minutes',
          },
        ],
      },
    ],

    days_3: [
      {
        workout_type: 'Strength Training and Cardio',
        exercices: [
          {
            name: 'Bodyweight Squats',
            sets: '3',
            reps: '15 - 20',
          },
          {
            name: 'Push-ups ',
            sets: '3',
            reps: '15 - 20',
          },
          {
            name: 'Jumping Jacks',
            sets: '3',
            reps: '1 minute',
          },
          {
            name: 'Lunges',
            sets: '3',
            reps: '10 - 12 per leg',
          },
          {
            name: 'Plank',
            sets: '3',
            reps: '30 - 45 seconds',
          },
          {
            name: 'Cardio (Running, Rowing, Cycling, Swimming ...)',
            sets: '1',
            reps: '20 - 30 minutes',
          },
        ],
      },
      {
        workout_type: 'HIIT',
        exercices: [
          { name: 'Burpees', sets: '3 - 4', reps: '30 seconds' },
          { name: 'Mountain climbers', sets: '3 - 4', reps: '30 seconds' },
          { name: 'High knees', sets: '3 - 4', reps: '30 seconds' },
          { name: 'Jump squats', sets: '3 - 4', reps: '30 seconds' },
          { name: 'Bicycle crunches', sets: '3 - 4', reps: '30 seconds' },
          {
            name: 'Cardio (Running, Rowing, Cycling, Swimming ...)',
            sets: '1',
            reps: '10 - 15 minutes',
          },
        ],
      },
      {
        workout_type: 'Active Recovery',
        exercices: [
          {
            name: 'Low-Intensity Cardio (walking, light cycling)',
            sets: '1',
            reps: '30 - 45 Minutes',
          },
          { name: 'Stretching', sets: '1', reps: '10 - 15 Minutes' },
        ],
      },
    ],

    days_4: [
      {
        workout_type: 'Strength Training and Cardio',
        exercices: [
          {
            name: 'Bodyweight Squats',
            sets: '3',
            reps: '15 - 20',
          },
          {
            name: 'Push-ups ',
            sets: '3',
            reps: '15 - 20',
          },
          {
            name: 'Jumping Jacks',
            sets: '3',
            reps: '1 minute',
          },
          {
            name: 'Lunges',
            sets: '3',
            reps: '10 - 12 per leg',
          },
          {
            name: 'Plank',
            sets: '3',
            reps: '30 - 45 seconds',
          },
          {
            name: 'Cardio (Running, Rowing, Cycling, Swimming ...)',
            sets: '1',
            reps: '20 - 30 minutes',
          },
        ],
      },
      {
        workout_type: 'HIIT',
        exercices: [
          { name: 'Burpees', sets: '3 - 4', reps: '30 seconds' },
          { name: 'Mountain climbers', sets: '3 - 4', reps: '30 seconds' },
          { name: 'High knees', sets: '3 - 4', reps: '30 seconds' },
          { name: 'Jump squats', sets: '3 - 4', reps: '30 seconds' },
          { name: 'Bicycle crunches', sets: '3 - 4', reps: '30 seconds' },
          {
            name: 'Cardio (Running, Rowing, Cycling, Swimming ...)',
            sets: '1',
            reps: '10 - 15 minutes',
          },
        ],
      },
      {
        workout_type: 'Active Recovery',
        exercices: [
          {
            name: 'Low-Intensity Cardio (walking, light cycling)',
            sets: '1',
            reps: '30 - 45 Minutes',
          },
          { name: 'Stretching', sets: '1', reps: '10 - 15 Minutes' },
        ],
      },
      {
        workout_type: 'Light Cardio',
        exercices: [
          {
            name: 'light cardio (brisk walking, cycling, or swimming)',
            sets: '1',
            reps: '30 Minutes',
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
                          </a>
                          <a
                            target="_blank"
                            className="d-flex align-items-center text-info text-decoration-none ms-3"
                            href={`https://www.google.com/search?q=${exercice.name}&tbm=isch`}
                          >
                            <span>See Images</span>
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

  // 4 days or more
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
                        </a>
                        <a
                          target="_blank"
                          className="d-flex align-items-center text-info text-decoration-none ms-3"
                          href={`https://www.google.com/search?q=${exercice.name}&tbm=isch`}
                        >
                          <span>See Images</span>
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
