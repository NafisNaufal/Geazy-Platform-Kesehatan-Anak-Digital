import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MessageController::store
* @see app/Http/Controllers/MessageController.php:12
* @route '/konsultasi/{konsultasi}/pesan'
*/
const store8476b9a841aa2b17d976644d68a7fb81 = (args: { konsultasi: number | { id: number } } | [konsultasi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store8476b9a841aa2b17d976644d68a7fb81.url(args, options),
    method: 'post',
})

store8476b9a841aa2b17d976644d68a7fb81.definition = {
    methods: ["post"],
    url: '/konsultasi/{konsultasi}/pesan',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MessageController::store
* @see app/Http/Controllers/MessageController.php:12
* @route '/konsultasi/{konsultasi}/pesan'
*/
store8476b9a841aa2b17d976644d68a7fb81.url = (args: { konsultasi: number | { id: number } } | [konsultasi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { konsultasi: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { konsultasi: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            konsultasi: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        konsultasi: typeof args.konsultasi === 'object'
        ? args.konsultasi.id
        : args.konsultasi,
    }

    return store8476b9a841aa2b17d976644d68a7fb81.definition.url
            .replace('{konsultasi}', parsedArgs.konsultasi.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MessageController::store
* @see app/Http/Controllers/MessageController.php:12
* @route '/konsultasi/{konsultasi}/pesan'
*/
store8476b9a841aa2b17d976644d68a7fb81.post = (args: { konsultasi: number | { id: number } } | [konsultasi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store8476b9a841aa2b17d976644d68a7fb81.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MessageController::store
* @see app/Http/Controllers/MessageController.php:12
* @route '/konsultasi/{konsultasi}/pesan'
*/
const store8476b9a841aa2b17d976644d68a7fb81Form = (args: { konsultasi: number | { id: number } } | [konsultasi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store8476b9a841aa2b17d976644d68a7fb81.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MessageController::store
* @see app/Http/Controllers/MessageController.php:12
* @route '/konsultasi/{konsultasi}/pesan'
*/
store8476b9a841aa2b17d976644d68a7fb81Form.post = (args: { konsultasi: number | { id: number } } | [konsultasi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store8476b9a841aa2b17d976644d68a7fb81.url(args, options),
    method: 'post',
})

store8476b9a841aa2b17d976644d68a7fb81.form = store8476b9a841aa2b17d976644d68a7fb81Form
/**
* @see \App\Http\Controllers\MessageController::store
* @see app/Http/Controllers/MessageController.php:12
* @route '/mitra/konsultasi/{konsultasi}/pesan'
*/
const storeb8f3a251bdb9116258d5b977c6bf228c = (args: { konsultasi: number | { id: number } } | [konsultasi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeb8f3a251bdb9116258d5b977c6bf228c.url(args, options),
    method: 'post',
})

storeb8f3a251bdb9116258d5b977c6bf228c.definition = {
    methods: ["post"],
    url: '/mitra/konsultasi/{konsultasi}/pesan',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MessageController::store
* @see app/Http/Controllers/MessageController.php:12
* @route '/mitra/konsultasi/{konsultasi}/pesan'
*/
storeb8f3a251bdb9116258d5b977c6bf228c.url = (args: { konsultasi: number | { id: number } } | [konsultasi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { konsultasi: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { konsultasi: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            konsultasi: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        konsultasi: typeof args.konsultasi === 'object'
        ? args.konsultasi.id
        : args.konsultasi,
    }

    return storeb8f3a251bdb9116258d5b977c6bf228c.definition.url
            .replace('{konsultasi}', parsedArgs.konsultasi.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MessageController::store
* @see app/Http/Controllers/MessageController.php:12
* @route '/mitra/konsultasi/{konsultasi}/pesan'
*/
storeb8f3a251bdb9116258d5b977c6bf228c.post = (args: { konsultasi: number | { id: number } } | [konsultasi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeb8f3a251bdb9116258d5b977c6bf228c.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MessageController::store
* @see app/Http/Controllers/MessageController.php:12
* @route '/mitra/konsultasi/{konsultasi}/pesan'
*/
const storeb8f3a251bdb9116258d5b977c6bf228cForm = (args: { konsultasi: number | { id: number } } | [konsultasi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeb8f3a251bdb9116258d5b977c6bf228c.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MessageController::store
* @see app/Http/Controllers/MessageController.php:12
* @route '/mitra/konsultasi/{konsultasi}/pesan'
*/
storeb8f3a251bdb9116258d5b977c6bf228cForm.post = (args: { konsultasi: number | { id: number } } | [konsultasi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeb8f3a251bdb9116258d5b977c6bf228c.url(args, options),
    method: 'post',
})

storeb8f3a251bdb9116258d5b977c6bf228c.form = storeb8f3a251bdb9116258d5b977c6bf228cForm

/**
* Multiple routes resolve to \App\Http\Controllers\MessageController::store, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `store['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const store = {
    '/konsultasi/{konsultasi}/pesan': store8476b9a841aa2b17d976644d68a7fb81,
    '/mitra/konsultasi/{konsultasi}/pesan': storeb8f3a251bdb9116258d5b977c6bf228c,
}

const MessageController = { store }

export default MessageController