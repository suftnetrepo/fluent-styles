import { SafeAreaView } from "react-native";
import { styled } from "../styled";

const StyledSafeAreaView = styled(SafeAreaView, {
    base : {
        flex : 1
    },
    variants : {
        backgroundColor: (color) => ({
            backgroundColor: color
        }),
    }
})

export { StyledSafeAreaView }