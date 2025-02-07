import * as React from "react";
import { TextBlock } from "./component/TextBlock";
import { challengeContent } from "@/data/about/content"
const ChallengeSection =  () => {
  return (
    <section
      className="flex flex-col mx-auto w-full max-w-screen text-emerald-950 bg-white p-8 py-4"
      aria-labelledby="challenge-title"
    >
      <h2
        id="challenge-title"
        className="text-xs font-light tracking-wide capitalize"
      >
        {challengeContent.title}
      </h2>
      <h3
        className="mt-2 text-2xl font-extrabold text-teal-600 capitalize"
        aria-level={3}
      >
        {challengeContent.subtitle}
      </h3>
      <div
        className="self-stretch py-4 mt-2 w-full text-sm italic tracking-wide leading-6 text-justify"
        role="article"
      >
        {challengeContent.paragraphs.map((paragraph, index) => (
          <React.Fragment key={index}>
            <p>{paragraph}</p>
            <br />
          </React.Fragment>
        ))}
        {challengeContent.highlights.map((highlight, index) => (
          <TextBlock key={index} {...highlight} />
        ))}
      </div>
    </section>
  )
}

export { ChallengeSection };