// components/BlogCard.tsx
import Link from "next/link";

type BlogCardProps = {
  title: string;
  excerpt: string;
  slug: string;
};

const BlogCard = ({ title, excerpt, slug }: BlogCardProps) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <Link href={`/blog/${slug}`} legacyBehavior>
        <a className="text-green-500 hover:underline">Read More</a>
      </Link>
    </div>
  );
};

export default BlogCard;
