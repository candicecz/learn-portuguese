import {useCallback, useState} from "react";
import {DataProps} from "src/pages/index";
import {getRandomNum} from "src/utils/helpers";
// Hook for setting multiple choice options.
export const useOptions = (initial: DataProps[]) => {
  const [options, setOptions] = useState<DataProps[]>(initial);

  // reset the options array with new values.
  const resetOptions = useCallback(
    (
      data: DataProps[],
      results: DataProps[] = [],
      total_length: number = initial.length,
    ): DataProps[] => {
      // if results is the right length return the current results.
      if (results.length === total_length) {
        return results;
      }
      if (data) {
        // Get random item from list
        const item = data[getRandomNum(data.length)]; //data.length
        const passesTests = runOptionsTests(
          results,
          item,
          data.length > 1000, // check is hard mode
          total_length,
        );
        if (passesTests) {
          item.called++;
          results.push(item);
        }
      }
      return resetOptions(data, results, total_length);
    },
    [initial.length],
  );

  return {
    options,
    setOptions: useCallback(
      data => {
        const options_list = resetOptions(data);
        setOptions(options_list);
      },
      [resetOptions],
    ),

    resetOptions,
  };
};

// Options list constraints
const runOptionsTests = (
  results: DataProps[],
  item: DataProps,
  isHardMode: boolean,
  total_length: number,
) => {
  // 1. check if item already exists in array
  if (results.findIndex(l => l.rank === item.rank) >= 0) {
    return false;
  }
  // 2. check if array has a good number of hard questions in hard mode
  if (
    isHardMode &&
    results.length >= total_length / 2 &&
    results.filter(l => l.rank > 1000).length < 2 &&
    item.rank < 1000
  ) {
    return false;
  }
  // 3. if item has been called more than 3 times, we allow it 50% of the time.

  if (item.called > 3 && Math.random() < 0.5) {
    return false;
  }
  return true;
};
