import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getCategories } from "@Services";

import { Category } from "@Types/posts";

const CategorySection = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="bg-white shadow-lg rounded p-8 mb-8 pb-12">
      <h3 className=" text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {categories.map((category: Category) => (
        <Link key={category.slug} href={`/categories/${category.slug}`}>
          <span className="cursor-pointer block pb-3 mb-3">{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default CategorySection;
