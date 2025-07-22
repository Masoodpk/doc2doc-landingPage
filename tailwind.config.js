// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
         anekMalayalam: ['Anek Malayalam', 'sans-serif'],
      },
    },
  },
  plugins: [],
  server: {
    host: true,
    allowedHosts: ['.trycloudflare.com'],
  },
};
