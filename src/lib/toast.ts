import { toast as sonnerToast } from 'svelte-sonner';

export default {
  success: (message: string) => sonnerToast.success(message),
  error: (message: string) => sonnerToast.error(message)
};
