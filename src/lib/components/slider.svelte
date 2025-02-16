<script lang="ts">
import type { ComponentProps } from "svelte";
import { Slider, type WithoutChildren } from "bits-ui";

type Props = WithoutChildren<ComponentProps<typeof Slider.Root>>;

let {
	value = $bindable(),
	ref = $bindable(null),
	...restProps
}: Props = $props();
</script>

<div class="w-full md:max-w-[280px]">
  <!--
    Since we have to destructure the `value` to make it `$bindable`, we need to use `as any` here to avoid
    type errors from the discriminated union of `"single" | "multiple"`.
    (an unfortunate consequence of having to destructure bindable values)
  -->
  <Slider.Root
    bind:value
    bind:ref
    {...restProps as any}
    class="relative flex w-full touch-none select-none items-center"
  >
    {#snippet children({ thumbs })}
      <span
        class="bg-mantle relative h-2 w-full grow cursor-pointer overflow-hidden rounded-full"
      >
        <Slider.Range class="bg-mantle absolute h-full" />
      </span>
      {#each thumbs as index}
        <Slider.Thumb
          {index}
          class="bg-mauve hover:border-overlay0 active:scale-98 block size-[25px] cursor-pointer rounded-full border shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        />
      {/each}

      <!-- {#each ticks as index}
        <Slider.Tick {index} />
      {/each} -->
    {/snippet}
  </Slider.Root>
</div>
