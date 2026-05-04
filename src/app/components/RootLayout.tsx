import { Outlet, Link, useLocation } from "react-router";
import { ShoppingCart, LayoutDashboard, BookOpen, FolderOpen, Users, User } from "lucide-react";

export function RootLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <nav className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold">
            Algorithmics
          </Link>

          <div className="flex items-center gap-6">
            <Link
              to="/dashboard"
              className={`flex items-center gap-2 hover:text-foreground transition-colors ${
                location.pathname === '/dashboard' ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </Link>
            <Link
              to="/courses"
              className={`flex items-center gap-2 hover:text-foreground transition-colors ${
                location.pathname === '/courses' ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Courses
            </Link>
            <Link
              to="/resources"
              className={`flex items-center gap-2 hover:text-foreground transition-colors ${
                location.pathname === '/resources' ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              <FolderOpen className="w-4 h-4" />
              Resources
            </Link>
            <Link
              to="/community"
              className={`flex items-center gap-2 hover:text-foreground transition-colors ${
                location.pathname === '/community' ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              <Users className="w-4 h-4" />
              Community
            </Link>
            <Link
              to="/profile"
              className={`flex items-center gap-2 hover:text-foreground transition-colors ${
                location.pathname === '/profile' ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              <User className="w-4 h-4" />
              Profile
            </Link>
            <Link
              to="/cart"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border bg-muted/30 mt-24">
        <div className="max-w-[1400px] mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="mb-4">Algorithmics</h4>
              <p className="text-sm text-muted-foreground">
                Empower your future with world-class online courses.
              </p>
            </div>
            <div>
              <h4 className="mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/courses" className="hover:text-foreground transition-colors">Browse Courses</Link></li>
                <li><Link to="/resources" className="hover:text-foreground transition-colors">Resources</Link></li>
                <li><Link to="/community" className="hover:text-foreground transition-colors">Community</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2026 Algorithmics. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
