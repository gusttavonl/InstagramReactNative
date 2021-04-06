import React from 'react'
import { View } from 'react-native'
import { PostList, Post, PostHeader, Avatar, Name, PostBody, PostBodyImage, PostFooter, PostFooterIcons, PostFooterDescription, Description } from './styles'

export default function Feed() {
    const imagemAvatar = "https://avatars.githubusercontent.com/u/77861206?v=4"
    const imagemBody = "https://user-images.githubusercontent.com/77861206/108550523-70b98280-72cd-11eb-8cb1-62b0dee4c1c1.PNG"
    return (
        <View>
            <PostList>
                <Post>
                    <PostHeader>
                        <Avatar source={{ uri: imagemAvatar }} />
                        <Name>noronhaax</Name>
                    </PostHeader>
                    <PostBody>
                        <PostBodyImage source={{ uri: imagemBody }} />
                    </PostBody>
                    <PostFooter>
                        <PostFooterIcons>

                        </PostFooterIcons>
                        <PostFooterDescription>
                            <Name>noronhaax</Name>
                            <Description>Ola, olha meu novo clone!</Description>
                        </PostFooterDescription>
                    </PostFooter>
                </Post>
                <Post>
                    <PostHeader>
                        <Avatar source={{ uri: imagemAvatar }} />
                        <Name>noronhaax</Name>
                    </PostHeader>
                    <PostBody>
                        <PostBodyImage source={{ uri: imagemBody }} />
                    </PostBody>
                    <PostFooter>
                        <PostFooterIcons>

                        </PostFooterIcons>
                        <PostFooterDescription>
                            <Name>noronhaax</Name>
                            <Description>Ola, olha meu novo clone!</Description>
                        </PostFooterDescription>
                    </PostFooter>
                </Post>
                <Post>
                    <PostHeader>
                        <Avatar source={{ uri: imagemAvatar }} />
                        <Name>noronhaax</Name>
                    </PostHeader>
                    <PostBody>
                        <PostBodyImage source={{ uri: imagemBody }} />
                    </PostBody>
                    <PostFooter>
                        <PostFooterIcons>

                        </PostFooterIcons>
                        <PostFooterDescription>
                            <Name>noronhaax</Name>
                            <Description>Ola, olha meu novo clone!</Description>
                        </PostFooterDescription>
                    </PostFooter>
                </Post>
            </PostList>
        </View>
    )
}