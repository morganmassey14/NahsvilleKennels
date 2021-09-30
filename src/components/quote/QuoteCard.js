import React from "react"

export const QuoteCard = ({ quote }) =>
(
        <section className="quote">
            <h3 className="quote__text">{quote.text}</h3>
            <div className="quote__author">{quote.author}</div>
            </section>
)
