'use client';

import { useEffect, useState, Suspense } from 'react';
// @ts-ignore
import { useSearchParams } from 'next/navigation';
import CardiovascularWorkout from '@/utils/cardiovascular_workout';
import getBMI from '@/utils/caulculators/bmi';
import calculateCalories from '@/utils/caulculators/calorise';
import getCompositionData from '@/utils/caulculators/composition';
import FatWorkout from '@/utils/fat_workout';
import MuscleWorkout from '@/utils/muscle_workout';

export default function FitnessPageComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FitnessPage />
    </Suspense>
  );
}

function FitnessPage() {
  const searchParams = useSearchParams();
  const [data, setData] = useState<any>(null);
  const [dietDetails, setDietDetails] = useState('');
  const search = searchParams.get('id');

  useEffect(() => {
    const url = `https://meta-fir-json-server.onrender.com/result`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((result) => {
        const filteredData = result.find((item: any) => item.id == search);
        setData(filteredData);
        setDietDetails(filteredData.current_diet);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [search]);

  // bmi
  const { bmi, healthy, overweight, status, underweight, ideal_weight } =
    getBMI({
      height: data?.height,
      weight: data?.weight,
      gender: data?.gender,
      fitness_goal: data?.fitness_goal || 'build_muscle',
    });

  // composition
  const composition = getCompositionData({
    age: data?.age,
    body_type: data?.body_type,
    gender: data?.gender,
    height: data?.height,
    hip: data?.hip,
    is_fat_accurate: data?.is_fat_accurate ?? null,
    neck: data?.neck,
    waist: data?.waist,
    fitness_goal: data?.fitness_goal || 'build_muscle',
  });

  // calories
  const calory_data = calculateCalories({
    activity: data?.activity,
    age: data?.age,
    current_weight: data?.weight,
    fitness_goal: data?.fitness_goal || 'build_muscle',
    gender: data?.gender,
    height: data?.height,
    ideal_weight,
    workout_days: data?.workout_days || 2,
  });

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-9 px-3 py-4">
          {/* new  */}
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-3xl lg:text-4xl flex-shrink-0">
              General Overview
            </h2>
            <span className="text-neutral-400 text-sm font-normal">
              A general overview on the fitness plan and current health
            </span>
          </div>

          {/* weight assignmnet  */}
          <div className="d-flex flex-column">
            <h3 className="fs-4 fw-semibold">Weight Assessment</h3>
            <div>
              Your current weight ({data?.overview?.weight} Kg) is considered
              {status === 'healthy' && (
                <span className="fw-semibold fs-4 text-success"> Healthy</span>
              )}
              {status === 'underweight' && (
                <span className="fw-semibold fs-4 text-warning">
                  {' '}
                  Under Weight
                </span>
              )}
              {status === 'overweight' && (
                <span className="fw-semibold fs-4 text-warning">
                  {' '}
                  Over Weight
                </span>
              )}
              {status === 'obese' && (
                <span className="fw-semibold fs-4 text-danger"> Obese</span>
              )}
            </div>

            {/* <!-- Bar chart visualization --> */}
            <div className="w-100 d-flex flex-column mb-4">
              <div className="w-100 h-2 rounded shadow d-flex text-white fw-semibold text-xs">
                <div
                  className="flex-fill bg-warning rounded-start align-items-center d-flex justify-content-center"
                  style={{ width: '18%' }}
                >
                  Underweight
                </div>
                <div
                  className="h-100"
                  style={{
                    width: '4%',
                    background: 'linear-gradient(to right, #ffc107, #28a745)',
                  }}
                ></div>
                <div
                  className="flex-fill bg-success align-items-center d-flex justify-content-center"
                  style={{ width: '38%' }}
                >
                  Healthy
                </div>
                <div
                  className="h-100"
                  style={{
                    width: '4%',
                    background: 'linear-gradient(to right, #28a745, #ffc107)',
                  }}
                ></div>
                <div
                  className="flex-fill bg-warning align-items-center d-flex justify-content-center"
                  style={{ width: '20%' }}
                >
                  Overweight
                </div>
                <div
                  className="h-100"
                  style={{
                    width: '4%',
                    background: 'linear-gradient(to right, #ffc107, #fd7e14)',
                  }}
                ></div>
                <div
                  className="flex-fill bg-danger rounded-end align-items-center d-flex justify-content-center"
                  style={{ width: '20%' }}
                >
                  Obese
                </div>
              </div>
            </div>

            <div className="bg-light text-sm text-secondary pt-2">
              <div className="d-flex flex-column gap-2">
                <div className="fs-5 fw-semibold text-info d-flex align-items-center gap-2">
                  <i className="fas fa-info-circle"></i> Note
                </div>
                <p className="d-flex flex-wrap gap-1">
                  This result was calculated based on your BMI. The BMI offers
                  insight into your weight status but overlooks factors like
                  muscle mass and body composition. Two people with the same BMI
                  may have differing health profiles.
                </p>
              </div>
            </div>
          </div>

          {/* composition  */}
          <div className="d-flex flex-column w-100 p-4">
            {' '}
            <h3 className="h5 fw-semibold mb-3">
              Body Composition Analysis
            </h3>{' '}
            <div className="d-flex align-items-center gap-2">
              Your current body composition ({composition.fat_percentage}%) is
              considered
              {composition.is_healthy ? (
                <span className="fw-semibold fs-4 text-success">Healthy</span>
              ) : (
                <span className="fw-semibold fs-4 text-warning">OverFat</span>
              )}
            </div>
          </div>

          {/* chart v2 */}
          <div className="d-flex flex-column w-100 mb-4">
            <div className="d-flex w-100 h-2 rounded shadow bg-light text-white fw-semibold text-xs">
              <div
                className="d-flex align-items-center rounded-start bg-success"
                style={{ width: '48%' }}
              >
                <span className="mx-auto">Healthy</span>
              </div>

              <div className="gradient-divider"></div>

              <div className="label-container">
                <div
                  className="bg-secondary mx-auto"
                  style={{ width: '2px', height: '12px' }}
                ></div>
                <div
                  className="label-text text-secondary text-center"
                  style={{ width: '40px' }}
                >
                  {composition.max_value}%
                </div>
              </div>

              <div
                className="d-flex align-items-center rounded-end bg-warning"
                style={{ width: '48%' }}
              >
                <span className="mx-auto">Overfat</span>
              </div>
            </div>
          </div>

          <div className="card bg-light text-secondary pt-3">
            <div className="card-body d-flex flex-column gap-2">
              <div className="h5 fw-semibold text-info d-flex align-items-center gap-2">
                {/* <FaInfoCircle /> */}
                Note
              </div>
              <p className="small">
                Your current body composition health result has been calculated
                taking into account your gender and age. This personalized
                approach helps provide a more accurate assessment of your
                specific health status
              </p>
            </div>
          </div>
        </div>

        {/* this div is remaning  */}
        <div
          className="d-flex flex-column flex-lg-row align-items-center w-100 justify-content-between"
          style={{ gap: '40px' }}
        >
          {/* taget weight  */}
          <div className="d-flex flex-column w-100  p-3">
            <h3 className="fs-5 fw-bold">Target Weight Recommendation</h3>
            <div className="fs-1 fw-bold text-success">{ideal_weight} Kg</div>

            {ideal_weight === data?.overview?.weight &&
              data.overview?.fitness_goal !== 'build_muscle' && (
                <p>
                  Based D. R. Miller Formula, your current weight is considered
                  perfect, make sure to maintain this weight.
                </p>
              )}

            {ideal_weight !== data?.overview?.weight &&
              data?.overview?.fitness_goal !== 'build_muscle' && (
                <p>
                  Based D. R. Miller Formula and your fitness goal, the ideal
                  weight that you can achieve is
                  {ideal_weight} Kg.
                </p>
              )}
            {data?.overview?.fitness_goal === 'build_muscle' && (
              <p>
                Since your fitness goal is to build muscles, you need to aim for
                {ideal_weight} Kg to look muscular. Keep in mind that weight
                only is not sufficient, the body fat percentage is also an
                important factor.
              </p>
            )}
          </div>
          {/* Body Composition Recommendation */}
          <div className="d-flex flex-column w-100 p-3">
            <h3 className="fs-4 fw-bold">Body Composition Recommendation</h3>
            <div className="fs-1 fw-bold text-success">
              {' '}
              {composition.ideal_fat <= composition.fat_percentage
                ? composition.ideal_fat
                : composition.fat_percentage}
              %
            </div>
            {composition.ideal_fat >= composition.fat_percentage ? (
              <p>
                Your current body fat percentage is already considered perfect,
                so our job is to make sure that you keep this body composition.
              </p>
            ) : (
              <p>
                Based on Jackson & Pollock Ideal Body Fat Percentages and your
                fitness goal, the perfect body composition that you can work on
                is {composition.ideal_fat}%.
              </p>
            )}
          </div>
        </div>
        {/* summary  */}
        <div className="d-flex flex-column mb-3">
          <h3 className="h5 fw-bold">Summary</h3>
          <p>
            As a summary, your goal is to
            {data?.overview?.weight &&
            typeof ideal_weight === 'number' &&
            data?.overview.weight > ideal_weight
              ? `Your goal is to lose ${
                  data?.overview.weight - ideal_weight
                } Kg to reach the ideal weight suggested (${ideal_weight} kg).`
              : 'Your goal is to maintain your current weight or discuss further steps with your healthcare provider.'}
            {data?.overview?.weight !== undefined &&
              typeof ideal_weight === 'number' &&
              data?.overview.weight < ideal_weight &&
              `gain ${
                ideal_weight - data?.overview.weight
              } Kg to reach the ideal weight suggested (${ideal_weight} kg), `}
            {data?.overview?.weight === ideal_weight &&
              ' maintain your current weight, '}
            and for the body composition you should
            {composition.fat_percentage > composition.ideal_fat &&
              ` burn ${
                composition.fat_percentage - composition.ideal_fat
              } % of body fat to reach the ideal body composition suggested (${
                composition.ideal_fat
              } %).`}
            {composition.fat_percentage <= composition.ideal_fat &&
              ' maintain your current body fat percentage.'}
          </p>
        </div>
        {/* workout */}
        {/* {data?.fitness_goal === 'build_muscle' && (
          <MuscleWorkout workout_days={data?.workout_days} />
        )} */}

        <MuscleWorkout workout_days={data?.workout_days} />

        {data?.fitness_goal === 'cardiovascular' && (
          <CardiovascularWorkout workout_days={data?.workout_days} />
        )}
        {data?.fitness_goal === 'burn_fats' && (
          <FatWorkout workout_days={data?.workout_days} />
        )}
      </div>
    </div>
  );
}
