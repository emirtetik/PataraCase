import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface CustomCardProps {
  imageSrc: string;
  title: string;
  value: string;
  alt?: string;
  button?: boolean;
}

export function CustomCard({
  imageSrc,
  title,
  value,
  alt,
  button,
}: CustomCardProps) {
  return (
    <Card className="flex flex-row items-center justify-between gap-4 px-4 py-5 bg-[var(--color-gray)] rounded-lg border-none">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-[var(--color-light-gray)]  rounded-sm flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={alt || title}
            width={20}
            height={20}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col justify-center h-10">
          <p className="text-sm text-[var(--color-third-gray)] font-geist-regular leading-none">
            {title}
          </p>
          <p className="text-2xl font-geist-medium text-[var(--color-white)] leading-none mt-0.5">
            {value}
          </p>
        </div>
      </div>

      {button && (
        <Button
          variant="default"
          size="sm"
          className="rounded-lg font-geist-medium text-sm leading-5 px-4 py-4"
        >
          Claim
        </Button>
      )}
    </Card>
  );
}
