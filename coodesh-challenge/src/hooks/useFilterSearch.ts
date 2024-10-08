import { FilterContext } from './../context/filter-context';
import { useContext } from "react";

export function useFilterSearch(){
  return useContext(FilterContext)
}