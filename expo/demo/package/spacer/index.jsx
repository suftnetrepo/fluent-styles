import React from "react";
import { View } from "react-native";
import { styled } from "../styled";

const Spacer = styled(View)

const StyledSpacer = ({ ...rest }) => {
    return (
        <Spacer {...rest} />
    )
}

export {StyledSpacer}