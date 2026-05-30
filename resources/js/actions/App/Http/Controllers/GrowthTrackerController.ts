import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\GrowthTrackerController::index
* @see app/Http/Controllers/GrowthTrackerController.php:14
* @route '/tracker'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/tracker',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GrowthTrackerController::index
* @see app/Http/Controllers/GrowthTrackerController.php:14
* @route '/tracker'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GrowthTrackerController::index
* @see app/Http/Controllers/GrowthTrackerController.php:14
* @route '/tracker'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GrowthTrackerController::index
* @see app/Http/Controllers/GrowthTrackerController.php:14
* @route '/tracker'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\GrowthTrackerController::index
* @see app/Http/Controllers/GrowthTrackerController.php:14
* @route '/tracker'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GrowthTrackerController::index
* @see app/Http/Controllers/GrowthTrackerController.php:14
* @route '/tracker'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GrowthTrackerController::index
* @see app/Http/Controllers/GrowthTrackerController.php:14
* @route '/tracker'
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
* @see \App\Http\Controllers\GrowthTrackerController::store
* @see app/Http/Controllers/GrowthTrackerController.php:62
* @route '/tracker'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/tracker',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\GrowthTrackerController::store
* @see app/Http/Controllers/GrowthTrackerController.php:62
* @route '/tracker'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GrowthTrackerController::store
* @see app/Http/Controllers/GrowthTrackerController.php:62
* @route '/tracker'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\GrowthTrackerController::store
* @see app/Http/Controllers/GrowthTrackerController.php:62
* @route '/tracker'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\GrowthTrackerController::store
* @see app/Http/Controllers/GrowthTrackerController.php:62
* @route '/tracker'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\GrowthTrackerController::destroy
* @see app/Http/Controllers/GrowthTrackerController.php:90
* @route '/tracker/{record}'
*/
export const destroy = (args: { record: number | { id: number } } | [record: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/tracker/{record}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\GrowthTrackerController::destroy
* @see app/Http/Controllers/GrowthTrackerController.php:90
* @route '/tracker/{record}'
*/
destroy.url = (args: { record: number | { id: number } } | [record: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { record: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            record: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        record: typeof args.record === 'object'
        ? args.record.id
        : args.record,
    }

    return destroy.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GrowthTrackerController::destroy
* @see app/Http/Controllers/GrowthTrackerController.php:90
* @route '/tracker/{record}'
*/
destroy.delete = (args: { record: number | { id: number } } | [record: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\GrowthTrackerController::destroy
* @see app/Http/Controllers/GrowthTrackerController.php:90
* @route '/tracker/{record}'
*/
const destroyForm = (args: { record: number | { id: number } } | [record: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\GrowthTrackerController::destroy
* @see app/Http/Controllers/GrowthTrackerController.php:90
* @route '/tracker/{record}'
*/
destroyForm.delete = (args: { record: number | { id: number } } | [record: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const GrowthTrackerController = { index, store, destroy }

export default GrowthTrackerController