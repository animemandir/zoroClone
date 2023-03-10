import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const N = {}

N.Nav = styled.nav`
  position: ${({ fixed }) => (fixed ? 'fixed' : 'relative')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  gap: 1em;
  padding-left: 1em;
  background-color: ${({ isScrolled }) =>
    isScrolled ? 'rgba(32, 33, 37, 0.9)' : 'rgba(32, 33, 37, 0)'};
  transition: all ease 250ms;
  z-index: 5;

  @media screen and (max-width: 1299px) {
    position: relative;
    background: #2a2c31;
  }
  @media screen and (max-width: 578px) {
    height: 50px;
    gap: 0;
    padding-left: 0.3em;
  }
`
N.Logo = styled(Link)`
  display: block;
  height: 40px;

  @media only screen and (max-width: 578px) {
    height: 34px;
  }
`
N.LogoImg = styled.img`
  width: auto;
  height: 100%;
`
N.SearchForm = styled.form`
  display: flex;
  width: 290px;
  height: 40px;
  position: relative;

  @media only screen and (max-width: 1300px) {
    display: none;
  }
`
N.Input = styled.input`
  height: 100%;
  width: 100%;
  outline: none;
  padding: 1em;
  color: #495057;
`
N.Filter = styled.button`
  position: absolute;
  right: 1.5em;
  top: 7px;
  height: 26px;
  line-height: 26px;
  border-radius: 3px;
  padding: 0 6px;
  font-size: 11px;
  background-color: #4a4b51;
  color: #fff;
  z-index: 3;
  cursor: pointer;
`
N.SearchIcon = styled.button`
  position: absolute;
  display: inline-block;
  top: 3px;
  right: 4.5em;
  line-height: 40px;
  width: 40px;
  height: 40px;
  border: none;
  padding: 0 12px;
  color: #111;
  background-color: transparent;
  text-align: center;
  z-index: 2;
`
N.SocialIcons = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  gap: 0.2em;

  @media only screen and (max-width: 1300px) {
    display: none;
  }
`
N.Item = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  text-align: center;
  padding: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
`

N.SettingsIcon = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  gap: 1em;

  @media only screen and (max-width: 760px) {
    display: none;
  }
`
N.SettingsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 11px;
  color: #fff;
  gap: 0.2em;
`
N.Button = styled.button`
  line-height: 36px;
  border-radius: 20px;
  font-size: 13px;
  border: none !important;
  font-weight: 500;
  padding: 0 1rem;
  color: #000;
  box-shadow: none !important;
  background-color: #00ffb7;

  @media only screen and (max-width: 1300px) {
    display: none;
  }
`
N.Profile = styled.div`
  display: flex;
  padding-right: 1.4em;
  @media only screen and (max-width: 578px) {
    padding-right: 0.4em;
  }
`
N.ProfileItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  margin: 0 5px;
  text-align: center;
  color: #fff;
  cursor: pointer;

  &:nth-child(1) {
    display: none;
  }
  @media only screen and (max-width: 1300px) {
    &:nth-child(1) {
      display: flex;
    }
    width: 30px;
    height: 30px;
  }
`
N.ProfileSearch = styled(FaSearch)`
  display: none;
  @media only screen and (max-width: 1300px) {
    display: initial;
  }
`
N.ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`
N.LayoutBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(32, 33, 37, 0.8);
  z-index: 4;
  display: ${({ open }) => (open ? 'block' : 'none')};
`
