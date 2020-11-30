/**
 * TailwindCSS Configuration File
 * @see https://tailwindcss.com/docs/configuration
 *
 * Default Config
 * @see https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  /**
   * opt in to remove deprecated stuff
   * @see https://tailwindcss.com/docs/upcoming-changes
   */
  future: {
    removeDeprecatedGapUtilities: true
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
  /**
   * purge css configuration
   * add classes that are dynamically used
   * @see https://purgecss.com/configuration.html
   */
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled:
      'production' === process.env.NODE_ENV && !process.env.DISABLE_PURGE_CSS,
    mode: 'all',
    content: [
      'assets/css/*.sass',
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'templates/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ],
    options: {
      whitelist: [
        'nuxt-progress',
        'h1',
        'h2',
        'h3',
        'h4',
        'p',
        'blockquote',
        'strong',
        'small',
        'img',
        'figure',
        'figcaption',
        'ol',
        'ul',
        'li',
        'table',
        'thead',
        'tr',
        'th',
        'td',
        'prose'
      ],
      whitelistPatterns: [
        /prose-(sm|md|lg|xl|2xl)/,
        /ds-button--(green|gray|blue)$/
      ]
    }
  },
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    }
  }
}
