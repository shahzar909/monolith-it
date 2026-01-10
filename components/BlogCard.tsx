import Image from "next/image";
import { Calendar, User } from "lucide-react";

interface BlogPost {
  id?: string | number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
}

export default function BlogCard({
  post,
}: {
  post: BlogPost;
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden card-hover">
      {/* Image */}
      <div className="relative h-52 w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{post.date}</span>
          </div>

          <div className="flex items-center gap-1">
            <User size={14} />
            <span>{post.author}</span>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-2 text-gray-900">
          {post.title}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed">
          {post.excerpt}
        </p>
      </div>
    </div>
  );
}
