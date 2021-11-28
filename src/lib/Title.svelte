<script>
  export let y, h;
</script>

<section class="flex justify-center items-center bg-circuit bg-cover h-screen w-full">
  <div
    class="inline-flex justify-center items-center flex-col bg-black p-3 lg:p-7 rounded-xl shadow-dark"
    style="transform: translate(0, {-y * 0.5}px; opacity: {1 - y / (h / 2)}"
  >
    <div class="flex justify-center items-center gap-4 lg:gap-8">
      <h1 class="text-3xl lg:text-8xl text-white m-4">PROJECT CODE</h1>
      <img src="code.svg" alt="Code icon" class="w-8 h-8 lg:w-24 lg:h-24" />
    </div>
    <h2 class="text-white text-xl lg:mt-4 animate-pulse">SCROLL DOWN</h2>
    <img src="down.svg" alt="Arrows pointing down" class="h-5 w-5 animate-pulse" />
  </div>
</section>
