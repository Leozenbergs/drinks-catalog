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
                    primary: '#1867C0',
                    secondary: '#5CBBF6',
                },
            },
        },
    },
})

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(vuetify)
});