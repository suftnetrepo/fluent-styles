import { SafeAreaView } from "react-native";
import { styled } from "../styled";

const StyledSafeAreaView = styled(SafeAreaView, {   
    variants : {
        backgroundColor: (color) => ({
            backgroundColor: color
        }),
    }
})

export { StyledSafeAreaView }