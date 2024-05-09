/* eslint-disable react-hooks/rules-of-hooks */

'use client';

import { useState } from 'react';
// @ts-ignore
import { useRouter } from 'next/navigation';
import AboutHero from '@/components/AboutHero';
import Picker from '@/components/Picker';
import NotFound from '../not-found';

const fitnessData = {
  id: 'BasicInfoCard',
  icon: '📝',
  title: 'Personal Informations 📝',
  description: 'We need some basic informations from you to start',
  component: null,
  answers: {
    name: '',
    email: '',
    phone: '',
    age: 22,
    gender: 'M',
    height: 175,
    weight: 70,
    body_type: 'healthy',
    neck: 50,
    waist: 90,
    hip: 60,
    workout_days: 2,
    is_fat_accurate: null,
    fitness_goal: 'build_muscle',
  },
};

const page = () => {
  const [myanswers, setMyAnswers] = useState(fitnessData?.answers);
  const [sex, setSex] = useState('');
  const [fitnessGoal, setFitnessGoal] = useState('');
  const [newId, setNewId] = useState('');
  const router = useRouter();

  const handleRadioChange = (event: any) => {
    setSex(event.target.value);
  };

  const handleFitnessFoalChange = (event: any) => {
    setFitnessGoal(event.target.value);
    updateAnswer('fitness_goal', fitnessGoal);
  };

  const updateAnswer = (field: keyof typeof myanswers, value: any) => {
    setMyAnswers((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const logAnswers = () => {
    fetch('https://meta-fir-json-server.onrender.com/result', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(myanswers),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Submitted Successfully:', data);
        setNewId(data?.id);
        if (!data && !data?.id) {
          <NotFound />;
        } else {
          router.push(`/fitness/fitnessData?id=${data?.id}`);
        }
      })
      .catch((error) => {
        console.error('Failed to submit:', error);
        alert('Failed to submit data');
      });
  };

  return (
    <div className="px-5 mt-5 pt-5">
      {/* <AboutHero /> */}
      <div className="px-5 mt-5 pt-5">
        <div className="text-center">
          <h1>{fitnessData?.title}</h1>
          <p>{fitnessData?.description}</p>
        </div>

        <form className="contact-form-items">
          <div className="input-group mx-1">
            <input
              type="text"
              name="name"
              onChange={(e) => updateAnswer('name', e.target.value)}
              className="form-control"
              placeholder="Full Name"
            />
          </div>
          <div className="input-group mx-1">
            <input
              type="text"
              name="email"
              onChange={(e) => updateAnswer('email', e.target.value)}
              className="form-control"
              placeholder="test@gmail.com"
            />
          </div>
          <div className="input-group mx-1">
            <input
              type="text"
              name="phone"
              onChange={(e) => updateAnswer('phone', e.target.value)}
              className="form-control"
              placeholder="Phone Number"
            />
          </div>
          <div className="my-4">
            <label>How old are you 🎂 ?</label>
            <Picker
              max={100}
              min={18}
              tag="Days per week"
              value={myanswers.age}
              onAdd={() => updateAnswer('age', myanswers.age + 1)}
              onRemove={() =>
                updateAnswer('age', Math.max(0, myanswers.age - 1))
              }
              onSlide={(value: any) => updateAnswer('age', value)}
            />
          </div>
          <div>
            <label>Sex:-</label>
          </div>
          <div className="btn-group gap-5" role="group" aria-label="Sex">
            <input
              type="radio"
              className="btn-check"
              name="options-base"
              id="m"
              value="m"
              onChange={handleRadioChange}
              autoComplete="off"
            />
            <label className="btn btn-outline-primary" htmlFor="m">
              Male
            </label>

            <input
              type="radio"
              className="btn-check"
              name="options-base"
              id="f"
              value="f"
              onChange={handleRadioChange}
              autoComplete="off"
            />
            <label className="btn btn-outline-primary" htmlFor="f">
              Female
            </label>
          </div>
          <div className="my-4">
            <label>Height 📏</label>
            <Picker
              max={1000}
              min={0}
              tag="Days per week"
              value={myanswers.height}
              onAdd={() => updateAnswer('height', myanswers.height + 1)}
              onRemove={() =>
                updateAnswer('height', Math.max(0, myanswers.height - 1))
              }
              onSlide={(value) => updateAnswer('height', value)}
            />
          </div>
          <div className="my-4">
            <label>Weight ⚖️</label>
            <Picker
              max={1000}
              min={0}
              tag="Days per week"
              value={myanswers.weight}
              onAdd={() => updateAnswer('weight', myanswers.weight + 1)}
              onRemove={() =>
                updateAnswer('weight', Math.max(0, myanswers.weight - 1))
              }
              onSlide={(value) => updateAnswer('weight', value)}
            />
          </div>
          <div className="my-4">
            <label>Neck</label>
            <Picker
              max={100}
              min={20}
              tag="Days per week"
              value={myanswers.neck}
              onAdd={() => updateAnswer('neck', myanswers.neck + 1)}
              onRemove={() =>
                updateAnswer('neck', Math.max(0, myanswers.neck - 1))
              }
              onSlide={(value) => updateAnswer('neck', value)}
            />
          </div>
          <div className="my-4">
            <label>Waist</label>
            <Picker
              max={100}
              min={20}
              tag="Days per week"
              value={myanswers.waist}
              onAdd={() => updateAnswer('waist', myanswers.waist + 1)}
              onRemove={() =>
                updateAnswer('waist', Math.max(0, myanswers.waist - 1))
              }
              onSlide={(value: any) => updateAnswer('waist', value)}
            />
          </div>
          <div className="my-4">
            <label>Hip</label>
            <Picker
              max={100}
              min={20}
              tag="Days per week"
              value={myanswers.hip}
              onAdd={() => updateAnswer('hip', myanswers.hip + 1)}
              onRemove={() =>
                updateAnswer('hip', Math.max(0, myanswers.hip - 1))
              }
              onSlide={(value: any) => updateAnswer('hip', value)}
            />
          </div>
          <div>
            <label>Fitness Goal 🏃</label>
            <p>What do you want to achieve in your new fitness journey</p>
          </div>
          <div className="btn-group gap-5" role="group" aria-label="fitness">
            <input
              type="radio"
              className="btn-check"
              name="options-base"
              id="burn_fats"
              value="burn_fats"
              onChange={handleFitnessFoalChange}
              autoComplete="off"
            />
            <label className="btn btn-outline-primary" htmlFor="burn_fats">
              Burn Fats
            </label>

            <input
              type="radio"
              className="btn-check"
              name="options-base"
              id="cardiovascular"
              value="cardiovascular"
              onChange={handleFitnessFoalChange}
              autoComplete="off"
            />
            <label className="btn btn-outline-primary" htmlFor="cardiovascular">
              Cardiovascular health
            </label>

            <input
              type="radio"
              className="btn-check"
              name="options-base"
              id="build_muscle"
              value="build_muscle"
              onChange={handleFitnessFoalChange}
              autoComplete="off"
            />
            <label className="btn btn-outline-primary" htmlFor="build_muscle">
              Build Muscles
            </label>
          </div>

          <div className="my-4">
            <label>
              How many days a week are you willing to commit to your fitness
              routine in week 🗓️ ?
            </label>
            <Picker
              max={7}
              min={2}
              tag="Days per week"
              value={myanswers.workout_days}
              onAdd={() =>
                updateAnswer('workout_days', myanswers.workout_days + 1)
              }
              onRemove={() =>
                updateAnswer(
                  'workout_days',
                  Math.max(0, myanswers.workout_days - 1),
                )
              }
              onSlide={(value: any) => updateAnswer('workout_days', value)}
            />
          </div>

          <div>
            <button
              className="btn btn-primary my-2"
              type="button"
              onClick={logAnswers}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
