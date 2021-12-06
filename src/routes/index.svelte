<script>
  import '../app.css';
  import Title from '$lib/Title.svelte';
  import { fade } from 'svelte/transition';

  let project = 1;

  let y, h;
  $: console.log(y, h);
</script>

<svelte:head><title>Project Code</title></svelte:head>
<svelte:window bind:scrollY={y} bind:outerHeight={h} />

<div class="flex flex-col justify-center items-center h-full">
  <Title {y} {h} />
  <section class="bg-black h-screen w-full p-10" style="transform: translate(0, {-y * 0.5}px">
    <div class="bg-gray-900 h-full p-3 lg:p-10 shadow-dark rounded-xl flex flex-col justify-center">
      {#if y > 0.25 * h && y < h}
        <div transition:fade class="flex flex-col text-white text-center">
          <div class="flex flex-col gap-3" style="opacity: {y / (h / 1.5)}">
            <p class="text-sm lg:text-4xl p-0.5 lg:p-10">
              Hi! We are Project Code! Our main goal is encouraging project-based coding and
              collaboration. During club meetings, you will work with others on projects to add to
              your programming portfolio. This will allow you to improve coding skills while
              creating tangible work to show when applying to coding programs/internships. Join us
              every Monday at 3:15 PM to meet this like-minded community of programmers and develop
              your coding skills!
            </p>
            <div>
              <h2 class="text-lg lg:text-4xl">Club Officers</h2>
              <p class="text-xs lg:text-lg">
                President, sopeckner@s.sfusd.edu<br />
                VP, brlau6@s.sfusd.edu
              </p>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </section>
  <section class="h-screen" />
  <section
    class="bg-topography bg-cover h-screen w-full py-20"
    style="transform: translate(0, {-y * 1.75}px"
  >
    {#if y > 0.85 * h}
      <div
        transition:fade={{ duration: 1000 }}
        class="h-full w-full flex items-center justify-around"
      >
        <img
          src="left.svg"
          alt="Left arrow"
          class="m-3 lg:m-10 w-20 h-20 lg:h-36 lg:w-36 p-5 cursor-pointer shadow-dark rounded-full bg-gray-900"
        />
        {#if project === 1}
          <div class="bg-gray-900 h-full shadow-dark rounded-xl flex flex-col">
            <div
              class="bg-gradient-to-tr from-blue-500 to-teal-500 h-1/3 rounded-xl text-white text-4xl  
                     lg:text-8xl justify-center items-center flex text-center p-4"
            >
              INSERT PROJECT IMAGE HERE
            </div>
            <div class="text-white text-xl p-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nemo doloremque
              nulla neque maxime magnam rerum sed laborum voluptate voluptates facilis cum,
              distinctio consequatur at molestias saepe exercitationem modi porro. Vitae repellendus
              officiis sunt quas in neque dolore harum architecto, voluptatibus, ea dolorem incidunt
              illo culpa quasi ducimus. Eum quo ratione ducimus, ipsa voluptatem quidem ab quos
              adipisci velit eligendi culpa a, eius qui nihil voluptatum, enim et tempore minima
              modi aut ut labore? Ad ratione, natus expedita in illum minus praesentium voluptatibus
              repellendus animi magnam alias, voluptas veritatis error corporis numquam. Unde
              incidunt temporibus repudiandae quibusdam vitae ea distinctio.
            </div>
          </div>
        {/if}
        <img
          src="right.svg"
          alt="Left arrow"
          class="m-3 lg:m-10 h-20 w-20 lg:h-36 lg:w-36 p-5 cursor-pointer shadow-dark rounded-full bg-gray-900"
        />
      </div>
    {/if}
  </section>
</div>
