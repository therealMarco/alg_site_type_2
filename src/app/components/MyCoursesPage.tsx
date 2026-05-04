import { Link } from "react-router";
import { Play, Clock, CheckCircle2 } from "lucide-react";
import { courses } from "../data/mockData";

export function MyCoursesPage() {
  const enrolledCourses = [
    { ...courses[0], progress: 65, lastWatched: "Computer Navigation Basics" },
    { ...courses[3], progress: 45, lastWatched: "JavaScript Fundamentals" },
    { ...courses[8], progress: 85, lastWatched: "Python Functions and Modules" },
  ];

  return (
    <div className="py-12">
      <div className="max-w-[1400px] mx-auto px-6">
        <h1 className="mb-8">My Learning</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrolledCourses.map((course) => (
            <Link
              key={course.id}
              to={`/course/${course.id}`}
              className="group block border border-border rounded-lg overflow-hidden hover:border-foreground transition-colors"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white rounded-full p-4">
                    <Play className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2">{course.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {course.instructor}
                </p>

                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="line-clamp-1">{course.lastWatched}</span>
                </div>

                {course.progress === 100 && (
                  <div className="mt-4 flex items-center gap-2 text-green-600">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-sm">Completed</span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {enrolledCourses.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground mb-4">
              You haven't enrolled in any courses yet.
            </p>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Browse Courses
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
