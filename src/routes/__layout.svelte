<script>
  import '../app.css';
  import { onMount } from 'svelte';
  import { blur } from 'svelte/transition';

  let ready = false;
  onMount(() => (ready = true));
</script>

{#if ready}
  <div
    class="bg-white flex flex-col place-content-between h-screen"
    transition:blur={{ duration: 1000 }}
  >
    <header class="flex justify-center w-full p-2 bg-blue-900 shadow-2xl">
      <h1 class="inline-block text-4xl md:text-8xl text-white tracking-tighter">PROJECT CODE</h1>
    </header>
    <div class="h-4/5 bg-blue-900 m-10 rounded-2xl shadow-2xl" />
    <slot />
  </div>
{/if}
