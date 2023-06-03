import React from 'react'

interface SetupFormProps {
  onSubmit: (data: SetupFormData) => void;
}

interface SetupFormData {
  walletName: string;
  amount: number;
}

function SetupForm({ onSubmit }: SetupFormProps) {
  const [formData, setFormData] = React.useState<SetupFormData>({ walletName: '', amount: 0 });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <div>
          Wallet Name
        </div>
        <input type="text" name="walletName" value={formData.walletName} onChange={handleInputChange} />
      </label>
      <label>
        <div>
          Balance
        </div>
        <input type="number" name="amount" value={formData.amount} onChange={handleInputChange} />
      </label>
      <br />
      <button type="submit" style={{ margin: "10px 0 0 0" }}>Submit</button>
    </form>
  );
}

export default SetupForm;