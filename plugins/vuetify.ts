import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import {createVuetify} from 'vuetify'

const vuetify = createVuetify({
    components,
    directives,
    ssr: true,
    icons: {
        defaultSet: 'mdi', // This is already the default value - only for display purposes
    },
    theme: {
        themes: {
            light: {
                colors: {
                    primary: '#FF6B6B',
                    secondary: '#FFD166',
                    background: '#F4F4F4',
                    accent1: '#6B5B95',
                    accent2: '#88B04B',
                    neutral1: '#333333',
                    neutral2: '#AAA',
                },
            },
        },
    },
})

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(vuetify)
});