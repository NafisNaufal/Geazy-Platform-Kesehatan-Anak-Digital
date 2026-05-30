import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ChildProfileController::index
* @see app/Http/Controllers/ChildProfileController.php:13
* @route '/anak'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/anak',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ChildProfileController::index
* @see app/Http/Controllers/ChildProfileController.php:13
* @route '/anak'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ChildProfileController::index
* @see app/Http/Controllers/ChildProfileController.php:13
* @route '/anak'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ChildProfileController::index
* @see app/Http/Controllers/ChildProfileController.php:13
* @route '/anak'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ChildProfileController::index
* @see app/Http/Controllers/ChildProfileController.php:13
* @route '/anak'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ChildProfileController::index
* @see app/Http/Controllers/ChildProfileController.php:13
* @route '/anak'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ChildProfileController::index
* @see app/Http/Controllers/ChildProfileController.php:13
* @route '/anak'
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
* @see \App\Http\Controllers\ChildProfileController::pilih
* @see app/Http/Controllers/ChildProfileController.php:88
* @route '/anak/pilih'
*/
export const pilih = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pilih.url(options),
    method: 'get',
})

pilih.definition = {
    methods: ["get","head"],
    url: '/anak/pilih',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ChildProfileController::pilih
* @see app/Http/Controllers/ChildProfileController.php:88
* @route '/anak/pilih'
*/
pilih.url = (options?: RouteQueryOptions) => {
    return pilih.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ChildProfileController::pilih
* @see app/Http/Controllers/ChildProfileController.php:88
* @route '/anak/pilih'
*/
pilih.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pilih.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ChildProfileController::pilih
* @see app/Http/Controllers/ChildProfileController.php:88
* @route '/anak/pilih'
*/
pilih.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pilih.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ChildProfileController::pilih
* @see app/Http/Controllers/ChildProfileController.php:88
* @route '/anak/pilih'
*/
const pilihForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pilih.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ChildProfileController::pilih
* @see app/Http/Controllers/ChildProfileController.php:88
* @route '/anak/pilih'
*/
pilihForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pilih.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ChildProfileController::pilih
* @see app/Http/Controllers/ChildProfileController.php:88
* @route '/anak/pilih'
*/
pilihForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pilih.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

pilih.form = pilihForm

/**
* @see \App\Http\Controllers\ChildProfileController::create
* @see app/Http/Controllers/ChildProfileController.php:27
* @route '/anak/tambah'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/anak/tambah',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ChildProfileController::create
* @see app/Http/Controllers/ChildProfileController.php:27
* @route '/anak/tambah'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ChildProfileController::create
* @see app/Http/Controllers/ChildProfileController.php:27
* @route '/anak/tambah'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ChildProfileController::create
* @see app/Http/Controllers/ChildProfileController.php:27
* @route '/anak/tambah'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ChildProfileController::create
* @see app/Http/Controllers/ChildProfileController.php:27
* @route '/anak/tambah'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ChildProfileController::create
* @see app/Http/Controllers/ChildProfileController.php:27
* @route '/anak/tambah'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ChildProfileController::create
* @see app/Http/Controllers/ChildProfileController.php:27
* @route '/anak/tambah'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Http\Controllers\ChildProfileController::store
* @see app/Http/Controllers/ChildProfileController.php:32
* @route '/anak'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/anak',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ChildProfileController::store
* @see app/Http/Controllers/ChildProfileController.php:32
* @route '/anak'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ChildProfileController::store
* @see app/Http/Controllers/ChildProfileController.php:32
* @route '/anak'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ChildProfileController::store
* @see app/Http/Controllers/ChildProfileController.php:32
* @route '/anak'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ChildProfileController::store
* @see app/Http/Controllers/ChildProfileController.php:32
* @route '/anak'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\ChildProfileController::edit
* @see app/Http/Controllers/ChildProfileController.php:46
* @route '/anak/{anak}/edit'
*/
export const edit = (args: { anak: number | { id: number } } | [anak: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/anak/{anak}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ChildProfileController::edit
* @see app/Http/Controllers/ChildProfileController.php:46
* @route '/anak/{anak}/edit'
*/
edit.url = (args: { anak: number | { id: number } } | [anak: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { anak: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { anak: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            anak: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        anak: typeof args.anak === 'object'
        ? args.anak.id
        : args.anak,
    }

    return edit.definition.url
            .replace('{anak}', parsedArgs.anak.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ChildProfileController::edit
* @see app/Http/Controllers/ChildProfileController.php:46
* @route '/anak/{anak}/edit'
*/
edit.get = (args: { anak: number | { id: number } } | [anak: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ChildProfileController::edit
* @see app/Http/Controllers/ChildProfileController.php:46
* @route '/anak/{anak}/edit'
*/
edit.head = (args: { anak: number | { id: number } } | [anak: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ChildProfileController::edit
* @see app/Http/Controllers/ChildProfileController.php:46
* @route '/anak/{anak}/edit'
*/
const editForm = (args: { anak: number | { id: number } } | [anak: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ChildProfileController::edit
* @see app/Http/Controllers/ChildProfileController.php:46
* @route '/anak/{anak}/edit'
*/
editForm.get = (args: { anak: number | { id: number } } | [anak: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ChildProfileController::edit
* @see app/Http/Controllers/ChildProfileController.php:46
* @route '/anak/{anak}/edit'
*/
editForm.head = (args: { anak: number | { id: number } } | [anak: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \App\Http\Controllers\ChildProfileController::update
* @see app/Http/Controllers/ChildProfileController.php:60
* @route '/anak/{anak}'
*/
export const update = (args: { anak: number | { id: number } } | [anak: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/anak/{anak}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\ChildProfileController::update
* @see app/Http/Controllers/ChildProfileController.php:60
* @route '/anak/{anak}'
*/
update.url = (args: { anak: number | { id: number } } | [anak: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { anak: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { anak: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            anak: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        anak: typeof args.anak === 'object'
        ? args.anak.id
        : args.anak,
    }

    return update.definition.url
            .replace('{anak}', parsedArgs.anak.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ChildProfileController::update
* @see app/Http/Controllers/ChildProfileController.php:60
* @route '/anak/{anak}'
*/
update.patch = (args: { anak: number | { id: number } } | [anak: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\ChildProfileController::update
* @see app/Http/Controllers/ChildProfileController.php:60
* @route '/anak/{anak}'
*/
const updateForm = (args: { anak: number | { id: number } } | [anak: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ChildProfileController::update
* @see app/Http/Controllers/ChildProfileController.php:60
* @route '/anak/{anak}'
*/
updateForm.patch = (args: { anak: number | { id: number } } | [anak: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\ChildProfileController::destroy
* @see app/Http/Controllers/ChildProfileController.php:75
* @route '/anak/{anak}'
*/
export const destroy = (args: { anak: number | { id: number } } | [anak: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/anak/{anak}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ChildProfileController::destroy
* @see app/Http/Controllers/ChildProfileController.php:75
* @route '/anak/{anak}'
*/
destroy.url = (args: { anak: number | { id: number } } | [anak: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { anak: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { anak: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            anak: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        anak: typeof args.anak === 'object'
        ? args.anak.id
        : args.anak,
    }

    return destroy.definition.url
            .replace('{anak}', parsedArgs.anak.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ChildProfileController::destroy
* @see app/Http/Controllers/ChildProfileController.php:75
* @route '/anak/{anak}'
*/
destroy.delete = (args: { anak: number | { id: number } } | [anak: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ChildProfileController::destroy
* @see app/Http/Controllers/ChildProfileController.php:75
* @route '/anak/{anak}'
*/
const destroyForm = (args: { anak: number | { id: number } } | [anak: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ChildProfileController::destroy
* @see app/Http/Controllers/ChildProfileController.php:75
* @route '/anak/{anak}'
*/
destroyForm.delete = (args: { anak: number | { id: number } } | [anak: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const ChildProfileController = { index, pilih, create, store, edit, update, destroy }

export default ChildProfileController