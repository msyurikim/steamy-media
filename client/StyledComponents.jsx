import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body{
    margin:  0;
    padding: 0;
    border: 0;
    border: 0;
    font-family: sans-serif;
    font-weight: normal;
    background: #1b2838;
    background-image: url('https://steamcdn-a.akamaihd.net/steam/apps/546560/page_bg_generated_v6b.jpg?t=1584985275');background-repeat: no-repeat;
    background-position: center top;
    color: white;
  }`;

export const MediaBackground = styled.div`
  ::-webkit-scrollbar {
    width: 10px;
  };
  &::-webkit-scrollbar-track {
    background: rgba(27, 40, 56, 0.671);
  };
  &::-webkit-scrollbar-thumb {
    background: #4a63a72d;
    border-radius: 3px;
  };
  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #3d6c8d, #2e5470)
  }`;

export const GameTitle = styled.h1`
  border-width: 0;
  color: #fff;
  display: inline-block;
  font-size: 26px;
  font-weight: 400;
  margin: 0;
  padding: 0;`;

export const MediaTitle = styled.div`
  padding-top: 1rem;
  width: 940px;
  margin: 0 auto;
  margin-top: 104px;
  padding-bottom: 16px;`;

export const MediaFilepath = styled.div`
  color: #8f98a0;
  font-size: 12px;
  font-family: sans-serif;
  font-weight: normal;
  padding-bottom: 4px;`;

export const MediaFilepathLink = styled.a`
  color: #8f98a0;
  text-decoration: none;
  &:hover{color: white;}`;

export const Button = styled.button`
  border-radius: 2px;
  border: none;
  display: block;
  background-color: #31496d;
  color: #67c1f5;
  font-size: 15px;
  line-height: 30px;
  padding: 0 15px;
  cursor: pointer;
  float: right;
  &:hover{color: white;
  background-image: linear-gradient(to right, #67c1f5, #4a6997);}`;

export const Grid1 = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;`;

export const MediaHighlights = styled.div`
  width: 940px;
  background-color: rgba(10, 18, 27, 0.55)`;

export const Grid2 = styled.div`
  display: grid;
  grid-template-columns: 600px 324px;`;

export const GameSummary = styled.div`
  position: relative;
  margin-left: 15px;
  height: 0rem`;

export const SplashContainer = styled.div`
  height: 151px;
  width: 324px;
  display: flex;`;

export const SplashImage = styled.img`
  object-fit: cover;
  height: auto;
  max-width: 100%;`;

export const Description = styled.p`
  margin-top: 1rem;
  height: 75px;
  overflow-y: scroll;
  font-size: 13px;
  line-height: 18px;
  padding-right: 16px;
  font-family: Arial, Helvetica, sans-serif;
  color: #c6d4df;`;

export const SummaryOverlay = styled.span`
  padding: 5px;
  word-wrap: normal;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  color: rgb(51, 51, 51);
  z-index: 7;
  position: absolute;
  border: 1px black solid;
  right: -10px;
  top: 190px;
  border-radius: 3px;
  background-color: rgb(161, 162, 163);
  box-shadow: 0.5px 0.5px 2px;
  width: 310px;`;

export const ReviewStats = styled.p`
  margin:0px;
  width: 300px;`;

export const Grid3 = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 2fr;`;

export const BlerbHeader = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 10px;
  margin-top: 0rem;
  margin-bottom: 0rem;
  padding-right: 10px;
  color: #556772`;

export const ReviewValue = styled.span`
  color: #66C0F4;
  cursor: pointer;
  font-size: 12px;`;

export const ReviewCount = styled.span`
  color: #556772;`;

export const TopPadding = styled.span`
  padding-top: 14px`;

export const ReleaseDate = styled.span`
  font-size: 12px;
  line-height: 16px;
  color: #8f98a0;
  padding-top: 12px;`;

export const DevHeader = styled.span`
  padding-top: 10px;`;

export const PubHeader = styled.span`
  padding-top: 4px;`;

export const Blerb = styled.a`
  color: #66C0F4;
  cursor: pointer;
  font-size: 12px;
  &:hover{color: white;}`;

export const TagHeader = styled.p`
  margin-top: 0px;
  margin-bottom:0px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 19px;
  font-size: 12px;
  color: #556772;`;

export const SummaryTag = styled.button`
  border-radius: 2px;
  border: none;
  display: inline;
  background-color: #31496d;
  color: #67c1f5;
  margin-right: 2px;
  margin-bottom: 7px;
  font-size: 11px;
  line-height: 19px;
  padding: 0 7px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover{color: white;
    background-image: linear-gradient(to right, #67c1f5, #4a6997);}`;

export const TagList = styled.ul`
margin-top: 4px;
padding-inline-start: 0px;
list-style-type: none;`;

export const TagListItem = styled.li`
  display: inline;`;

export const CarouselSlides = styled.ul`
  margin-top: 6px;
  margin-bottom: 6px;
  padding-inline-start: 0px;
  padding: 0px;
  overflow: scroll;
  display: inline-flex;
  width: 100%;
  overflow-y: hidden;
  list-style-type: none;`;

export const ThumbnailContainer = styled.div`
  height: 65px;
  width: 115px;
  display: flex;`;

export const Thumbnail = styled.img`
  display: inline;
  object-fit: cover;
  height: auto;
  max-width: 98%;
  margin: 4px;
  cursor: pointer;`;

export const CarouselSelected = styled.div`
  height: 337px;
  width: 600px;
  display: flex;`;

export const CurrentViewVideo = styled.video`
  position: relative;
  top: 0px;
  object-fit: cover;
  height: auto;
  max-width: 100%;`;

export const CurrentViewImage = styled.img`
  position: relative;
  top: 0px;
  object-fit: cover;
  height: auto;
  max-width: 100%;`;

export const Shadow = styled.div`
  width: 100%;
  height: 100%;
  background-color: #171920;
  opacity: 95%;
  position: absolute;
  top: 0px;
  left: 0px;`;

export const TagOverlayModal = styled.div`
  position: fixed;
  z-index: 99;
  width: 56%;
  height: 100vh;
  left: 22%;
  top: 2%;
  background: radial-gradient(circle at top left, rgba(74, 81, 92, 0.4) 0%, rgba(75, 81, 92, 0) 60%), #25282e;`;

export const ColorBar = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, #00ccff, #3366ff);`;

export const OverlayExit = styled.h1`
  margin: 0px;
  text-align: right;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  color: grey;
  cursor: pointer;
  padding-top: 6px;
  padding-right: 10px;`;

export const TagOverlayText = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  color: #acb2b8;
  font-size: 14px;`;

export const OverlayHeader = styled.h1`
  margin: 0px;
  margin-top:0px;
  font-weight: 300;
  font-size: 32px;
  line-height: 36px;
  letter-spacing: 2px;
  color: #ffffff;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  padding-left: 20px;
  padding-bottom: 40px;`;

export const TagBody = styled.div`
  height: 80vh;
  overflow-y: scroll;`;

export const OverlayGrid = styled.div`
  position: sticky;
  display: grid;
  grid-template-columns: 1fr 1.8fr;
  height: 85vh;`;

export const TagCol1 = styled.div`
  border-right: 1px solid #4b4b4b;
  padding-right: 16px;
  padding-left: 20px;`;

export const TagCol2 = styled.div`
  padding-left: 16px;
  padding-right: 16px;`;

export const TagPrompt = styled.p`
  color: #969696;
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  margin-bottom: 6px;
  letter-spacing: 0px;
  padding: 0;
  margin: 0;`;

export const TagInfo = styled.span`
  font-size: 11px;
  color: #626366;
  cursor: default;
  margin-left: 8px;`;

export const OverlayHover = styled.p`
  margin: 0px;
  padding: 5px;
  word-wrap: normal;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  color: rgb(51, 51, 51);
  z-index: 1000;
  position: absolute;
  left: 80px;
  top: 53px;
  border: 1px black solid;
  border-radius: 3px;
  background-color: rgb(161, 162, 163);
  box-shadow: 0.5px 0.5px 2px;
  width: 310px;`;

export const OverlaySignin = styled.button`
  border: none;
  border-radius: 2px;
  display: inline;
  background-color: #31496d;
  color: #67c1f5;
  margin-right: 2px;
  margin-bottom: 7px;
  font-size: 15px;
  line-height: 19px;
  padding: 0 7px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 10px;
  padding: 10px;
  &:hover{color: white;
    background-image: linear-gradient(to right, #67c1f5, #4a6997);}`;

export const TagOverlayList = styled.li`
  height: 19px;
  line-height: 19px;
  padding: 2px;
  background-color: #222225;
  margin-bottom: 2px;`;

export const CloseButton = styled.button`
  float: right;
  background: linear-gradient( to bottom, #778088 5%, #414a52 95%);
  border: none;
  padding: 0 15px;
  font-size: 15px;
  line-height: 30px;
  color: white;
  border-radius: 2px;
  margin-right: 25px;
  margin-top: 70px;
  cursor: pointer;
  &:hover{background: linear-gradient( to bottom, #c4c7c9 5%, #778088 95%);}`;

export const OverlayTag = styled.button`
  border: none;
  border-radius: 2px;
  display: inline;
  background-color: #31496d;
  color: #67c1f5;
  margin-right: 2px;
  margin-bottom: 7px;
  font-size: 15px;
  line-height: 19px;
  padding: 0 7px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover{color: white;
    background-image: linear-gradient(to right, #67c1f5, #4a6997);}`;

export const Scroll = styled.input`
  ::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(27, 40, 56, 0.671);
  }
  &::-webkit-scrollbar-thumb {
    background: #4a63a72d;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #3d6c8d, #2e5470)
  }`;

export const NavHeader = styled.div`
position: absolute;
top: 0px;
left: 0px;
height: 104px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
background-color: rgb(23, 26, 33);
}`;

export const NavList = styled.ul`
  display: inline;
  list-style-type: none;`;

export const NavItem = styled.li`
  position: relative;
  padding-top: 45px;
  padding-left: 7px;
  padding-right: 7px;
  padding-bottom: 7px;
  line-height: 16px;
  float: left;
  font-size: 14px;
  color: rgb(184, 182, 180);
  cursor: pointer;
  &:hover{color: white}`;

export const DlButton = styled.button`
  height: 24px;
  width: 110px;
  font-size: 10px;
  border: none;
  background-color: #5c7e10;
  background-image: url(https://steamstore-a.akamaihd.net/public/shared/images/header/btn_header_installsteam_download.png?v=1);
  background-position: 10px 5px;
  background-repeat: no-repeat no-repeat;
  color: #e5e4dc;
  display: inline-block;
  margin-top: 3px;
  padding: 0 9px 0 35px;
  cursor: pointer;
  &:hover{color: white};`;

export const LogoContainer = styled.span`
  margin-top: 25px;
  float: left;
  width: 176px;
  height: 44px;
  display: inline;`;

export const NavContent = styled.span`
  width: 940px;`;

export const MainLogo = styled.img`
  display: inline;
  object-fit: cover;
  height: auto;
  max-width: 98%;
  margin: 4px;
  cursor: pointer;`;

export const NavLogin = styled.span`
  color: #b8b6b4;
  padding: 0 4px;
  text-decoration: none;
  cursor: pointer;
  &:hover{color: white};`;

export const NavFunction = styled.span`
  font-size: 10px;
  float: right;
  margin-top: 5px;`;
// export { MediaBackground, MediaTitle, MediaFilepath };
