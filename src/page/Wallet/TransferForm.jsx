import React from "react";
import { Input } from "../../components/ui/input";

const TransferForm = () => {
  const [formData, setFormData] = React.useState({
    amount: "",
    walletId: "",
    purpose: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-10 space-y-5">
      <div>
        <h1 className="pb-1">Enter Amount</h1>
        <Input
          name="amount"
          onChange={handleChange}
          value={formData.amount}
          className="py-7"
          placeHolder="$9999"
        />
      </div>

      <div>
        <h1 className="pb-1">Wallet Id</h1>
        <Input
          name="walletId"
          onChange={handleChange}
          value={formData.walletId}
          className="py-7"
          placeHolder="#9282828"
        />
      </div>

      <div>
        <h1 className="pb-1">Enter Purpose</h1>
        <Input
          name="purpose"
          onChange={handleChange}
          value={formData.purpose}
          className="py-7"
          placeHolder="Gift for your friend..."
        />
      </div>
    </div>
  );
};

export default TransferForm;
