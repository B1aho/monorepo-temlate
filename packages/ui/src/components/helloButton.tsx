import { Button } from "./ui/button.js";

interface HelloButtonProps {
  appName: string;
}

export const HelloButton = ({ appName }: HelloButtonProps) => {
  return (
    <Button
      variant="destructive"
      className='p-2 text-white'
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      Tap!
    </Button>
  );
};
