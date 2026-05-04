import { MessageSquare, ThumbsUp, MessageCircle, TrendingUp, Users, Calendar } from "lucide-react";

interface Discussion {
  id: string;
  title: string;
  author: string;
  category: string;
  replies: number;
  likes: number;
  timeAgo: string;
  excerpt: string;
}

export function CommunityPage() {
  const discussions: Discussion[] = [
    {
      id: "1",
      title: "Best practices for Python error handling?",
      author: "Sarah M.",
      category: "Python",
      replies: 24,
      likes: 56,
      timeAgo: "2 hours ago",
      excerpt: "I'm working on a larger Python project and want to implement proper error handling...",
    },
    {
      id: "2",
      title: "How to optimize React component rendering",
      author: "Mike T.",
      category: "Web Development",
      replies: 18,
      likes: 43,
      timeAgo: "5 hours ago",
      excerpt: "My React app is getting slower as it grows. What are the best optimization techniques?",
    },
    {
      id: "3",
      title: "Unity physics not working as expected",
      author: "Jessica L.",
      category: "Game Development",
      replies: 12,
      likes: 28,
      timeAgo: "1 day ago",
      excerpt: "I'm trying to create a platformer game but the character physics feel off...",
    },
    {
      id: "4",
      title: "AI model training tips for beginners",
      author: "David K.",
      category: "AI & Machine Learning",
      replies: 31,
      likes: 89,
      timeAgo: "1 day ago",
      excerpt: "Just started with machine learning. What are some common pitfalls to avoid?",
    },
    {
      id: "5",
      title: "Color theory for web design",
      author: "Emma R.",
      category: "Design",
      replies: 15,
      likes: 52,
      timeAgo: "2 days ago",
      excerpt: "Looking for advice on choosing color palettes for modern web applications...",
    },
    {
      id: "6",
      title: "Teaching Scratch to young kids - tips?",
      author: "Tom S.",
      category: "Kids Programming",
      replies: 9,
      likes: 34,
      timeAgo: "3 days ago",
      excerpt: "I'm teaching Scratch to 7-8 year olds. What activities work best to keep them engaged?",
    },
  ];

  const trendingTopics = [
    { name: "React Hooks", count: 245 },
    { name: "Python Automation", count: 189 },
    { name: "Game AI", count: 156 },
    { name: "UI/UX Design", count: 142 },
  ];

  const upcomingEvents = [
    {
      title: "Web Development Q&A Session",
      date: "April 12, 2026",
      time: "3:00 PM PST",
      attendees: 156,
    },
    {
      title: "Unity Game Jam",
      date: "April 15-17, 2026",
      time: "All Day",
      attendees: 89,
    },
    {
      title: "AI Workshop: Neural Networks",
      date: "April 20, 2026",
      time: "10:00 AM PST",
      attendees: 234,
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-8">
          <h1 className="mb-2">Community</h1>
          <p className="text-muted-foreground">
            Connect with fellow learners, ask questions, and share knowledge
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-8 h-8 text-primary" />
              <div className="text-3xl font-bold">12.5K</div>
            </div>
            <div className="text-sm text-muted-foreground">Active Members</div>
          </div>
          <div className="border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <MessageSquare className="w-8 h-8 text-primary" />
              <div className="text-3xl font-bold">3.2K</div>
            </div>
            <div className="text-sm text-muted-foreground">Discussions</div>
          </div>
          <div className="border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <ThumbsUp className="w-8 h-8 text-primary" />
              <div className="text-3xl font-bold">45K</div>
            </div>
            <div className="text-sm text-muted-foreground">Helpful Answers</div>
          </div>
          <div className="border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-8 h-8 text-primary" />
              <div className="text-3xl font-bold">892</div>
            </div>
            <div className="text-sm text-muted-foreground">This Week</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Discussions */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2>Recent Discussions</h2>
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                New Discussion
              </button>
            </div>

            <div className="space-y-4">
              {discussions.map((discussion) => (
                <div
                  key={discussion.id}
                  className="border border-border rounded-lg p-6 hover:border-primary transition-colors cursor-pointer group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                      {discussion.author.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="mb-1 group-hover:text-primary transition-colors">
                            {discussion.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>{discussion.author}</span>
                            <span>•</span>
                            <span>{discussion.timeAgo}</span>
                          </div>
                        </div>
                        <span className="text-xs bg-muted px-2 py-1 rounded flex-shrink-0 ml-2">
                          {discussion.category}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        {discussion.excerpt}
                      </p>
                      <div className="flex items-center gap-6 text-sm">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MessageCircle className="w-4 h-4" />
                          <span>{discussion.replies} replies</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <ThumbsUp className="w-4 h-4" />
                          <span>{discussion.likes} likes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Trending Topics */}
            <div className="border border-border rounded-lg p-6">
              <h3 className="mb-4">Trending Topics</h3>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="font-medium">{topic.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{topic.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="border border-border rounded-lg p-6">
              <h3 className="mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="pb-4 border-b border-border last:border-0 last:pb-0">
                    <h4 className="mb-2">{event.title}</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>{event.time}</span>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{event.attendees} attending</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Guidelines */}
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-6">
              <h4 className="mb-3">Community Guidelines</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Be respectful and supportive</li>
                <li>• Share knowledge freely</li>
                <li>• Stay on topic</li>
                <li>• No spam or self-promotion</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
