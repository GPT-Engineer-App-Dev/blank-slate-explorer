import { Button } from "@/components/ui/button"

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl font-bold mb-4 text-foreground">Welcome to Your Blank App</h1>
      <p className="text-lg mb-8 text-muted-foreground">Start building your amazing project here!</p>
      <Button>Get Started</Button>
    </div>
  );
};

export default Index;
