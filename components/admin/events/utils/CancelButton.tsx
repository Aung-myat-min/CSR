import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function CancelButton(text: string, func: Function) {
  return (
    <Dialog>
      <DialogTrigger>{text}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>This is a doulbe check step!</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="button" variant="secondary">
            Close
          </Button>
          <Button
            type="submit"
            variant="secondary"
            onClick={() => {
              func;
            }}
          >
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
