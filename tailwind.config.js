import withMT from '@material-tailwind/react/utils/withMT'
import defaultTheme from 'tailwindcss/defaultTheme'

export default withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        sm: "640px",
        md: "720px",
        lg: "960px",
        "lg-max": { max: "960px" },
        xl: "1140px",
        "2xl": "1320px",
        "3xl": "1640px"
      },
      maxWidth: {
        '1640px': '1640px',
      },
      fontFamily: {
        // your existing fonts
        'display': ['Cormorant Garamond', ...defaultTheme.fontFamily.serif],
        'heading': ['Montserrat', ...defaultTheme.fontFamily.sans],
        'sans': ['Quicksand', ...defaultTheme.fontFamily.sans],
        'script': ['Cinzel', ...defaultTheme.fontFamily.serif],
        'details': ['Tenor Sans', ...defaultTheme.fontFamily.sans],
       
        'ubuntu': ['Ubuntu', ...defaultTheme.fontFamily.sans],
      },
      letterSpacing: {
        'luxury': '0.25em',
        'refined': '0.15em',
      },
      colors: {
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
})
