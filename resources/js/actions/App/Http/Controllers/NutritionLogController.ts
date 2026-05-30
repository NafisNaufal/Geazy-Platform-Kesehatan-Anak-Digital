import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\NutritionLogController::index
* @see app/Http/Controllers/NutritionLogController.php:17
* @route '/nutrisi'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/nutrisi',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NutritionLogController::index
* @see app/Http/Controllers/NutritionLogController.php:17
* @route '/nutrisi'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NutritionLogController::index
* @see app/Http/Controllers/NutritionLogController.php:17
* @route '/nutrisi'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NutritionLogController::index
* @see app/Http/Controllers/NutritionLogController.php:17
* @route '/nutrisi'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NutritionLogController::index
* @see app/Http/Controllers/NutritionLogController.php:17
* @route '/nutrisi'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NutritionLogController::index
* @see app/Http/Controllers/NutritionLogController.php:17
* @route '/nutrisi'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NutritionLogController::index
* @see app/Http/Controllers/NutritionLogController.php:17
* @route '/nutrisi'
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
* @see \App\Http\Controllers\NutritionLogController::store
* @see app/Http/Controllers/NutritionLogController.php:96
* @route '/nutrisi'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/nutrisi',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NutritionLogController::store
* @see app/Http/Controllers/NutritionLogController.php:96
* @route '/nutrisi'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NutritionLogController::store
* @see app/Http/Controllers/NutritionLogController.php:96
* @route '/nutrisi'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NutritionLogController::store
* @see app/Http/Controllers/NutritionLogController.php:96
* @route '/nutrisi'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NutritionLogController::store
* @see app/Http/Controllers/NutritionLogController.php:96
* @route '/nutrisi'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\NutritionLogController::destroy
* @see app/Http/Controllers/NutritionLogController.php:135
* @route '/nutrisi/{log}'
*/
export const destroy = (args: { log: number | { id: number } } | [log: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/nutrisi/{log}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\NutritionLogController::destroy
* @see app/Http/Controllers/NutritionLogController.php:135
* @route '/nutrisi/{log}'
*/
destroy.url = (args: { log: number | { id: number } } | [log: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { log: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { log: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            log: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        log: typeof args.log === 'object'
        ? args.log.id
        : args.log,
    }

    return destroy.definition.url
            .replace('{log}', parsedArgs.log.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NutritionLogController::destroy
* @see app/Http/Controllers/NutritionLogController.php:135
* @route '/nutrisi/{log}'
*/
destroy.delete = (args: { log: number | { id: number } } | [log: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\NutritionLogController::destroy
* @see app/Http/Controllers/NutritionLogController.php:135
* @route '/nutrisi/{log}'
*/
const destroyForm = (args: { log: number | { id: number } } | [log: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NutritionLogController::destroy
* @see app/Http/Controllers/NutritionLogController.php:135
* @route '/nutrisi/{log}'
*/
destroyForm.delete = (args: { log: number | { id: number } } | [log: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \App\Http\Controllers\NutritionLogController::foods
* @see app/Http/Controllers/NutritionLogController.php:144
* @route '/api/foods'
*/
export const foods = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: foods.url(options),
    method: 'get',
})

foods.definition = {
    methods: ["get","head"],
    url: '/api/foods',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NutritionLogController::foods
* @see app/Http/Controllers/NutritionLogController.php:144
* @route '/api/foods'
*/
foods.url = (options?: RouteQueryOptions) => {
    return foods.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NutritionLogController::foods
* @see app/Http/Controllers/NutritionLogController.php:144
* @route '/api/foods'
*/
foods.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: foods.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NutritionLogController::foods
* @see app/Http/Controllers/NutritionLogController.php:144
* @route '/api/foods'
*/
foods.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: foods.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NutritionLogController::foods
* @see app/Http/Controllers/NutritionLogController.php:144
* @route '/api/foods'
*/
const foodsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: foods.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NutritionLogController::foods
* @see app/Http/Controllers/NutritionLogController.php:144
* @route '/api/foods'
*/
foodsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: foods.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NutritionLogController::foods
* @see app/Http/Controllers/NutritionLogController.php:144
* @route '/api/foods'
*/
foodsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: foods.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

foods.form = foodsForm

const NutritionLogController = { index, store, destroy, foods }

export default NutritionLogController