import { Activity } from "../types";
import CalorieDisplay from "./CalorieDisplay";
import { useActivity } from "../hooks/useActivity";

export type CalorieTrackerProps = {
  activities: Activity[];
};

function CalorieTracker() {

  const {
    caloriesConsumed,
    caloriesBurned,
    netCalories,
  } = useActivity();

  return (
    <>
      <h2 className="text-4xl font-black text-white text-center">
        Resumen de Calorías
      </h2>
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
        <CalorieDisplay
          calories={caloriesConsumed}
          text="Calorías consumidas"
        />
        <CalorieDisplay calories={caloriesBurned} text="Calorías quemadas" />
        <CalorieDisplay calories={netCalories} text="Diferencia" />
      </div>
    </>
  );
}

export default CalorieTracker;
