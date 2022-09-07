import { useParams } from "react-router-dom";

export const useManageParams = () => {
  return useParams<{ id: string }>();
};
