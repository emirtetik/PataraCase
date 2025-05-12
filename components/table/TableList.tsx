import Avatar from "../avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export type EarningsRow = {
  account: string;
  amountIn: string;
  amountOut: string;
  price: string;
  value: string;
  earnedFee: string;
  time: string;
};

type TabloProps = {
  data: EarningsRow[];
};

export function TabloList({ data }: TabloProps) {
  return (
    <Table className="min-w-[800px] bg-[var(--color-gray)] border-separate border-spacing-y-2 px-3 rounded-2xl">
      <TableHeader>
        <TableRow className="">
          <TableHead className="text-[var(--color-third-gray)] font-geist-medium text-sm leading-4">
            Account
          </TableHead>
          <TableHead className="text-[var(--color-third-gray)] font-geist-medium text-sm leading-4">
            Amount In
          </TableHead>
          <TableHead className="text-[var(--color-third-gray)] font-geist-medium text-sm leading-4">
            Amount Out
          </TableHead>
          <TableHead className="text-[var(--color-third-gray)] font-geist-medium text-sm leading-4">
            Price
          </TableHead>
          <TableHead className="text-[var(--color-third-gray)] font-geist-medium text-sm leading-4">
            Value
          </TableHead>
          <TableHead className="text-[var(--color-third-gray)] font-geist-medium text-sm leading-4">
            Earned Fee
          </TableHead>
          <TableHead className="text-[var(--color-third-gray)] font-geist-medium text-sm leading-4">
            Time
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="">
        {data.map((row, idx) => (
          <TableRow key={idx} className="bg-[var(--color-light-gray)] ">
            <TableCell className="text-[var(--color-white)] font-geist-semibold text-sm leading-5 rounded-l-lg min-w-[250px]">
              <div className="flex gap-1.5 items-center">
                <Avatar
                  rounded="rounded-full"
                  size={40}
                  style={{ overflow: "hidden" }}
                />
                {row.account}
              </div>
            </TableCell>

            <TableCell className="text-[var(--color-white)] font-geist-medium text-sm leading-4 ">
              {row.amountIn}{" "}
              <span className="font-geist font-medium text-sm text-[var(--color-third-gray)] leading-[18px]">
                SUI
              </span>
            </TableCell>
            <TableCell className="text-[var(--color-white)] font-geist font-medium text-sm leading-4">
              {row.amountOut}
              <span className="font-geist font-medium text-sm text-[var(--color-third-gray)] leading-[18px]">
                USDC
              </span>
            </TableCell>
            <TableCell className="text-[var(--color-white)] font-geist-medium text-sm leading-4">
              {row.price}
            </TableCell>
            <TableCell className="text-[var(--color-white)] font-geist-medium text-sm leading-4">
              {row.value}
            </TableCell>
            <TableCell className="text-[var(--color-white)] font-geist-medium text-sm leading-4">
              {row.earnedFee}
            </TableCell>
            <TableCell className="text-[var(--color-white)] font-geist-medium text-sm leading-4 rounded-r-lg ">
              {row.time}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
