import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ConsultationController::index
* @see app/Http/Controllers/ConsultationController.php:14
* @route '/connect'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/connect',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ConsultationController::index
* @see app/Http/Controllers/ConsultationController.php:14
* @route '/connect'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ConsultationController::index
* @see app/Http/Controllers/ConsultationController.php:14
* @route '/connect'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ConsultationController::index
* @see app/Http/Controllers/ConsultationController.php:14
* @route '/connect'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ConsultationController::index
* @see app/Http/Controllers/ConsultationController.php:14
* @route '/connect'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ConsultationController::index
* @see app/Http/Controllers/ConsultationController.php:14
* @route '/connect'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ConsultationController::index
* @see app/Http/Controllers/ConsultationController.php:14
* @route '/connect'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\ConsultationController::start
* @see app/Http/Controllers/ConsultationController.php:50
* @route '/connect/mulai/{doctor}'
*/
export const start = (args: { doctor: number | { id: number } } | [doctor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(args, options),
    method: 'post',
})

start.definition = {
    methods: ["post"],
    url: '/connect/mulai/{doctor}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ConsultationController::start
* @see app/Http/Controllers/ConsultationController.php:50
* @route '/connect/mulai/{doctor}'
*/
start.url = (args: { doctor: number | { id: number } } | [doctor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { doctor: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { doctor: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            doctor: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        doctor: typeof args.doctor === 'object'
        ? args.doctor.id
        : args.doctor,
    }

    return start.definition.url
            .replace('{doctor}', parsedArgs.doctor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ConsultationController::start
* @see app/Http/Controllers/ConsultationController.php:50
* @route '/connect/mulai/{doctor}'
*/
start.post = (args: { doctor: number | { id: number } } | [doctor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ConsultationController::start
* @see app/Http/Controllers/ConsultationController.php:50
* @route '/connect/mulai/{doctor}'
*/
const startForm = (args: { doctor: number | { id: number } } | [doctor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: start.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ConsultationController::start
* @see app/Http/Controllers/ConsultationController.php:50
* @route '/connect/mulai/{doctor}'
*/
startForm.post = (args: { doctor: number | { id: number } } | [doctor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: start.url(args, options),
    method: 'post',
})

start.form = startForm

/**
* @see \App\Http\Controllers\ConsultationController::show
* @see app/Http/Controllers/ConsultationController.php:73
* @route '/konsultasi/{konsultasi}'
*/
const show40d3c3f4d538bcf315cab4434424f663 = (args: { konsultasi: number | { id: number } } | [konsultasi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show40d3c3f4d538bcf315cab4434424f663.url(args, options),
    method: 'get',
})

show40d3c3f4d538bcf315cab4434424f663.definition = {
    methods: ["get","head"],
    url: '/konsultasi/{konsultasi}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ConsultationController::show
* @see app/Http/Controllers/ConsultationController.php:73
* @route '/konsultasi/{konsultasi}'
*/
show40d3c3f4d538bcf315cab4434424f663.url = (args: { konsultasi: number | { id: number } } | [konsultasi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return show40d3c3f4d538bcf315cab4434424f663.definition.url
            .replace('{konsultasi}', parsedArgs.konsultasi.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ConsultationController::show
* @see app/Http/Controllers/ConsultationController.php:73
* @route '/konsultasi/{konsultasi}'
*/
show40d3c3f4d538bcf315cab4434424f663.get = (args: { konsultasi: number | { id: number } } | [konsultasi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show40d3c3f4d538bcf315cab4434424f663.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ConsultationController::show
* @see app/Http/Controllers/ConsultationController.php:73
* @route '/konsultasi/{konsultasi}'
*/
show40d3c3f4d538bcf315cab4434424f663.head = (args: { konsultasi: number | { id: number } } | [konsultasi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show40d3c3f4d538bcf315cab4434424f663.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ConsultationController::show
* @see app/Http/Controllers/ConsultationController.php:73
* @route '/konsultasi/{konsultasi}'
*/
const show40d3c3f4d538bcf315cab4434424f663Form = (args: { konsultasi: number | { id: number } } | [konsultasi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show40d3c3f4d538bcf315cab4434424f663.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ConsultationController::show
* @see app/Http/Controllers/ConsultationController.php:73
* @route '/konsultasi/{konsultasi}'
*/
show40d3c3f4d538bcf315cab4434424f663Form.get = (args: { konsultasi: number | { id: number } } | [konsultasi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show40d3c3f4d538bcf315cab4434424f663.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ConsultationController::show
* @see app/Http/Controllers/ConsultationController.php:73
* @route '/konsultasi/{konsultasi}'
*/
show40d3c3f4d538bcf315cab4434424f663Form.head = (args: { konsultasi: number | { id: number } } | [konsultasi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show40d3c3f4d538bcf315cab4434424f663.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show40d3c3f4d538bcf315cab4434424f663.form = show40d3c3f4d538bcf315cab4434424f663Form
/**
* @see \App\Http\Controllers\ConsultationController::show
* @see app/Http/Controllers/ConsultationController.php:73
* @route '/mitra/konsultasi/{konsultasi}'
*/
const show30c7798988629abd1bf9bc3e0e855537 = (args: { konsultasi: number | { id: number } } | [konsultasi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show30c7798988629abd1bf9bc3e0e855537.url(args, options),
    method: 'get',
})

show30c7798988629abd1bf9bc3e0e855537.definition = {
    methods: ["get","head"],
    url: '/mitra/konsultasi/{konsultasi}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ConsultationController::show
* @see app/Http/Controllers/ConsultationController.php:73
* @route '/mitra/konsultasi/{konsultasi}'
*/
show30c7798988629abd1bf9bc3e0e855537.url = (args: { konsultasi: number | { id: number } } | [konsultasi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return show30c7798988629abd1bf9bc3e0e855537.definition.url
            .replace('{konsultasi}', parsedArgs.konsultasi.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ConsultationController::show
* @see app/Http/Controllers/ConsultationController.php:73
* @route '/mitra/konsultasi/{konsultasi}'
*/
show30c7798988629abd1bf9bc3e0e855537.get = (args: { konsultasi: number | { id: number } } | [konsultasi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show30c7798988629abd1bf9bc3e0e855537.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ConsultationController::show
* @see app/Http/Controllers/ConsultationController.php:73
* @route '/mitra/konsultasi/{konsultasi}'
*/
show30c7798988629abd1bf9bc3e0e855537.head = (args: { konsultasi: number | { id: number } } | [konsultasi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show30c7798988629abd1bf9bc3e0e855537.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ConsultationController::show
* @see app/Http/Controllers/ConsultationController.php:73
* @route '/mitra/konsultasi/{konsultasi}'
*/
const show30c7798988629abd1bf9bc3e0e855537Form = (args: { konsultasi: number | { id: number } } | [konsultasi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show30c7798988629abd1bf9bc3e0e855537.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ConsultationController::show
* @see app/Http/Controllers/ConsultationController.php:73
* @route '/mitra/konsultasi/{konsultasi}'
*/
show30c7798988629abd1bf9bc3e0e855537Form.get = (args: { konsultasi: number | { id: number } } | [konsultasi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show30c7798988629abd1bf9bc3e0e855537.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ConsultationController::show
* @see app/Http/Controllers/ConsultationController.php:73
* @route '/mitra/konsultasi/{konsultasi}'
*/
show30c7798988629abd1bf9bc3e0e855537Form.head = (args: { konsultasi: number | { id: number } } | [konsultasi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show30c7798988629abd1bf9bc3e0e855537.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show30c7798988629abd1bf9bc3e0e855537.form = show30c7798988629abd1bf9bc3e0e855537Form

/**
* Multiple routes resolve to \App\Http\Controllers\ConsultationController::show, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `show['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const show = {
    '/konsultasi/{konsultasi}': show40d3c3f4d538bcf315cab4434424f663,
    '/mitra/konsultasi/{konsultasi}': show30c7798988629abd1bf9bc3e0e855537,
}

/**
* @see \App\Http\Controllers\ConsultationController::close
* @see app/Http/Controllers/ConsultationController.php:114
* @route '/konsultasi/{konsultasi}/tutup'
*/
export const close = (args: { konsultasi: number | { id: number } } | [konsultasi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: close.url(args, options),
    method: 'post',
})

close.definition = {
    methods: ["post"],
    url: '/konsultasi/{konsultasi}/tutup',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ConsultationController::close
* @see app/Http/Controllers/ConsultationController.php:114
* @route '/konsultasi/{konsultasi}/tutup'
*/
close.url = (args: { konsultasi: number | { id: number } } | [konsultasi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return close.definition.url
            .replace('{konsultasi}', parsedArgs.konsultasi.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ConsultationController::close
* @see app/Http/Controllers/ConsultationController.php:114
* @route '/konsultasi/{konsultasi}/tutup'
*/
close.post = (args: { konsultasi: number | { id: number } } | [konsultasi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: close.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ConsultationController::close
* @see app/Http/Controllers/ConsultationController.php:114
* @route '/konsultasi/{konsultasi}/tutup'
*/
const closeForm = (args: { konsultasi: number | { id: number } } | [konsultasi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: close.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ConsultationController::close
* @see app/Http/Controllers/ConsultationController.php:114
* @route '/konsultasi/{konsultasi}/tutup'
*/
closeForm.post = (args: { konsultasi: number | { id: number } } | [konsultasi: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: close.url(args, options),
    method: 'post',
})

close.form = closeForm

const ConsultationController = { index, start, show, close }

export default ConsultationController