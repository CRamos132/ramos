import styled from 'styled-components'

const Sidebar = styled.article`
  height: 100vh;
  width: 15vw;
  background-color: ${props => props.theme.colors.primary};
  position: fixed;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    flex-direction: row;
    bottom: 0;
    height: 10vh;
    width: 100%;
  }
`

export default Sidebar
