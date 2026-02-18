import { expect, jest } from '@jest/globals';
import { render } from '@testing-library/react-native'
import { Stack, XStack, YStack } from '..'
import { palettes, theme } from '../../theme';
import { Platform } from 'react-native';

describe("Stack", () => {
    it("Should render correctly with base style", () => {
        const { getByTestId } = render(<Stack testID='test-stack-id' />)

        const stack = getByTestId('test-stack-id')
        expect(stack).toHaveStyle({
            position: 'relative'
        })
    })

    it("Should render correctly when transparent variant is set to true", () => {
        const { getByTestId } = render(<Stack transparent testID='test-stack-id' />)

        const stack = getByTestId('test-stack-id')
        expect(stack).toHaveStyle({
            position: 'relative',
            backgroundColor: palettes.transparent
        })
    })

    it("XStack should render flexDirection to row correctly", () => {
        const { getByTestId } = render(<XStack testID='test-stack-id' />)

        const stack = getByTestId('test-stack-id')
        expect(stack).toHaveStyle({
            flexDirection: 'row'          
        })
    })
    it("XStack should render correctly when transparent variant is set to true", () => {
        const { getByTestId } = render(<XStack transparent testID='test-stack-id' />)

        const stack = getByTestId('test-stack-id')
        expect(stack).toHaveStyle({
            position: 'relative',
            backgroundColor: palettes.transparent
        })
    })

    it("YStack should render flexDirection to column correctly", () => {
        const { getByTestId } = render(<YStack testID='test-stack-id' />)

        const stack = getByTestId('test-stack-id')
        expect(stack).toHaveStyle({
            flexDirection: 'column'
        })
    })

    it("Should render shadow on stack correctly when shadow variant is set to light on ios", () => {
        jest.spyOn(Platform, 'select').mockImplementation((obj)=>obj.ios)
        const { getByTestId } = render(<Stack shadow='light' transparent testID='test-stack-id' />)

        const stack = getByTestId('test-stack-id')
        expect(stack).toHaveStyle({
            position: 'relative',
            backgroundColor: palettes.transparent,
            shadowColor: theme.colors.gray[900],
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
        })
    })
})