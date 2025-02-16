<script lang="ts">
  import type { ComponentProps } from "svelte";
  import { Button } from "bits-ui";
  import { cn } from "$lib/util";

  type Props = ComponentProps<typeof Button.Root>;

  let props: Props = $props();
</script>

<Button.Root
  {...props}
  class={cn(
    `rounded-md shadow-mini active:scale-98 inline-flex h-12 items-center
    justify-center px-4 text-[15px] font-semibold transition-all`,
    props.class
  )}
>
  {@render props.children!()}
</Button.Root>
