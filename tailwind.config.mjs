/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    container: {
			center: true,
      padding: '1rem',
			screens: {
				xl: '1024px'
			}
		},
		extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%', // add required value here
          }
        }
      }
    },
	},
	plugins: [require('@tailwindcss/typography')],
}
