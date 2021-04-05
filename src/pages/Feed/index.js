import React from 'react'
import { View } from 'react-native'
import { Post, PostHeader } from './styles'

export default function Feed() {
    return (
        <View>
            <Post>
                <PostHeader>
                    <Avatar source="https://avatars.githubusercontent.com/u/77861206?v=4"/>
                    <Name>noronhaax</Name>
                </PostHeader>
                <PostBody>
                    <PostBodyImage source="https://user-images.githubusercontent.com/77861206/106316870-2e5fd100-624c-11eb-9647-05b58a922afe.png" />
                </PostBody>
                <PostFooter>
                    <PostFooterDescription>
                        <Name>noronhaax</Name>
                        <Description>Ola, olha meu novo clone!</Description>
                    </PostFooterDescription>
                </PostFooter>
            </Post>
        </View>
    )
}