import styled from 'styled-components'

const ContentWrapper = styled.main`
  margin-left: 15vw;
  width: 85vw;
  height: 100vh;
  text-align: center;
  padding: 5vh;
  @media (max-width: 800px) {
    margin-left: 0;
    width: 100vw;
    height: 90vh;
  }
`

export default ContentWrapper
