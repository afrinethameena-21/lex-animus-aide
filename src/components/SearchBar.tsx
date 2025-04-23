
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  className?: string;
  placeholder?: string;
}

const SearchBar = ({ className = "", placeholder = "Search legal resources..." }: SearchBarProps) => {
  return (
    <div className={`relative flex w-full max-w-md mt-4 ${className}`}>
      <div className="relative flex-1">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-legal-darkgray" />
        <Input
          type="search"
          placeholder={placeholder}
          className="pl-10 bg-legal-lightgray border-0 focus:ring-1 focus:ring-legal-gold pr-16"
        />
      </div>
      <Button
        type="submit"
        className="absolute right-0 rounded-l-none bg-legal-navy hover:bg-opacity-90"
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
