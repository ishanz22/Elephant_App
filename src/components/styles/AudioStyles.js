import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;

  align-items: center;
  background-color: #ffffff;
  margin-top: -100px;
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
  width: 60px;
  height: 60px;
`;

export const TextSection = styled.View`
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  padding-left: 0;
  margin-left: 10px;
  width: 80%;
`;

export const UserInfoText = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 5px;
`;
export const UserInfoTime = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margintop: -10px;
`;

export const UserName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  font-family: 'Lato-Regular';
`;

export const PostTime = styled.Text`
  font-size: 10px;
  color: black;
  font-family: 'Lato-Regular';
`;

export const MessageText = styled.Text`
  font-size: 13px;
  color: #666;
  width: 200px;
  margin-top: -10px;
`;
