<!-- Please remove this file from your project -->
<template>
  <div class="pl-5 md:pl-10 flex justify-between items-center">
    <h2><a href="/">Rebuild Kogarah Public School</a></h2>
    <button class="border border-solid border-gray-600 px-3 py-1  text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
      <i class="fas fa-bars"></i>
    </button>
    <div class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
        <a href="#" class="p-8 lg:px-16 text-white bg-green-900 hover:bg-gray-700 hover:text-gray-200 transition-colors duration-300">Sign the Petition</a>
        <a href="/about" class="p-8 lg:px-16 text-white bg-blue-900 hover:bg-gray-700 hover:text-gray-200 transition-colors duration-300">About the campaign</a>
        <a href="/media" class="p-8 lg:px-16 text-white bg-yellow-500 hover:bg-gray-700 hover:text-gray-200 transition-colors duration-300">In the Media</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
