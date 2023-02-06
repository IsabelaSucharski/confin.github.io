import { useState, useEffect } from "react";

export interface IPage {
  page: number;
}

export default function usePage() {
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setPage(page);
  }, [page, setPage]);

  return { page, setPage };
}
