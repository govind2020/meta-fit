import Link from 'next/link';

export default function CardiovascularWorkout({
  workout_days,
}: {
  workout_days: number;
}) {
  const programs = {
    days_2: [
      {
        workout_type: 'Aerobic',
        exercices: [
          {
            name: 'Cycling / brisk walking / swimming / running',
            sets: '1',
            reps: '20-30 minutes',
          },
        ],
      },
      {
        workout_type: 'HIIT',
        exercices: [{ name: 'Sprint', sets: '6 - 8', reps: '30 seconds' }],
      },
    ],

    days_3: [
      {
        workout_type: 'Aerobic',
        exercices: [
          {
            name: 'Cycling / brisk walking / swimming / running',
            sets: '1',
            reps: '20-30 minutes',
          },
        ],
      },
      {
        workout_type: 'HIIT',
        exercices: [{ name: 'Sprint', sets: '6 - 8', reps: '30 seconds' }],
      },
      {
        workout_type: 'Circuit Training',
        exercices: [
          { name: 'Jumping jacks', sets: '3 - 4', reps: '1 minute' },
          { name: 'Bodyweight squats', sets: '3 - 4', reps: '10 - 15' },
          { name: 'Push-ups', sets: '3 - 4', reps: '10 - 15' },
          { name: 'Burpees', sets: '3 - 4', reps: '10 - 15' },
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

  // 3 days or more
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
