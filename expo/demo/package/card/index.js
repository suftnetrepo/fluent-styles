import { View, Pressable } from "react-native";
import { styled } from "../styled";

const Card = styled(View, {
    base: {
        flexDirection: 'column'        
    }
})

const StyledCard = ({ pressable= false, pressableProps, children, ...rest }) => {

    if (pressable) {
        return (
            <Pressable {...pressableProps}>
                <Card {...rest}>
                    {children}
                </Card>
            </Pressable>
        )
    }

    return (
        <Card {...rest}>
            {children}
        </Card>
    )
}

export { StyledCard }