import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

class Photo extends Component {
    render() {
        let pic = {
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx87YpENcgGeFyQlMJTBJvMQU-LoaW-CI6zBVav4VmUQJ4jGRR',
        }
        return (
            <Image source={pic} style={{ width: 250, height: 200 }} />
        );
    }
}

export default Photo;
AppRegistry.registerComponent('scroll_app', () => Photo);