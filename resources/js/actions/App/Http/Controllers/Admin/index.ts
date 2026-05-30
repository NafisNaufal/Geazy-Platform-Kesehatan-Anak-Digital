import AdminDashboardController from './AdminDashboardController'
import AdminDoctorController from './AdminDoctorController'
import AdminArticleController from './AdminArticleController'

const Admin = {
    AdminDashboardController: Object.assign(AdminDashboardController, AdminDashboardController),
    AdminDoctorController: Object.assign(AdminDoctorController, AdminDoctorController),
    AdminArticleController: Object.assign(AdminArticleController, AdminArticleController),
}

export default Admin