import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { IoCloudUploadOutline } from "react-icons/io5";


interface InputFileProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=> void
}

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});



export default function InputFileUpload({onChange}:InputFileProps) {
  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      disableElevation
      tabIndex={-1}
      startIcon={<IoCloudUploadOutline />}
    >
      Subir nueva imagen
      <VisuallyHiddenInput
      accept="image/png, image/jpeg"
        type="file"
        onChange={(event) => onChange(event)}
      />
    </Button>
  );
}