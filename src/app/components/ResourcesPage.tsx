import { useState } from "react";
import { Search, Download, FileText, Video, Code, Book, ExternalLink } from "lucide-react";

interface Resource {
  id: string;
  title: string;
  type: "pdf" | "video" | "code" | "article";
  category: string;
  downloads: number;
  size?: string;
  duration?: string;
}

export function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const resources: Resource[] = [
    {
      id: "1",
      title: "Python Cheat Sheet",
      type: "pdf",
      category: "Programming",
      downloads: 12450,
      size: "2.4 MB",
    },
    {
      id: "2",
      title: "Introduction to Web Development",
      type: "video",
      category: "Web Development",
      downloads: 8900,
      duration: "45 min",
    },
    {
      id: "3",
      title: "React Component Examples",
      type: "code",
      category: "Web Development",
      downloads: 6700,
      size: "1.2 MB",
    },
    {
      id: "4",
      title: "Game Design Principles Guide",
      type: "article",
      category: "Game Development",
      downloads: 5300,
    },
    {
      id: "5",
      title: "Unity Scripting Reference",
      type: "pdf",
      category: "Game Development",
      downloads: 9200,
      size: "5.8 MB",
    },
    {
      id: "6",
      title: "AI & Machine Learning Basics",
      type: "video",
      category: "AI & Machine Learning",
      downloads: 11500,
      duration: "1h 20min",
    },
    {
      id: "7",
      title: "CSS Grid Layout Examples",
      type: "code",
      category: "Web Development",
      downloads: 4800,
      size: "800 KB",
    },
    {
      id: "8",
      title: "Graphic Design Color Theory",
      type: "pdf",
      category: "Design",
      downloads: 7100,
      size: "3.1 MB",
    },
  ];

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "all" || resource.type === selectedType;
    return matchesSearch && matchesType;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FileText className="w-8 h-8" />;
      case "video":
        return <Video className="w-8 h-8" />;
      case "code":
        return <Code className="w-8 h-8" />;
      case "article":
        return <Book className="w-8 h-8" />;
      default:
        return <FileText className="w-8 h-8" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "pdf":
        return "bg-red-100 text-red-700";
      case "video":
        return "bg-blue-100 text-blue-700";
      case "code":
        return "bg-green-100 text-green-700";
      case "article":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="py-12">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-8">
          <h1 className="mb-2">Learning Resources</h1>
          <p className="text-muted-foreground">
            Download helpful materials, guides, and templates
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedType("all")}
              className={`px-4 py-2 rounded-full border transition-colors ${
                selectedType === "all"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border hover:border-foreground"
              }`}
            >
              All Types
            </button>
            <button
              onClick={() => setSelectedType("pdf")}
              className={`px-4 py-2 rounded-full border transition-colors ${
                selectedType === "pdf"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border hover:border-foreground"
              }`}
            >
              PDFs
            </button>
            <button
              onClick={() => setSelectedType("video")}
              className={`px-4 py-2 rounded-full border transition-colors ${
                selectedType === "video"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border hover:border-foreground"
              }`}
            >
              Videos
            </button>
            <button
              onClick={() => setSelectedType("code")}
              className={`px-4 py-2 rounded-full border transition-colors ${
                selectedType === "code"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border hover:border-foreground"
              }`}
            >
              Code
            </button>
            <button
              onClick={() => setSelectedType("article")}
              className={`px-4 py-2 rounded-full border transition-colors ${
                selectedType === "article"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border hover:border-foreground"
              }`}
            >
              Articles
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-muted-foreground">
          {filteredResources.length} resources found
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <div
              key={resource.id}
              className="border border-border rounded-lg p-6 hover:border-primary transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`${getTypeColor(resource.type)} p-3 rounded-lg`}>
                  {getIcon(resource.type)}
                </div>
                <span className="text-xs bg-muted px-2 py-1 rounded">
                  {resource.category}
                </span>
              </div>

              <h3 className="mb-3 group-hover:text-primary transition-colors">
                {resource.title}
              </h3>

              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>{resource.downloads.toLocaleString()} downloads</span>
                </div>
                {resource.size && <span>{resource.size}</span>}
                {resource.duration && <span>{resource.duration}</span>}
              </div>

              <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">
              No resources found. Try adjusting your search or filters.
            </p>
          </div>
        )}

        {/* External Resources */}
        <div className="mt-16 border-t border-border pt-12">
          <h2 className="mb-6">External Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="#"
              className="border border-border rounded-lg p-6 hover:border-primary transition-colors group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="group-hover:text-primary transition-colors">
                  Official Python Documentation
                </h3>
                <ExternalLink className="w-5 h-5 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">
                Comprehensive Python language reference and tutorials
              </p>
            </a>
            <a
              href="#"
              className="border border-border rounded-lg p-6 hover:border-primary transition-colors group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="group-hover:text-primary transition-colors">
                  MDN Web Docs
                </h3>
                <ExternalLink className="w-5 h-5 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">
                Web development documentation and learning resources
              </p>
            </a>
            <a
              href="#"
              className="border border-border rounded-lg p-6 hover:border-primary transition-colors group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="group-hover:text-primary transition-colors">
                  Unity Learn
                </h3>
                <ExternalLink className="w-5 h-5 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">
                Free tutorials and projects for Unity game development
              </p>
            </a>
            <a
              href="#"
              className="border border-border rounded-lg p-6 hover:border-primary transition-colors group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="group-hover:text-primary transition-colors">
                  GitHub Learning Lab
                </h3>
                <ExternalLink className="w-5 h-5 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">
                Learn Git and GitHub through interactive courses
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
