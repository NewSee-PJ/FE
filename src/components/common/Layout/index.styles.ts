import styled from "styled-components";
export const AppContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100dvh;
  overflow: hidden;
`;

export const AppWrapper = styled.div`
  max-width: 430px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow-x: hidden;
  align-items: center;
  flex: 1;
  min-height: 0;
`;

export const AppMain = styled.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding-bottom: 56px;
  padding-top: 68px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
