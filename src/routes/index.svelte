<script>
  import '../app.css';
  import Title from '$lib/Title.svelte';
  import { fade } from 'svelte/transition';

  let y, h;
  $: console.log(y, h);
</script>

<svelte:head><title>Project Code</title></svelte:head>
<svelte:window bind:scrollY={y} bind:outerHeight={h} />

<div class="flex flex-col justify-center items-center h-full">
  <Title {y} {h} />
  <section class="bg-black h-screen w-full p-10" style="transform: translate(0, {-y * 0.5}px">
    <div class="bg-gray-900 h-full p-3 lg:p-10 shadow-dark rounded-xl flex flex-col justify-center">
      {#if y > 0.25 * h}
        <div transition:fade class="flex flex-col text-white text-center gap-5">
          <h1
            class="text-3xl lg:text-8xl text-white text-center underline"
            style="opacity: {y / (h / 1.5)}"
          >
            ABOUT US
          </h1>
          <div class="flex flex-col" style="opacity: {y / (h / 1.5)}">
            <p class="text-sm lg:text-4xl p-0.5 lg:p-10">
              Hi! We are Project Code! Our main goal is encouraging project-based coding and
              collaboration. During club meetings, you will work with others on projects to add to
              your programming portfolio. This will allow you to improve coding skills while
              creating tangible work to show when applying to coding programs/internships. Join us
              every Monday at 3:15 PM to meet this like-minded community of programmers and develop
              your coding skills!
            </p>
            <h2 class="text-lg lg:text-4xl">Club Officers</h2>
            <p class="text-xs lg:text-lg">
              President, sopeckner@s.sfusd.edu<br />
              VP, brlau6@s.sfusd.edu
            </p>
          </div>
        </div>
      {/if}
    </div>
  </section>
</div>
