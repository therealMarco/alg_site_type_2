import { createBrowserRouter } from "react-router";
import { PublicLayout } from "./components/PublicLayout";
import { RootLayout } from "./components/RootLayout";
import { LandingPage } from "./components/LandingPage";
import { SignUpPage } from "./components/SignUpPage";
import { SignInPage } from "./components/SignInPage";
import { DashboardPage } from "./components/DashboardPage";
import { BrowsePage } from "./components/BrowsePage";
import { CourseDetailPage } from "./components/CourseDetailPage";
import { ProfilePage } from "./components/ProfilePage";
import { ResourcesPage } from "./components/ResourcesPage";
import { CommunityPage } from "./components/CommunityPage";
import { InstructorDashboard } from "./components/InstructorDashboard";
import { CartPage } from "./components/CartPage";
import { MyCoursesPage } from "./components/MyCoursesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PublicLayout,
    children: [
      { index: true, Component: LandingPage },
      { path: "signup", Component: SignUpPage },
      { path: "signin", Component: SignInPage },
    ],
  },
  {
    path: "/",
    Component: RootLayout,
    children: [
      { path: "dashboard", Component: DashboardPage },
      { path: "profile", Component: ProfilePage },
      { path: "courses", Component: BrowsePage },
      { path: "course/:id", Component: CourseDetailPage },
      { path: "resources", Component: ResourcesPage },
      { path: "community", Component: CommunityPage },
      { path: "instructor", Component: InstructorDashboard },
      { path: "cart", Component: CartPage },
      { path: "my-learning", Component: MyCoursesPage },
    ],
  },
]);
