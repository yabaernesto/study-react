import React from "react"

export function Section(props) {
  return (
    <section className="section-animes">
      <div>
        <h2>{ props.title }</h2>
        <p>{ props.subtitle }</p>
        <ul className={props.className}>
          { props.children }
        </ul>
      </div>
    </section>
  )
}