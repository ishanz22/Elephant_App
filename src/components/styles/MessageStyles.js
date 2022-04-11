import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
  background-color: #ffffff;
  margin-top: -100px;
  width: 100%;
`;

export const Card = styled.TouchableOpacity`
  width: 100%;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #e0e0e0;
`;

export const UserImgWrapper = styled.View`
  padding-top: 15px;
  padding-bottom: 15px;
  flex-direction: row;
`;

export const UserImg = styled.Image`
  width: 55px;
  height: 55px;
`;

export const TextSection = styled.View`
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  padding-left: 0;
  margin-left: 10px;
  width: 60%;
`;

export const UserInfoText = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const UserName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  font-family: 'Lato-Regular';
`;

export const PostTime = styled.Text`
  font-size: 11px;
  color: black;
  font-family: 'Lato-Regular';
`;

export const MessageText = styled.Text`
  font-size: 13px;
  color: #666;
`;

export const UserInfoTimer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margintop: -10px;
`;
