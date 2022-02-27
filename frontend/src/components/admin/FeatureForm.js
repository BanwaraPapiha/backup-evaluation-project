import React from 'react';
import { useForm } from 'react-hook-form';

import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  // updateDoc,
  // deleteDoc,
  // doc,
} from "firebase/firestore";


export default function FeatureForm() {
    ////
  // const [feature, setFeature] = useState("");
  // const [total_score, setTotal_score] = useState(0);
  const usersCollectionRef = collection(db, "features for evaluation");
  ////

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    const createUser = async () => {
      await addDoc(usersCollectionRef, { feature: data.Feature, total_score: Number(data.Total_Scores) });
    };

    createUser();
    console.log(data);
  }
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Feature to evaluate" {...register("Feature", {required: true, maxLength: 80})} />
      <input type="number" placeholder="Total Possible Scores" {...register("Total_Scores", {required: true, maxLength: 4})} />

      <input type="submit" />
    </form>
  );
}