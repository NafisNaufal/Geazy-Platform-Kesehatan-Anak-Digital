import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\BookmarkController::toggle
* @see app/Http/Controllers/BookmarkController.php:31
* @route '/eduhub/{article}/bookmark'
*/
export const toggle = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggle.url(args, options),
    method: 'post',
})

toggle.definition = {
    methods: ["post"],
    url: '/eduhub/{article}/bookmark',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BookmarkController::toggle
* @see app/Http/Controllers/BookmarkController.php:31
* @route '/eduhub/{article}/bookmark'
*/
toggle.url = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { article: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { article: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            article: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        article: typeof args.article === 'object'
        ? args.article.id
        : args.article,
    }

    return toggle.definition.url
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BookmarkController::toggle
* @see app/Http/Controllers/BookmarkController.php:31
* @route '/eduhub/{article}/bookmark'
*/
toggle.post = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggle.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BookmarkController::toggle
* @see app/Http/Controllers/BookmarkController.php:31
* @route '/eduhub/{article}/bookmark'
*/
const toggleForm = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggle.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BookmarkController::toggle
* @see app/Http/Controllers/BookmarkController.php:31
* @route '/eduhub/{article}/bookmark'
*/
toggleForm.post = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggle.url(args, options),
    method: 'post',
})

toggle.form = toggleForm

/**
* @see \App\Http\Controllers\BookmarkController::index
* @see app/Http/Controllers/BookmarkController.php:14
* @route '/simpanan'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/simpanan',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BookmarkController::index
* @see app/Http/Controllers/BookmarkController.php:14
* @route '/simpanan'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BookmarkController::index
* @see app/Http/Controllers/BookmarkController.php:14
* @route '/simpanan'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BookmarkController::index
* @see app/Http/Controllers/BookmarkController.php:14
* @route '/simpanan'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BookmarkController::index
* @see app/Http/Controllers/BookmarkController.php:14
* @route '/simpanan'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BookmarkController::index
* @see app/Http/Controllers/BookmarkController.php:14
* @route '/simpanan'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BookmarkController::index
* @see app/Http/Controllers/BookmarkController.php:14
* @route '/simpanan'
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

const BookmarkController = { toggle, index }

export default BookmarkController