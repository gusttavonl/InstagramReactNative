import Styled from 'styled-components/native'

export const HeaderList = Styled.ScrollView.attrs({
    showsHorizontalScrollIndicator: false
  })`
    margin-top: 10px;
    height: 80px;
`;

export const HeaderListItem = Styled.View`
    margin-left: 5px;
`;

export const MyStorie = Styled.Image`
    height: 70px;
    width: 70px;
    border: 2px solid red;
    border-radius: 120px;
`;

export const Storie = Styled.Image`
    height: 70px;
    width: 70px;
    border: 2px solid gray;
    border-radius: 120px;
`;

export const PostList = Styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false
  })`
    margin-top: 5px;
`;

export const Post = Styled.View`
    
`;

export const PostHeader = Styled.View`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
`;

export const Avatar = Styled.Image`
    height: 50px;
    width: 50px;
    border-radius: 50px;
`;


export const Name = Styled.Text`
    margin-top: 10px;
    margin-left: 5px;
    font-weight: bold;
    font-size: 17px;
`;

export const PostBody = Styled.View`
    margin-top: 10px;
`;

export const PostBodyImage = Styled.Image`
    height: 210px;
    width: 400px;
`;

export const PostFooter = Styled.View`
   margin-top: 15px;
`;

export const PostFooterIcons = Styled.View`
    display:flex;
    flex-direction: row;
`;

export const PostFooterLeft = Styled.View`
    display:flex;
    flex-direction: row;
`;

export const PostFooterRight = Styled.View`
    margin-left: 250px;
`;

export const PostFooterDescription = Styled.View`
    display:flex;
    flex-direction: row;
`;

export const Description = Styled.Text`
    margin-top: 13px;
    margin-left: 10px;
    font-size: 15px;
`;