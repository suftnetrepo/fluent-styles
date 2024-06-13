import { View } from "react-native";
import { styled } from '../../styled'

const Card = styled(View, {
    base: {

    },
    variants: {

    }
})

const StyledCard = ({ children, ...rest }) => {

    return (
        <Card {...rest}>
            {children}
        </Card>
    )
}

export { StyledCard }