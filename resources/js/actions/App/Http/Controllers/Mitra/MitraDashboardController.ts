import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Mitra\MitraDashboardController::index
* @see app/Http/Controllers/Mitra/MitraDashboardController.php:13
* @route '/mitra/dashboard'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/mitra/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Mitra\MitraDashboardController::index
* @see app/Http/Controllers/Mitra/MitraDashboardController.php:13
* @route '/mitra/dashboard'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Mitra\MitraDashboardController::index
* @see app/Http/Controllers/Mitra/MitraDashboardController.php:13
* @route '/mitra/dashboard'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Mitra\MitraDashboardController::index
* @see app/Http/Controllers/Mitra/MitraDashboardController.php:13
* @route '/mitra/dashboard'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Mitra\MitraDashboardController::index
* @see app/Http/Controllers/Mitra/MitraDashboardController.php:13
* @route '/mitra/dashboard'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Mitra\MitraDashboardController::index
* @see app/Http/Controllers/Mitra/MitraDashboardController.php:13
* @route '/mitra/dashboard'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Mitra\MitraDashboardController::index
* @see app/Http/Controllers/Mitra/MitraDashboardController.php:13
* @route '/mitra/dashboard'
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
* @see \App\Http\Controllers\Mitra\MitraDashboardController::toggleAvailability
* @see app/Http/Controllers/Mitra/MitraDashboardController.php:47
* @route '/mitra/availability'
*/
export const toggleAvailability = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleAvailability.url(options),
    method: 'post',
})

toggleAvailability.definition = {
    methods: ["post"],
    url: '/mitra/availability',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Mitra\MitraDashboardController::toggleAvailability
* @see app/Http/Controllers/Mitra/MitraDashboardController.php:47
* @route '/mitra/availability'
*/
toggleAvailability.url = (options?: RouteQueryOptions) => {
    return toggleAvailability.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Mitra\MitraDashboardController::toggleAvailability
* @see app/Http/Controllers/Mitra/MitraDashboardController.php:47
* @route '/mitra/availability'
*/
toggleAvailability.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleAvailability.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Mitra\MitraDashboardController::toggleAvailability
* @see app/Http/Controllers/Mitra/MitraDashboardController.php:47
* @route '/mitra/availability'
*/
const toggleAvailabilityForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleAvailability.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Mitra\MitraDashboardController::toggleAvailability
* @see app/Http/Controllers/Mitra/MitraDashboardController.php:47
* @route '/mitra/availability'
*/
toggleAvailabilityForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleAvailability.url(options),
    method: 'post',
})

toggleAvailability.form = toggleAvailabilityForm

const MitraDashboardController = { index, toggleAvailability }

export default MitraDashboardController