import * as Klaro from 'klaro';
import 'klaro/dist/style.css';

// we define a minimal configuration
const config = {
    translations: {
        en: {
            googleAnalytics: {
                title: 'Google Analytics',
                description:
                    'The analytics service ran by a most definitely non-evil company.',
            },
            purposes: {
                analytics: 'Analytics',
                styling: 'Styling',
            },
        },
    },
    apps: [
        {
            name: 'googleAnalytics',
            purposes: ['analytics'],
        },
        {
            name: 'bootstrap',
            title: 'Bootstrap (external resource)',
            description: 'Example for embedding external stylesheets.',
            purposes: ['styling'],
        },
    ],
};

// we assign the Klaro module to the window, so that we can access it in JS
window.klaro = Klaro;
window.klaroConfig = config;
// we set up Klaro with the config
Klaro.setup(config);
