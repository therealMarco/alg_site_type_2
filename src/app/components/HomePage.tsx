import { Link } from "react-router";
import { ArrowRight, Star, TrendingUp, Award } from "lucide-react";
import { CourseCard } from "./CourseCard";
import { courses } from "../data/mockData";
import { motion } from "motion/react";

export function HomePage() {
  const featuredCourses = courses.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
        <div className="max-w-[1400px] mx-auto px-6 py-32 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Transform Your Career with Expert-Led Courses
              </h1>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Learn from industry professionals and gain skills that matter.
              </p>
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-lg hover:bg-background/90 transition-colors"
              >
                Explore Courses
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
          <div className="absolute right-[-10%] top-[20%] w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute right-[10%] bottom-[10%] w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex justify-center mb-3">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">4.8</div>
              <div className="text-muted-foreground">Average Course Rating</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex justify-center mb-3">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">150K+</div>
              <div className="text-muted-foreground">Active Students</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex justify-center mb-3">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-muted-foreground">Expert Instructors</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="mb-3">Featured Courses</h2>
              <p className="text-muted-foreground">
                Most popular courses chosen by our students
              </p>
            </div>
            <Link
              to="/courses"
              className="text-primary hover:underline flex items-center gap-1"
            >
              View all
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/50 py-20">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="mb-4">Share Your Knowledge</h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of instructors and earn money teaching what you love.
            </p>
            <Link
              to="/instructor"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Become an Instructor
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
