import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog.jsx";
import { WalletIcon } from "@radix-ui/react-icons";
import { DollarSign } from "@radix-ui/react-icons";
import { UploadIcon } from "@radix-ui/react-icons";
import { ReloadIcon } from "@radix-ui/react-icons";
import { CopyIcon } from "@radix-ui/react-icons";
import { ShuffleIcon } from "@radix-ui/react-icons";
import TopUpForm from "./TopUpForm";
import WithdrawalForm from "./WithdrawalForm";
import TransferForm from "./TransferForm";

const Wallet = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="pt-10 w-full lg:w-[60%]">
        <Card>
          <CardHeader className="pb-9">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-5">
                <WalletIcon size={30} />
                <div>
                  <CardTitle className="text-2xl">My Wallet</CardTitle>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-200 text-sm">#A475ED</p>
                    <CopyIcon
                      size={12}
                      className="cursor-pointer hover:text-slate-300"
                    />
                  </div>
                </div>
              </div>

              <div>
                <ReloadIcon className="w-6 h-6 cursor-pointer hover:text-gray-400" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center ">
              <DollarSign />
              <span className="text-2xl font-semibold">20000</span>
            </div>

            <div className="flex gap-7 mt-5">
              <Dialog>
                <DialogTrigger>
                  <div
                    className="h-24 w-24 hover:text-gray-400 cursor-pointer
                  flex flex-col items-center justify-center rounded-md shadow-slate-800 shadow-md"
                  >
                    <UploadIcon />
                    <span className="text-sm mt-2">Add Money</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Top Up Your Wallet</DialogTitle>
                  </DialogHeader>
                  <TopUpForm />
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger>
                  <div
                    className="h-24 w-24 hover:text-gray-400 cursor-pointer
                  flex flex-col items-center justify-center rounded-md shadow-slate-800 shadow-md"
                  >
                    <UploadIcon />
                    <span className="text-sm mt-2">Withdrawal</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Request Withdrawal</DialogTitle>
                  </DialogHeader>
                  <WithdrawalForm />
                </DialogContent>
              </Dialog>
            </div>

            <div className="flex gap-7 mt-5">
              <Dialog>
                <DialogTrigger>
                  <div
                    className="h-24 w-24 hover:text-gray-400 cursor-pointer
                  flex flex-col items-center justify-center rounded-md shadow-slate-800 shadow-md"
                  >
                    <ShuffleIcon />
                    <span className="text-sm mt-2">Transfer</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-center text-xl">
                      Transfer to other wallet
                    </DialogTitle>
                  </DialogHeader>
                  <TransferForm />
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Wallet;
