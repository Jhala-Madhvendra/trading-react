import React from "react";
import { Input } from "../../components/ui/input";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { DotFilledIcon } from "@radix-ui/react-icons";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";

const TopUpForm = () => {
  const [amount, setAmount] = React.useState("");
  const handleChange = (e) => {
    setAmount(e.target.value);
  };
  const [paymentMethod, setPaymentMethod] = React.useState("RAZORPAY");
  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
  };

  const handleSubmit = () => {
    console.log(amount, paymentMethod);
  };
  return (
    <div className="pt-10 space-y-5 ">
      <div>
        <h1 className="pb-1">Enter Amount</h1>
        <Input
          onChange={handleChange}
          value={amount}
          className="py-7 text-lg"
          placeholder="$9999"
        />
      </div>
      <div>
        <h1 className="pb-1">Select Payment Method</h1>
        <RadioGroup
          onValueChange={(value) => handlePaymentMethodChange(value)}
          className="flex"
          defaultValue="RAZORPAY"
        >
          <div className="flex items-center space-x-2 border p-3 px-5 rounded-md">
            <RadioGroupItem
              icon={DotFilledIcon}
              className="h-9 w-9"
              value="RAZORPAY"
              id="r1"
            />
            <Label htmlFor="r1">
              <div className="bg-white rounded-md px-5 py-2 w-32">
                <img
                  src="https://imgs.search.brave.com/E83_DcTbcQMi4O29gGZtRoDsvZEhL4tLuul4yJDbtII/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi84Lzg5L1Jh/em9ycGF5X2xvZ28u/c3ZnLzY0MHB4LVJh/em9ycGF5X2xvZ28u/c3ZnLnBuZw"
                  alt=""
                />
              </div>
            </Label>
          </div>

          <div className="flex items-center space-x-2 border p-3 px-5 rounded-md">
            <RadioGroupItem
              icon={DotFilledIcon}
              className="h-9 w-9"
              value="STRIPE"
              id="r2"
            />
            <Lable htmlFor="r2">
              <div className="bg-white rounded-md px-5 w-32">
                <img
                  className="h-9"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/768px-Stripe_Logo%2C_revised_2016.svg.png"
                  alt=""
                />
              </div>
            </Lable>
          </div>
        </RadioGroup>
      </div>
      <Button onClick={handleSubmit} className="w-full py-7 ">
        Submit
      </Button>
    </div>
  );
};

export default TopUpForm;
