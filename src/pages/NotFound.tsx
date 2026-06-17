import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="font-heading text-8xl font-bold text-accent">404</h1>
        <h2 className="mt-4 font-heading text-2xl font-bold text-foreground">Page Not Found</h2>
        <p className="mt-2 text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
        <Button asChild variant="default" className="mt-8">
          <Link to="/"><Home className="mr-2 h-4 w-4" />Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
