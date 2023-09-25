// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 25px;
`
export const ReactHeading = styled.h1`
  font-size: 25px;
  font-family: 'Roboto';
  color: #1e293b;
`
export const ReactText = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  color: ##334155;
  margin-top: 0px;
`
export const ReactImg = styled.img`
  width: 450px;
  height: 250px;
  @media screen and (max-width: 768px) {
    width: 350px;
  }
`
export const ReactDescription = styled.p`
  font-size: 18px;
  width: 450px;
  line-height: 1.5;
  color: #334155;
  @media screen and (max-width: 768px) {
    width: 350px;
  }
`

export const ReadButton = styled.button`
  background-color: #1f81ff;
  color: white;
  width: 100px;
  padding-top: 8px;
  padding-bottom: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  margin-bottom: 25px;
`
