"use client"

import { Suspense } from "react";
import RadioMain from "@/components/radio-main";

export default function RadioPage() {

  return (
    <Suspense fallback={<div>Loading...</div>}> 
      <RadioMain/>
    </Suspense >
  );
}


