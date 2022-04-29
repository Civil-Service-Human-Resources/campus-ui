import { useMemo } from 'react';

export const usePageCount = (data) => {
  const [current, displays, total, totalPages] = useMemo(() => {
    if (!data) {
      return [0, 0, 0, 0];
    }

    const ps = data.size || 10;
    const cp = data?.page || 0;
    const d = (cp - 1) * ps + data.results.length;
    const t = data?.totalResults || 0;
    const tp = Math.ceil(t / ps);

    return [cp, d, t, tp];
  }, [data]);

  return [current, displays, total, totalPages];
};
