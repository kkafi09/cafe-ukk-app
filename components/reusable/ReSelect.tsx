import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ReSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Pilih Status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">Paid</SelectItem>
          <SelectItem value="banana">Unpaid</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
