import Styled from 'styled-components/native'


export const PostList = Styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false
  })`
    
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
   
`;

export const PostFooterIcons = Styled.View`
    display:flex;
    flex-direction: row;
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