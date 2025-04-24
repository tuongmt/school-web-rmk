import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import { Button } from "./button";

const Modal = ({
  open,
  onOpenChange,
  children,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>
        <Button>Create Post</Button>
      </Dialog.Trigger>
      <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
      <Dialog.Content
        className={cn(
          "fixed left-1/2 top-1/2 w-[90vw] max-w-md translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-lg",
        )}
      >
        <Dialog.Title className="text-lg font-semibold">
          Create Post
        </Dialog.Title>
        <Dialog.Description className="mt-2 text-sm">
          Please enter the details for the new post.
        </Dialog.Description>
        {children}
        <Dialog.Close asChild>
          <Button type="button" onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default Modal;
