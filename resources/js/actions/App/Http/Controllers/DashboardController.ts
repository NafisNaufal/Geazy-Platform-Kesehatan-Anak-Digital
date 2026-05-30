import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\DashboardController::index
* @see app/Http/Controllers/DashboardController.php:13
* @route '/dashboard'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DashboardController::index
* @see app/Http/Controllers/DashboardController.php:13
* @route '/dashboard'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DashboardController::index
* @see app/Http/Controllers/DashboardController.php:13
* @route '/dashboard'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DashboardController::index
* @see app/Http/Controllers/DashboardController.php:13
* @route '/dashboard'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\DashboardController::index
* @see app/Http/Controllers/DashboardController.php:13
* @route '/dashboard'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DashboardController::index
* @see app/Http/Controllers/DashboardController.php:13
* @route '/dashboard'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DashboardController::index
* @see app/Http/Controllers/DashboardController.php:13
* @route '/dashboard'
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
* @see \App\Http\Controllers\DashboardController::switchChild
* @see app/Http/Controllers/DashboardController.php:96
* @route '/dashboard/switch-child'
*/
export const switchChild = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: switchChild.url(options),
    method: 'post',
})

switchChild.definition = {
    methods: ["post"],
    url: '/dashboard/switch-child',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DashboardController::switchChild
* @see app/Http/Controllers/DashboardController.php:96
* @route '/dashboard/switch-child'
*/
switchChild.url = (options?: RouteQueryOptions) => {
    return switchChild.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DashboardController::switchChild
* @see app/Http/Controllers/DashboardController.php:96
* @route '/dashboard/switch-child'
*/
switchChild.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: switchChild.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DashboardController::switchChild
* @see app/Http/Controllers/DashboardController.php:96
* @route '/dashboard/switch-child'
*/
const switchChildForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: switchChild.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DashboardController::switchChild
* @see app/Http/Controllers/DashboardController.php:96
* @route '/dashboard/switch-child'
*/
switchChildForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: switchChild.url(options),
    method: 'post',
})

switchChild.form = switchChildForm

const DashboardController = { index, switchChild }

export default DashboardController