import { usePathname, useSearchParams } from "next/navigation";

function useGetAllSearchParams() {
  const searchParams = useSearchParams();
  const params = {};
  searchParams.forEach((value, key) => {
    params[key] = value;
  });
  return params;
};

export default useGetAllSearchParams;
