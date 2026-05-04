import { Link } from "react-router";
import { Star, Users } from "lucide-react";
import type { Course } from "../data/mockData";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link
      to={`/course/${course.id}`}
      className="group block transition-transform hover:scale-[1.02]"
    >
      <div className="overflow-hidden rounded-lg mb-3">
        <img
          src={course.image}
          alt={course.title}
          className="w-full aspect-video object-cover transition-transform group-hover:scale-105"
        />
      </div>

      <h3 className="mb-2 group-hover:text-primary transition-colors">
        {course.title}
      </h3>

      <p className="text-sm text-muted-foreground mb-2">
        {course.instructor}
      </p>

      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{course.rating}</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Users className="w-4 h-4" />
          <span>{course.students.toLocaleString()}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xl font-semibold">${course.price}</span>
        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
          {course.level}
        </span>
      </div>
    </Link>
  );
}
