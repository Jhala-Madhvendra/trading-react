import React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetTitle,
  SheetContent,
  SheetHeader,
} from "../../components/ui/sheet";
import { Button } from "../../components/ui/button";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../components/ui/avatar";
import {
  DragHandleHorizontalIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <div className="px-2 py-3 border-b bg-background z-50 bg-opacity-0 sticky top-0 left-0 right-0 flex items-center justify-between ">
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-11 w-11"
            >
              <DragHandleHorizontalIcon className="h-7 w-7" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-72 border-r-0 flex flex-col justify-center"
          >
            <SheetHeader>
              <SheetTitle>
                <div className="text-3xl flex justify-center items-center gap-1">
                  <Avatar>
                    <AvatarImage src="https://cdn.pixabay.com/photo/2018/02/04/17/39/crypto-currency-3130381_1280.jpg" />
                  </Avatar>
                  <div>
                    <span className="font-bold text-orange-700">Cryp</span>
                    <span> Trade </span>
                  </div>
                </div>
              </SheetTitle>
            </SheetHeader>
            <Sidebar />
          </SheetContent>
        </Sheet>

        <p className="text-sm lg:text-base cursor-pointer"> Crypto Trading </p>
        <div className="p-0 ml-9">
          <Button variant="outline" className="flex items-center gap-3">
            <MagnifyingGlassIcon />
            <span>Search</span>
          </Button>
        </div>
      </div>

      <div>
        <Avatar>
          <AvatarFallback> M </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
