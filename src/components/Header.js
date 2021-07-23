import React from 'react'
import styled from 'styled-components';

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a>
                    <img src='/images/home-icon.svg'/>
                    <span>HOME</span>
                </a>
                <a>
                    <img src='/images/search-icon.svg'/>
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src='/images/watchlist-icon.svg'/>
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src='/images/original-icon.svg'/>
                    <span>ORIGNAL</span>
                </a>
                <a>
                    <img src='/images/movie-icon.svg'/>
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src='/images/series-icon.svg'/>
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src='https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg'/>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height:70px;
    background :#040714;
    display:flex;
    align-items:center;
    padding: 0 36px;
`
const Logo = styled.img`
    width: 80px;
`
const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  /* @media (max-width: 768px) {
    display: none;
  } */
`;
const  UserImg = styled.img`
    border-radius: 50%;
    width:48px;
    height:48px;
    cursor:pointer;
`
