"use client";

import React from "react";
import Image from "next/image";
import { FaHeart, FaStar } from "react-icons/fa";

const memories = [
  {
    id: 1,
    image: "/images/memories/memory-1.jpg",
    title: "Beautiful Together",
    category: "photos",
    date: "Our Special Moment",
    featured: true,
  },
  {
    id: 2,
    image: "/images/memories/memory-2.jpg",
    title: "Golden Sunset",
    category: "special",
    date: "A Beautiful Evening",
    featured: false,
  },
  {
    id: 3,
    image: "/images/memories/memory-3.jpg",
    title: "Forever Us",
    category: "photos",
    date: "A Precious Memory",
    featured: false,
  },
  {
    id: 4,
    image: "/images/memories/memory-4.jpg",
    title: "Little Moments",
    category: "videos",
    date: "A Moment to Remember",
    featured: false,
  },
  {
    id: 5,
    image: "/images/memories/memory-5.jpg",
    title: "Under The Moon",
    category: "special",
    date: "Our Romantic Night",
    featured: true,
  },
  {
    id: 6,
    image: "/images/memories/memory-6.jpg",
    title: "Sweet Memories",
    category: "photos",
    date: "Always in My Heart",
    featured: false,
  },
];

const MemoriesGallery = ({ activeFilter }) => {
  const filteredMemories =
    activeFilter === "all"
      ? memories
      : memories.filter((memory) => memory.category === activeFilter);

  return (
    <section className="px-4 pb-16 sm:pb-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredMemories.map((memory) => (
          <div
            key={memory.id}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/20 transition-all duration-500 hover:-translate-y-2 hover:border-pink-400/40 hover:shadow-pink-500/10"
          >
            {/* Image */}
            <div className="relative h-72 overflow-hidden sm:h-80">
              <Image
                src={memory.image}
                alt={memory.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/10 to-transparent" />

              {/* Featured Icon */}
              {memory.featured && (
                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-pink-300/30 bg-black/40 text-pink-400 backdrop-blur-md">
                  <FaStar />
                </div>
              )}

              {/* Image Content */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="mb-2 flex items-center gap-2 text-xs text-pink-300">
                  <FaHeart />
                  <span>{memory.date}</span>
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {memory.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredMemories.length === 0 && (
        <p className="py-16 text-center text-gray-400">
          No memories found in this category.
        </p>
      )}
    </section>
  );
};

export default MemoriesGallery;