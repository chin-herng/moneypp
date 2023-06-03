import { useState } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import SetupForm from './SetupForm';

const SetupDialog = () =>
{
  const [open, setOpen] = useState(true)

  interface SetupFormData {
    walletName: string;
    amount: number;
  }

  function handleSubmit(formData: SetupFormData) {
    setOpen(false);
    console.log(formData);
  }

  return (
    <Dialog open = {open}>
      <DialogTitle>Welcome to Money++!</DialogTitle>
      <DialogContent>
        Let's begin by setting up your first wallet.
        <div style={{ margin: "10px" }}>
          <SetupForm onSubmit={handleSubmit} />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default SetupDialog;