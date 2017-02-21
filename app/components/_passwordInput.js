import React from 'react';

import {TextInput} from 'react-native';

const style = {
    padding: 5,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
};

const PasswordInput = ({value}) =>
    <TextInput
        secureTextEntry={true}
        value={value}
        style={style} />;

export default PasswordInput;