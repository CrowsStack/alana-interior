import type React from "react"

interface WordsCardProps {
  title: string
}

const WordsCard: React.FC<WordsCardProps> = ({ title }) => {
  return (
    <div className="wordscardBody">
      <div className="wordscardContainer">
        <div className="wordscard">{title}</div>
      </div>
    </div>
  )
}

export default WordsCard

