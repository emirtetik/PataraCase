"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { EarningsRow, TabloList } from "@/components/table/TableList";
import { TimeSelector } from "@/components/table/TimeSelector";
import { getPagination } from "@/utils/pagination";
import Image from "next/image";

const allData: EarningsRow[] = Array.from({ length: 90 }).map(() => ({
  account: "0x1f20e...e2026",
  amountIn: "1,000.00 ",
  amountOut: "2,500.00 ",
  price: "$2.50",
  value: "$2,500.00",
  earnedFee: "$0.05",
  time: "1 day ago",
}));

const pageSize = 10;

export default function Tablo() {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<"1D" | "1W" | "1M" | "1Y" | "ALL">(
    "1W"
  );
  const totalPages = Math.ceil(allData.length / pageSize);
  const currentPageData = allData.slice((page - 1) * pageSize, page * pageSize);
  const pagination = getPagination(page, totalPages);

  return (
    <div className="my-6 ">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-[var(--color-white)] font-geist-medium text-2xl leading-7">
          Earnings
        </h1>
        <TimeSelector value={selected} onChange={setSelected} />
      </div>
      <div className="my-6 bg-[var(--color-gray)] rounded-2xl">
        <div className="min-w-full">
          <TabloList data={currentPageData} />
        </div>
        <div className="flex items-center p-3 gap-4">
          <div className="flex-1">
            <select
              className="border border-[var(--color-light-gray)] rounded-lg px-2 py-1 bg-[var(--color-gray)]"
              defaultValue={10}
            >
              <option
                value={10}
                className="font-geist-medium text-sm leading-[18px]"
              >
                10 Transactions
              </option>
            </select>
          </div>

          <div className="flex-1 flex justify-center gap-2">
            <div className="flex-1 flex justify-center gap-2">
              {pagination.map((item, idx) =>
                typeof item === "number" ? (
                  <Button
                    key={idx}
                    variant={page === item ? "destructive" : "link"}
                    size="sm"
                    className="rounded-md border border-[var(--color-secondary-gray)]"
                    onClick={() => setPage(item)}
                  >
                    {item}
                  </Button>
                ) : (
                  <div
                    key={idx}
                    className="px-3 py-1 border border-[var(--color-secondary-gray)] rounded-md text-[var(--color-third-gray)] text-sm flex items-center justify-center"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="flex-1 flex justify-end gap-2">
            <Button
              variant="link"
              className="rounded-md border border-[var(--color-secondary-gray)]"
              size="sm"
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
            >
              <Image
                src={"/icons/left.png"}
                width={15}
                height={20}
                alt="left"
              />
            </Button>
            <Button
              variant="link"
              className="rounded-md border border-[var(--color-secondary-gray)] "
              size="sm"
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
            >
              <Image
                src={"/icons/right.png"}
                width={15}
                height={20}
                alt="right"
                className="py-1"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
