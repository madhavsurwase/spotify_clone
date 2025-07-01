import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";

export default function SearchPage() {
    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold font-headline mb-8">Search</h1>
             <div className="relative w-full max-w-xl mx-auto mb-8">
              <Input
                type="search"
                placeholder="Search for anything..."
                className="pl-12 h-14 text-lg bg-card border-none"
              />
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
            </div>
            <p className="text-center text-muted-foreground">Search functionality is coming soon.</p>
        </div>
    )
}
