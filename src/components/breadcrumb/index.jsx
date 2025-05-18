"use client";
import Link from "next/link";
import React from "react";

const Breadcrumb = ({ path }) => {
  return (
    <ul className="flex items-center text-xs gap-1 text-gray-400">
      <li><Link href={'/'}>Accueil</Link></li>
      {path?.length > 0 &&
        path.map((item, id) => (
          id + 1 === path.length ?
            <React.Fragment key={id}>
              <li>/</li>
              <li className="capitalize text-dark font-medium">
                {item?.label}
              </li>
            </React.Fragment> :
            <React.Fragment key={id}>
              <li>/</li>
              <li className="capitalize">
                <a href={item?.href || '#'}>{item?.label}</a>
              </li>
            </React.Fragment>
        ))}
    </ul>
  );
};

export default Breadcrumb;
