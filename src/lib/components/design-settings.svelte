<script lang="ts">
  import Slider from "./slider.svelte";

  let value = $state(50);
</script>

<div class="space-y-2">
  <div class="w-full md:max-w-[280px] p-6 space-y-2">
    <p class="font-semibold">Padding</p>
    <Slider bind:value type="single" />
  </div>
</div>
