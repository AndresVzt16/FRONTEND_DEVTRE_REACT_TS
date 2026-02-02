import { updateProfile, uploadImage } from "../../../services/Services";
import ProfileForms from "./Components/ProfileForm";
import type { ProfileForm, TUser } from "../../../types";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
export default function ProfileView() {
  const queryClient = useQueryClient();
  const profileUpdateMutation = useMutation({
    retry: 0,
    mutationKey: ["PROFILE_UPDATE"],
    mutationFn: (data: ProfileForm) => updateProfile(data),

    onSuccess: (data) => {
      toast.success(data.message);
      /* invalidar los datos cacheados para ejecutar la nueva consulta con reactividad */
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });
  const imageUpdateMutation = useMutation({
    mutationKey: ["IMAGE_UPLOAD"],
    mutationFn: uploadImage,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], (prevData:TUser)=> {
        return {
          ...prevData,
          image:data
        }

      });
    },
    onError: () => {
      console.log("Error");
    },
  });

  const handleUploadImage = async (file: File) => {
    console.log("Ingresa a la mutacion");
    imageUpdateMutation.mutate(file);
  };

  const hanldeUpdateProfile = async (dataForm: ProfileForm) => {
    /* console.log(data) */
    profileUpdateMutation.mutate(dataForm);
  };
  return (
    <>
      <ProfileForms
        updateProfile={hanldeUpdateProfile}
        loading={profileUpdateMutation.isPending}
        uploadImage={handleUploadImage}
      />
    </>
  );
}
