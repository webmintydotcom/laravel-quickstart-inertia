import { createInertiaApp } from '@inertiajs/react';
import { route, type Config } from 'ziggy-js';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

/**
 * Ziggy reads its route list from a `Ziggy` global that the @routes Blade
 * directive defines in the browser. Node never sees that directive, so under
 * SSR the global is undefined and the first route() call during render throws.
 * Inertia catches the error and falls back to client rendering, so the symptom
 * is not a broken page: it is SSR silently doing nothing.
 *
 * HandleInertiaRequests shares the config as a `ziggy` prop. Assigning it to the
 * global here, before createInertiaApp renders, is what makes route() work server
 * side. `location` arrives as a string and becomes a URL, because route().current()
 * reads .pathname, .search and .host off it - the parts it would otherwise take
 * from window.location.
 *
 * @routes also defines a global route() in the browser. Mirroring it here means
 * components can call either the global or `import { route } from 'ziggy-js'`.
 */
interface ZiggyProps {
    ziggy: Config & { location: string };
}

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    setup: ({ App, props }) => {
        const { ziggy } = props.initialPage.props as unknown as ZiggyProps;

        globalThis.Ziggy = { ...ziggy, location: new URL(ziggy.location) };
        globalThis.route = route;

        return <App {...props} />;
    },
});
