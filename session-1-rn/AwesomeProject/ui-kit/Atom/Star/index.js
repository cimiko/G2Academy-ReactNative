import React from 'react'
import { AirbnbRating } from 'react-native-elements';
import { View } from 'react-native'

function Star({rating, count, style}) {
    return (
        <View style={style}>
            <AirbnbRating
                defaultRating={rating}
                count={count}
                reviews={[]}
                size={20}/>
        </View>
    )
}

export default Star
