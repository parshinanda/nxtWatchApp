import styled from 'styled-components'

export const SidebarContainer = styled.div`
  width: 200px;
  background-color: ${props =>
    props.theme === 'dark' ? '#212121' : '#f4f4f4'};
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const LogoIcons = styled.img`
  width: 30px;
  margin: 0px 6px 0px 0px;
`
export const ContactLogoContainer = styled.div`
  display: flex;
  justify-content: space-around;
`
export const ContactUsContainer = styled.div`
  padding: 7px;
`

export const Text = styled.p`
  font-weight: 600;
  color: ${props => (props.theme === 'dark' ? '#f4f4f4' : '#212121')};
`
