import React from "react"

interface ListProps {
  url: string;
  imageUrl: string;
  alt: string;
}

export function ListItem(props: ListProps) {
  return (
    <li>
      <a 
        target="_blank"
        href={props.url}
      >
        <img 
          src={props.imageUrl}
          alt={props.alt}
        />
      </a>
    </li>
  )
}