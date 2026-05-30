import EduHubController from './EduHubController'
import DashboardController from './DashboardController'
import ChildProfileController from './ChildProfileController'
import GrowthTrackerController from './GrowthTrackerController'
import NutritionLogController from './NutritionLogController'
import BookmarkController from './BookmarkController'
import ConsultationController from './ConsultationController'
import MessageController from './MessageController'
import Mitra from './Mitra'
import Admin from './Admin'
import Settings from './Settings'

const Controllers = {
    EduHubController: Object.assign(EduHubController, EduHubController),
    DashboardController: Object.assign(DashboardController, DashboardController),
    ChildProfileController: Object.assign(ChildProfileController, ChildProfileController),
    GrowthTrackerController: Object.assign(GrowthTrackerController, GrowthTrackerController),
    NutritionLogController: Object.assign(NutritionLogController, NutritionLogController),
    BookmarkController: Object.assign(BookmarkController, BookmarkController),
    ConsultationController: Object.assign(ConsultationController, ConsultationController),
    MessageController: Object.assign(MessageController, MessageController),
    Mitra: Object.assign(Mitra, Mitra),
    Admin: Object.assign(Admin, Admin),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers