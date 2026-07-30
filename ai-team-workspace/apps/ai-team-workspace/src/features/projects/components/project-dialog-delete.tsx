import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/shared/components/ui/alert-dialog';
import { useDeleteProject } from '../hooks/useDeleteProject';

interface IProps {
  id?: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProjectDialogDelete({
  id,
  open,
  onOpenChange,
}: IProps) {
  const deleteProject = useDeleteProject();
  const callDelete = async () => {
    deleteProject.mutate(id ?? '', {
      onSuccess: () => {
        onOpenChange(false);
      },
      onSettled(data, error, variables, onMutateResult, context) {
        console.warn('onSettled', { data, error, variables, onMutateResult, context });
      },
    });
  };
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this
            project from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={callDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
