import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface SelectItem {
  value: 0 | 1 | 2;
  label: string;
}

interface AdminSelectProps {
  placeholder: string;
  items: SelectItem[];
  func: Function;
}

export default function AdminSelect({
  placeholder,
  items,
  func,
}: AdminSelectProps) {
  return (
    <Select
      onValueChange={(v) => {
        func(v);
      }}
    >
      <SelectTrigger className="w-fit">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.value} value={item.value.toString()}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
