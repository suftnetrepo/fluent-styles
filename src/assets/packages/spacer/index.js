import { View } from "react-native";
import styled from "../../styled";

const Spacer = styled(View)

const StyledSpacer = ({ marginHorizontal, ...rest }) => {
    return (
        <Spacer marginHorizontal={marginHorizontal} {...rest} />
    )
}

export default StyledSpacer