import { Button } from "@/components/ui/button"

type Option = "1D" | "1W" | "1M" | "1Y" | "ALL"

type TimeSelectorProps = {
  value: Option
  onChange: (value: Option) => void
}

const options: Option[] = ["1D", "1W", "1M", "1Y", "ALL"]

export function TimeSelector({ value, onChange }: TimeSelectorProps) {
  return (
    <div className=" flex items-center justify-between bg-[var(--color-gray)]  p-1.5 rounded-xl">
      {options.map((option) => (
        <Button
          key={option}
          variant={value === option ? "destructive" : 'link'}
          className="rounded-sm"
          size="sm"
          onClick={() => onChange(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  )
}
