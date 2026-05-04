import { useParams, Link } from "react-router";
import { Star, Users, Clock, BarChart3, ShoppingCart, Play } from "lucide-react";
import { courses } from "../data/mockData";
import { motion } from "motion/react";

export function CourseDetailPage() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="py-20 text-center">
        <h2 className="mb-4">Course not found</h2>
        <Link to="/courses" className="text-primary hover:underline">
          Browse all courses
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-[1400px] mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="text-sm mb-3 opacity-90">{course.category}</div>
                <h1 className="text-4xl md:text-5xl mb-4">{course.title}</h1>
                <p className="text-lg mb-6 opacity-90">{course.description}</p>

                <div className="flex flex-wrap items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{course.rating}</span>
                    <span className="opacity-80">({course.students.toLocaleString()} students)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    <span>{course.level}</span>
                  </div>
                </div>

                <div className="text-sm opacity-90">
                  Instructor: <span className="font-semibold">{course.instructor}</span>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-background text-foreground rounded-lg overflow-hidden sticky top-20"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-6">
                  <div className="text-3xl font-bold mb-6">${course.price}</div>
                  <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-colors mb-3 flex items-center justify-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                  <button className="w-full border border-border py-3 rounded-lg hover:bg-muted transition-colors">
                    Buy Now
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* What You'll Learn */}
              <div>
                <h2 className="mb-6">What you'll learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.whatYouWillLearn.map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum */}
              <div>
                <h2 className="mb-6">Course curriculum</h2>
                <div className="space-y-3">
                  {course.curriculum.map((section, index) => (
                    <div
                      key={index}
                      className="border border-border rounded-lg p-4 hover:border-foreground transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Play className="w-5 h-5 text-muted-foreground" />
                          <div>
                            <div className="font-medium">{section.section}</div>
                            <div className="text-sm text-muted-foreground">
                              {section.lectures} lectures • {section.duration}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="mb-6">About this course</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {course.description} This comprehensive course covers everything you need to know
                  to master {course.category.toLowerCase()}. You'll work on real projects and build
                  a portfolio that demonstrates your skills to potential employers.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              {/* Instructor */}
              <div className="border border-border rounded-lg p-6">
                <h3 className="mb-4">Instructor</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-xl font-semibold">
                    {course.instructor.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{course.instructor}</div>
                    <div className="text-sm text-muted-foreground">Professional Instructor</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    <span>{course.rating} average rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
