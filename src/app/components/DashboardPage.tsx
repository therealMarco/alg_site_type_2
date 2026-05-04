import { Link } from "react-router";
import { BookOpen, Clock, TrendingUp, Award, Target, Calendar } from "lucide-react";
import { courses } from "../data/mockData";

export function DashboardPage() {
  const enrolledCourses = [
    { ...courses[0], progress: 65, timeSpent: "12h 30m", lastActive: "2 hours ago" },
    { ...courses[3], progress: 45, timeSpent: "18h 15m", lastActive: "1 day ago" },
    { ...courses[8], progress: 80, timeSpent: "22h 45m", lastActive: "3 hours ago" },
  ];

  const userName = "Alex";

  const totalTimeSpent = "53h 30m";
  const coursesCompleted = 3;
  const currentStreak = 7;

  return (
    <div className="py-12">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-8">
          <h1 className="mb-2">Welcome back, {userName}!</h1>
          <p className="text-muted-foreground">Track your learning progress and achievements</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <BookOpen className="w-8 h-8" />
              <div className="text-3xl font-bold">{enrolledCourses.length}</div>
            </div>
            <div className="text-sm opacity-90">Active Courses</div>
          </div>

          <div className="bg-gradient-to-br from-accent to-accent/80 text-accent-foreground rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <Clock className="w-8 h-8" />
              <div className="text-3xl font-bold">{totalTimeSpent}</div>
            </div>
            <div className="text-sm opacity-90">Time Spent Learning</div>
          </div>

          <div className="border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <Award className="w-8 h-8 text-muted-foreground" />
              <div className="text-3xl font-bold">{coursesCompleted}</div>
            </div>
            <div className="text-sm text-muted-foreground">Courses Completed</div>
          </div>

          <div className="border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <Target className="w-8 h-8 text-muted-foreground" />
              <div className="text-3xl font-bold">{currentStreak}</div>
            </div>
            <div className="text-sm text-muted-foreground">Day Streak 🔥</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Continue Learning */}
          <div className="lg:col-span-2">
            <h2 className="mb-6">Continue Learning</h2>
            <div className="space-y-4">
              {enrolledCourses.map((course) => (
                <Link
                  key={course.id}
                  to={`/course/${course.id}`}
                  className="border border-border rounded-lg p-6 flex gap-6 hover:border-primary transition-colors group"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-40 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="mb-2 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {course.instructor}
                    </p>
                    <div className="mb-3">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-muted-foreground">
                          {course.progress}% complete
                        </span>
                        <span className="text-muted-foreground">
                          {course.timeSpent} spent
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>Last active {course.lastActive}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Learning Goals */}
            <div className="border border-border rounded-lg p-6">
              <h3 className="mb-4">Weekly Goals</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span>Study Time</span>
                    <span className="font-medium">12h / 15h</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "80%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span>Lessons Completed</span>
                    <span className="font-medium">18 / 25</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "72%" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="border border-border rounded-lg p-6">
              <h3 className="mb-4">Recent Achievements</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    🏆
                  </div>
                  <div>
                    <div className="font-medium">7 Day Streak</div>
                    <div className="text-sm text-muted-foreground">Keep it up!</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    🎯
                  </div>
                  <div>
                    <div className="font-medium">Fast Learner</div>
                    <div className="text-sm text-muted-foreground">Completed 3 courses</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="border border-border rounded-lg p-6">
              <h3 className="mb-4">Upcoming Events</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">Live Workshop</div>
                    <div className="text-sm text-muted-foreground">Tomorrow, 3:00 PM</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">AI Masterclass</div>
                    <div className="text-sm text-muted-foreground">Apr 15, 10:00 AM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
