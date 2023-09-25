// Write your code here
import {useState} from 'react'
import {
  AppContainer,
  ReactHeading,
  ReactText,
  ReactImg,
  ReactDescription,
  ReadButton,
} from './styledComponents'

const text = `Hooks solve a wide variety of seemingly unconnected problems in React that we have encountered over five years of writing and maintaining tens of thousands of components. For curious readers, we have prepared a detailed RFC. Hooks allow you to reuse stateful logic without changing your component hierarchy. Hooks work side-by- side with existing code so you can adopt them gradually.`
const totalText = text.length

const slicedText = text.slice(0, 170)
const unSlicedText = text.slice(0, totalText)

const ReadMore = () => {
  const [Read, setRead] = useState(false)

  const onClickRead = () => {
    setRead(prevState => !prevState)
  }

  return (
    <AppContainer>
      <ReactHeading>React Hooks</ReactHeading>
      <ReactText>Hooks are a new addition to React</ReactText>
      <ReactImg
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      {Read ? (
        <ReactDescription>{unSlicedText}</ReactDescription>
      ) : (
        <ReactDescription>{slicedText}</ReactDescription>
      )}
      {Read ? (
        <ReadButton onClick={onClickRead}>Read Less</ReadButton>
      ) : (
        <ReadButton onClick={onClickRead}>Read More</ReadButton>
      )}
    </AppContainer>
  )
}

export default ReadMore
