<script lang="ts">
  import { navigate } from "astro:transitions/client";

  type Link = {
    href: string;
    text: string;
  }[];

  let isOpen = $state(false);

  function toggleMenu() {
    isOpen = !isOpen;
  }

  function to(url: string) {
    isOpen = false;
    navigate(url);
  }

  const url: Link = [
    { href: "/home", text: "Home" },
    { href: "/about", text: "Tentang" },
    { href: "/message", text: "Titip pesan" },
  ];
</script>

<nav class="bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16 items-center">
      <!-- Logo -->
      <button onclick={() => to("/")} class="text-2xl font-bold text-white">
        8.10
      </button>

      <!-- Hamburger (mobile) -->
      <button
        class="lg:hidden text-gray-300 hover:text-white focus:outline-none"
        onclick={toggleMenu}
        aria-label="Toggle menu"
      >
        <i class={isOpen ? "fas fa-xmark" : "fas fa-bars"}></i>
      </button>

      <!-- Links (desktop) -->
      <ul class="hidden lg:flex space-x-8 text-gray-300 font-medium">
        {#each url as { href, text }}
          {#if href == window.location.pathname}
            <li>
              <span class=" cursor-pointer hover:text-white transition">
                {text}
              </span>
            </li>
          {:else}
            <li>
              <a {href} class="hover:text-white transition">
                {text}
              </a>
            </li>
          {/if}
        {/each}
      </ul>
    </div>
  </div>

  <!-- Dropdown (mobile) -->
  <div
    class={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
      isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
    }`}
  >
    <ul
      class="flex flex-col px-6 py-4 space-y-2 bg-gray-900 text-gray-300 font-medium"
    >
      {#each url as { href, text }}
        {#if href == window.location.pathname}
          <li>
            <span class="hover:text-white transition cursor-pointer"
              >{text}</span
            >
          </li>
        {:else}
          <li>
            <button
              onclick={() => to(href)}
              class="hover:text-white transition"
            >
              {text}
            </button>
          </li>
        {/if}
      {/each}
    </ul>
  </div>
</nav>
