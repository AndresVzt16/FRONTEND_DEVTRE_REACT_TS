import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile } from "../services/Services";
import { toast } from "sonner";

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProfile,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err: Error) => {
      toast.error(err.message);
    },
  });
};