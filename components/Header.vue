<!-- Please remove this file from your project -->
<template>
  <div class="pl-5 md:pl-10 flex justify-between items-center">
    <h2>Rebuild Kogarah Public School</h2>
    <button class="border border-solid border-gray-600 px-3 py-1  text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
      <i class="fas fa-bars"></i>
    </button>
    <div class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
        <a href="#" class="p-8 lg:px-4 text-white bg-indigo-600">Sign the Petition</a>
        <a href="#" class="p-8 lg:px-4 text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">About the campaign</a>
        <a href="#" class="p-8 lg:px-4 text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">In the Media</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
