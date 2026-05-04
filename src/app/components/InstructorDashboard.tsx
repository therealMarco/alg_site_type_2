import { useState } from "react";
import { Plus, Edit, Trash2, DollarSign, Users, TrendingUp, Eye } from "lucide-react";

interface InstructorCourse {
  id: string;
  title: string;
  students: number;
  revenue: number;
  rating: number;
  published: boolean;
}

export function InstructorDashboard() {
  const [myCourses] = useState<InstructorCourse[]>([
    {
      id: "4",
      title: "Complete Web Development Bootcamp",
      students: 25300,
      revenue: 75850,
      rating: 4.9,
      published: true,
    },
    {
      id: "9",
      title: "Python Start",
      students: 28900,
      revenue: 86700,
      rating: 4.8,
      published: true,
    },
    {
      id: "11",
      title: "Artificial Intelligence",
      students: 14200,
      revenue: 42600,
      rating: 4.9,
      published: true,
    },
    {
      id: "draft-1",
      title: "Advanced Machine Learning",
      students: 0,
      revenue: 0,
      rating: 0,
      published: false,
    },
  ]);

  const totalStudents = myCourses.reduce((acc, course) => acc + course.students, 0);
  const totalRevenue = myCourses.reduce((acc, course) => acc + course.revenue, 0);
  const publishedCourses = myCourses.filter((c) => c.published).length;

  return (
    <div className="py-12">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h1>Instructor Dashboard</h1>
          <button className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
            <Plus className="w-5 h-5" />
            Create New Course
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-muted-foreground">Total Revenue</div>
              <DollarSign className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="text-3xl font-bold">${totalRevenue.toLocaleString()}</div>
            <div className="text-sm text-green-600 mt-2">+12% this month</div>
          </div>

          <div className="border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-muted-foreground">Total Students</div>
              <Users className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="text-3xl font-bold">{totalStudents.toLocaleString()}</div>
            <div className="text-sm text-green-600 mt-2">+8% this month</div>
          </div>

          <div className="border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-muted-foreground">Published Courses</div>
              <TrendingUp className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="text-3xl font-bold">{publishedCourses}</div>
            <div className="text-sm text-muted-foreground mt-2">
              {myCourses.length - publishedCourses} in draft
            </div>
          </div>

          <div className="border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-muted-foreground">Avg. Rating</div>
              <TrendingUp className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="text-3xl font-bold">4.85</div>
            <div className="text-sm text-muted-foreground mt-2">Across all courses</div>
          </div>
        </div>

        {/* Courses Table */}
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="bg-muted/30 px-6 py-4 border-b border-border">
            <h2>My Courses</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border">
                <tr className="text-left text-sm text-muted-foreground">
                  <th className="px-6 py-4 font-medium">Course</th>
                  <th className="px-6 py-4 font-medium">Students</th>
                  <th className="px-6 py-4 font-medium">Revenue</th>
                  <th className="px-6 py-4 font-medium">Rating</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {myCourses.map((course) => (
                  <tr key={course.id} className="border-b border-border last:border-0 hover:bg-muted/20">
                    <td className="px-6 py-4 font-medium">{course.title}</td>
                    <td className="px-6 py-4">{course.students.toLocaleString()}</td>
                    <td className="px-6 py-4">${course.revenue.toLocaleString()}</td>
                    <td className="px-6 py-4">
                      {course.rating > 0 ? course.rating.toFixed(1) : "—"}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs ${
                          course.published
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {course.published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-destructive/10 text-destructive rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
