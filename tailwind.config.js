module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      body: ['DM Sans', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        'kpsgreen':'#003f1f',
      },
      backgroundImage: {
        'hero': "url('https://via.placeholder.com/1500x460?text=images to come')",
      },
    }
  },
}