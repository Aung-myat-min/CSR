import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface SelectItem {
  value: string;
  label: string;
}

export interface AdminSelectProps {
  placeholder: string;
  items: SelectItem[];
}

export default function AdminSelect({ placeholder, items }: AdminSelectProps) {
  return (
    <Select>
      <SelectTrigger className="w-fit">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
