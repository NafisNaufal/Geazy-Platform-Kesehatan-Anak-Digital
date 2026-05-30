import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\AdminDoctorController::index
* @see app/Http/Controllers/Admin/AdminDoctorController.php:13
* @route '/admin/dokter'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/dokter',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\AdminDoctorController::index
* @see app/Http/Controllers/Admin/AdminDoctorController.php:13
* @route '/admin/dokter'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminDoctorController::index
* @see app/Http/Controllers/Admin/AdminDoctorController.php:13
* @route '/admin/dokter'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\AdminDoctorController::index
* @see app/Http/Controllers/Admin/AdminDoctorController.php:13
* @route '/admin/dokter'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\AdminDoctorController::index
* @see app/Http/Controllers/Admin/AdminDoctorController.php:13
* @route '/admin/dokter'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\AdminDoctorController::index
* @see app/Http/Controllers/Admin/AdminDoctorController.php:13
* @route '/admin/dokter'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\AdminDoctorController::index
* @see app/Http/Controllers/Admin/AdminDoctorController.php:13
* @route '/admin/dokter'
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
* @see \App\Http\Controllers\Admin\AdminDoctorController::verify
* @see app/Http/Controllers/Admin/AdminDoctorController.php:35
* @route '/admin/dokter/{doctor}/verifikasi'
*/
export const verify = (args: { doctor: number | { id: number } } | [doctor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verify.url(args, options),
    method: 'post',
})

verify.definition = {
    methods: ["post"],
    url: '/admin/dokter/{doctor}/verifikasi',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\AdminDoctorController::verify
* @see app/Http/Controllers/Admin/AdminDoctorController.php:35
* @route '/admin/dokter/{doctor}/verifikasi'
*/
verify.url = (args: { doctor: number | { id: number } } | [doctor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return verify.definition.url
            .replace('{doctor}', parsedArgs.doctor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminDoctorController::verify
* @see app/Http/Controllers/Admin/AdminDoctorController.php:35
* @route '/admin/dokter/{doctor}/verifikasi'
*/
verify.post = (args: { doctor: number | { id: number } } | [doctor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verify.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\AdminDoctorController::verify
* @see app/Http/Controllers/Admin/AdminDoctorController.php:35
* @route '/admin/dokter/{doctor}/verifikasi'
*/
const verifyForm = (args: { doctor: number | { id: number } } | [doctor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verify.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\AdminDoctorController::verify
* @see app/Http/Controllers/Admin/AdminDoctorController.php:35
* @route '/admin/dokter/{doctor}/verifikasi'
*/
verifyForm.post = (args: { doctor: number | { id: number } } | [doctor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verify.url(args, options),
    method: 'post',
})

verify.form = verifyForm

/**
* @see \App\Http\Controllers\Admin\AdminDoctorController::reject
* @see app/Http/Controllers/Admin/AdminDoctorController.php:41
* @route '/admin/dokter/{doctor}/tolak'
*/
export const reject = (args: { doctor: number | { id: number } } | [doctor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

reject.definition = {
    methods: ["post"],
    url: '/admin/dokter/{doctor}/tolak',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\AdminDoctorController::reject
* @see app/Http/Controllers/Admin/AdminDoctorController.php:41
* @route '/admin/dokter/{doctor}/tolak'
*/
reject.url = (args: { doctor: number | { id: number } } | [doctor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return reject.definition.url
            .replace('{doctor}', parsedArgs.doctor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminDoctorController::reject
* @see app/Http/Controllers/Admin/AdminDoctorController.php:41
* @route '/admin/dokter/{doctor}/tolak'
*/
reject.post = (args: { doctor: number | { id: number } } | [doctor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\AdminDoctorController::reject
* @see app/Http/Controllers/Admin/AdminDoctorController.php:41
* @route '/admin/dokter/{doctor}/tolak'
*/
const rejectForm = (args: { doctor: number | { id: number } } | [doctor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reject.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\AdminDoctorController::reject
* @see app/Http/Controllers/Admin/AdminDoctorController.php:41
* @route '/admin/dokter/{doctor}/tolak'
*/
rejectForm.post = (args: { doctor: number | { id: number } } | [doctor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reject.url(args, options),
    method: 'post',
})

reject.form = rejectForm

const AdminDoctorController = { index, verify, reject }

export default AdminDoctorController