import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getCategories } from "@Services";

import { Category } from "@Types/posts";

const Header = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">BatesBlog</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category: Category) => (
            <Link key={category.slug} href={`/categories/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
