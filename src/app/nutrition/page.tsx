'use client';

import React, { useState, Suspense } from 'react';
import AboutHero from '@/components/AboutHero';
import Picker from '@/components/Picker';
// @ts-ignore
import { useRouter } from 'next/navigation';
import NotFound from '../not-found';

interface Metadata {
  title: string;
}

const nutritiondata = {
  id: '',
  icon: '🎯',
  title: 'Nutrition Goal 🎯',
  description:
    'A balanced diet refers to food that contains different nutrients and is in proper proportions.',
  component: null,
  answers: {
    current_diet: 'vegetarian',
    name: '',
    number_snacks: 2,
    eating_out: 0,
    water_drinking: 1,
  },
};

const NutritionPage: React.FC = () => {
  const [myanswers, setMyAnswers] = useState(nutritiondata?.answers);
  const [diet, setDiet] = useState('');
  const [newId, setNewId] = useState('');
  const router = useRouter();

  const handleRadioChange = (event: any) => {
    setDiet(event.target.value);
  };

  const updateAnswer = (field: keyof typeof myanswers, value: any) => {
    setMyAnswers((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const logAnswers = () => {
    fetch('https://meta-fir-json-server.onrender.com/nutrition', {
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
          // <Suspense>
          router.push(`/nutrition/nutritionData?id=${data?.id}`);
          {
            /* </Suspense> */
          }
        }
      })
      .catch((error) => {
        console.error('Failed to submit:', error);
        alert('Failed to submit data');
      });
  };

  return (
    <>
      {/* <AboutHero /> */}
      <div className="px-5 mt-5 pt-5">
        <div className="px-5 mt-5 pt-5">
          <div className="text-center">
            <h1>{nutritiondata?.title}</h1>
            <p>{nutritiondata?.description}</p>
          </div>
        </div>
        <form className="contact-form-items px-5 mt-5 pt-5">
          <div className="input-group mx-1 mt-5">
            <input
              type="text"
              name="name"
              onChange={(e) => updateAnswer('name', e.target.value)}
              className="form-control mt-5"
              placeholder="Full Name"
            />
          </div>
          <label>Dietary Choices:-</label>
          <div
            className="btn-group gap-5"
            role="group"
            aria-label="Dietary choices"
          >
            <input
              type="radio"
              className="btn-check"
              name="options-base"
              id="vegetarian"
              value="vegetarian"
              onChange={handleRadioChange}
              autoComplete="off"
            />
            <label className="btn btn-outline-primary" htmlFor="vegetarian">
              Vegetarian
              <p className="text-light">
                One that does not include any meat or seafood.
              </p>
            </label>

            <input
              type="radio"
              className="btn-check"
              name="options-base"
              id="vegan"
              value="vegan"
              onChange={handleRadioChange}
              autoComplete="off"
            />
            <label className="btn btn-outline-primary" htmlFor="vegan">
              Vegan
              <p className="text-light">
                A vegan diet is based on plants (such as vegetables, grains,
                nuts and fruits) and foods made from plants
              </p>
            </label>

            <input
              type="radio"
              className="btn-check"
              name="options-base"
              id="omnivore"
              value="omnivore"
              onChange={handleRadioChange}
              autoComplete="off"
            />
            <label className="btn btn-outline-primary" htmlFor="omnivore">
              Omnivore
              <p className="text-light">
                Omnivores eat both plants and animals, and can be mammals,
                birds, fish, reptiles, or even insects
              </p>
            </label>
          </div>
          <div className="my-4">
            <label>
              What does a typical day of eating look like for you 🗓️ ?
            </label>
            <Picker
              max={7}
              min={1}
              tag="Days per week"
              value={myanswers.number_snacks}
              onAdd={() =>
                updateAnswer('number_snacks', myanswers.number_snacks + 1)
              }
              onRemove={() =>
                updateAnswer(
                  'number_snacks',
                  Math.max(0, myanswers.number_snacks - 1),
                )
              }
              onSlide={(value) => updateAnswer('number_snacks', value)}
            />
          </div>
          <div className="my-4">
            <label>How Often do you Eat Out 🗓️ ?</label>
            <Picker
              max={7}
              min={0}
              tag="Days per week"
              value={myanswers.eating_out}
              onAdd={() => updateAnswer('eating_out', myanswers.eating_out + 1)}
              onRemove={() =>
                updateAnswer(
                  'eating_out',
                  Math.max(0, myanswers.eating_out - 1),
                )
              }
              onSlide={(value) => updateAnswer('eating_out', value)}
            />
          </div>
          <div className="my-4">
            <label>How Much water do you Typically drink in a Day 🗓️ ?</label>
            <Picker
              max={12}
              min={1}
              tag="Days per week"
              value={myanswers.water_drinking}
              onAdd={() =>
                updateAnswer('water_drinking', myanswers.water_drinking + 1)
              }
              onRemove={() =>
                updateAnswer(
                  'water_drinking',
                  Math.max(0, myanswers.water_drinking - 1),
                )
              }
              onSlide={(value: any) => updateAnswer('water_drinking', value)}
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
    </>
  );
};

export default NutritionPage;
