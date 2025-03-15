import { Button } from "./ui/button.js";

interface HelloButtonProps {
  appName: string;
}

export const HelloButton = ({ appName }: HelloButtonProps) => {
  return (
    <Button
      variant="destructive"
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      Tap!
    </Button>
  );
};
