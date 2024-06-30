import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../../components/ui/table";
import { Avatar, AvatarImage } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";

const Activity = () => {
  return (
    <div>
      <div className="p-5 lg:px-20">
        <h1 className="font-bold text-3xl pb-5">Activity</h1>
        <Table className="border">
          <TableHeader>
            <TableRow>
              <TableHead className="py-5">Date & Time</TableHead>
              <TableHead>Trading Pair</TableHead>
              <TableHead>Buy Price</TableHead>
              <TableHead>Sell Price</TableHead>
              <TableHead>Order Type</TableHead>
              <TableHead>Profit/Loss</TableHead>
              <TableHead className="text-right">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <p>2024/05/31</p>
                  <p className="text-gray-400">12:39:32</p>
                </TableCell>
                <TableCell className="font-medium flex items-center gap-2">
                  <Avatar className="-z-50">
                    <AvatarImage src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"></AvatarImage>
                  </Avatar>
                  <span>Bitcoin</span>
                </TableCell>
                <TableCell>BTC</TableCell>
                <TableCell>9124463121</TableCell>
                <TableCell>1364881428323</TableCell>
                <TableCell>-0.200009</TableCell>
                <TableCell className="text-right">345</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Activity;
