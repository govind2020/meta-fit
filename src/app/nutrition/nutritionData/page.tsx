/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { useEffect, useState, Suspense } from 'react';
// @ts-ignore
import { useSearchParams } from 'next/navigation';

const dietInfo = [
  {
    id: 'vegetarian',
    food: [
      'Eggs: A common source of protein for lacto-ovo-vegetarians.',
      'Dairy Products: Including milk, cheese, and yogurt, often consumed by lacto-vegetarians.',
      'Legumes: Such as lentils, chickpeas, and black beans, which are rich in protein and fiber.',
      'Tofu: A versatile source of protein made from soybeans.',
      'Quinoa: A complete protein and a good source of fiber and various nutrients.',
      'Nuts and Seeds: Including almonds, walnuts, chia seeds, and flaxseeds, which provide healthy fats and protein.',
      'Fruits and Vegetables: A wide variety of fresh produce, providing essential vitamins, minerals, and antioxidants.',
      'Whole Grains: Such as brown rice, oats, and barley, offering fiber and nutrients.',
      'Plant-Based Oils: Like olive oil and coconut oil, used for cooking and dressings.',
      'Plant-Based Milk: Including almond milk, soy milk, and oat milk, as alternatives to dairy milk.',
    ],
  },
  {
    id: 'vegan',
    food: [
      'Avocados: A rich source of healthy fats and various nutrients.',
      'Coconut Oil: Used for cooking and baking in place of animal-based fats.',
      'Nuts and Nut Butters: Providing protein, healthy fats, and essential nutrients.',
      'Seeds: Such as chia seeds, flaxseeds, and hemp seeds, offering protein and omega-3 fatty acids.',
      'Non-Dairy Yogurt: Made from coconut, almond, or soy milk, as a dairy-free alternative.',
      'Nutritional Yeast: Often used to add a cheesy flavor to dishes and as a source of vitamin B12.',
      'Tempeh: A fermented soy product, rich in protein and probiotics.',
      'Plant-Based Protein Powders: Derived from sources like pea, hemp, or rice, for smoothies and shakes.',
      'Whole Grains: Including quinoa, brown rice, and whole wheat, for fiber and nutrients.',
      'Fruits and Vegetables: A diverse range of fresh produce for essential nutrients and antioxidants.',
    ],
  },
  {
    id: 'omnivore',
    food: [
      'Lean Meats: Such as chicken breast, turkey, and lean cuts of beef or pork.',
      'Fish and Seafood: Including salmon, tuna, shrimp, and mussels, for omega-3 fatty acids and protein.',
      'Eggs: A versatile source of protein and nutrients.',
      'Dairy Products: Such as milk, cheese, and yogurt, providing calcium and protein.',
      'Whole Grains: Including whole wheat bread, brown rice, and quinoa, for fiber and nutrients.',
      'Fruits and Vegetables: A wide variety of fresh produce for essential vitamins, minerals, and antioxidants.',
      'Nuts and Seeds: Providing healthy fats, protein, and essential nutrients.',
      'Legumes: Such as lentils, black beans, and chickpeas, for plant-based protein and fiber.',
      'Healthy Oils: Like olive oil and avocado oil, for cooking and dressings.',
      'Herbs and Spices: Used to enhance flavor and add variety to dishes.',
    ],
  },
];

export default function NutritionPageComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NutritionPage />
    </Suspense>
  );
}

function NutritionPage() {
  const searchParams = useSearchParams();
  const [data, setData] = useState<any>(null);
  const [dietDetails, setDietDetails] = useState('');
  const search = searchParams.get('id');

  useEffect(() => {
    const url = `https://meta-fir-json-server.onrender.com/nutrition`;

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

  const diet = dietInfo.find((d) => d.id === dietDetails);

  return (
    <div className="container py-4">
      <div className="row justify-content-center mt-4">
        <div className="col-xl-9">
          {/* overview */}
          <div className="mb-4 mt-5">
            <h2 className="h2 fw-bold mb-1">
              Hi {data?.name}, Your General Overview
            </h2>
            <span className="text-muted">
              A general overview of the Nutrition plan and current health Diet
              Food
            </span>
          </div>
          {/* number of snacks */}
          <div className="mb-4">
            <h3 className="h3 fw-bold">Eating Weekly Outside Food</h3>
            {data?.eating_out > 2 ? (
              <p className="text-danger">
                Your Number of Eating Outside is {data?.eating_out}, which is
                more than 2. You should eat less outside.
              </p>
            ) : (
              <p className="text-dark">
                Your Number of Eating Outside is {data?.eating_out}, which is
                less than 2. You can enjoy eating outside.
              </p>
            )}
          </div>
          {/* water quantity */}
          <div className="mb-4">
            <h3 className="h3 fw-bold">Your Daily Water Intake</h3>
            {data?.water_drinking > 5 ? (
              <p className="text-success">
                Your Water Intake is {data?.water_drinking}, which is more than
                5 liters. You are on track with your daily water consumption.
              </p>
            ) : (
              <p className="text-danger">
                Your Water Intake is {data?.water_drinking}, which is less than
                7 liters. You should aim to drink 7 liters daily.
              </p>
            )}
          </div>
          {/* diet type */}
          <div className="mb-4">
            {data ? (
              <div>
                <h2 className="h2 fw-bold mb-3">
                  Diet Type: {data.current_diet}
                </h2>
                <h3 className="h4 fw-semibold">
                  This Meal should be in your Diet Every Week
                </h3>
                <p className="text-muted mb-2">
                  Since your goal is to build muscles and stay fit, high protein
                  intake is an important factor to build lean muscle mass.
                </p>
                <ul className="text-dark">
                  {diet &&
                    diet.food.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
              </div>
            ) : (
              <p>Loading data...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
