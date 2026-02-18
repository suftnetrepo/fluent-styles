import React from 'react'
import { XStack } from '../stack'
import { theme } from '../theme'

const StyledSeparator = ({ left, right, line, lineProps, ...rest }) => {
    if (line) {
        return <XStack borderTopWidth={1} borderTopColor={theme.colors.gray[800]} {...lineProps} />
    }

    return (
        <XStack justifyContent='space-between' paddingVertical={8} paddingHorizontal={8} alignItems='center' {...rest}>
            {
                left && (
                    <>{left}</>
                )
            }
            {
                right && (
                    <>{right}</>
                )
            }
        </XStack>
    )
}

export { StyledSeparator }
