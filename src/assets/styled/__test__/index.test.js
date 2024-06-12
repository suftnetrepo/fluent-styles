
import React from "react";
import { render } from "@testing-library/react-native";
import { expect } from '@jest/globals';
import styled from "..";
import { Text } from "react-native";
import { theme } from "../../theme";

const StyledText = React.forwardRef((props, ref) => <Text {...props} ref={ref} />)
describe("Fluent Styles", () => {
	it("Base style should render correctly", () => {
		const base = {
			backgroundColor: theme.colors.gray[50],
			paddingHorizontal: 20,
			paddingVertical: 10
		}
		const Text = styled(StyledText, { base, variants: {} });
		const { getByText } = render(<Text>Hello</Text>)

		expect(getByText("Hello")).toHaveStyle({
			backgroundColor: theme.colors.gray[50],
			paddingHorizontal: 20,
			paddingVertical: 10
		})
	});

	it("Variants style should render correctly", () => {
		const variants = {
			border: {
				true: {
					borderColor: theme.colors.gray[50],
					borderWidth: 1,
					borderRadius: 8
				}
			}
		}
		const Text = styled(StyledText, { base: {}, variants });
		const { getByText } = render(<Text border>Hello</Text>)

		expect(getByText("Hello")).toHaveStyle({
			borderColor: theme.colors.gray[50],
			borderWidth: 1,
			borderRadius: 8
		})
	});

	it("Variants style should not render correctly when variant is not enable", () => {
		const variants = {
			border: {
				true: {
					borderColor: theme.colors.gray[50],
					borderWidth: 1,
					borderRadius: 8
				}
			}
		}
		const Text = styled(StyledText, { base: {}, variants });
		const { getByText } = render(<Text>Hello</Text>)

		expect(getByText("Hello")).not.toHaveStyle({
			borderColor: theme.colors.gray[50],
			borderWidth: 1,
			borderRadius: 8
		})
	});

	it("Variants styles should render correctly with function variant", () => {
		const variants = {
			fontSize: (size) => ({
				fontSize: size
			})
		}
		const Text = styled(StyledText, { base: {}, variants });
		const { getByText } = render(<Text fontSize={24}>Hello</Text>)

		expect(getByText("Hello")).toHaveStyle({
			fontSize: 24
		})
	});

	it("Variants styles should render correctly with nested variant", () => {
		const base = {
			backgroundColor: theme.colors.blueGray[100]
		};
		const variants = {
			fontsize: (size) => ({
				fontSize: size
			}),
			color: theme.colors
		};
		const Text = styled(StyledText, { base, variants });
		const { getByText } = render(
			<Text fontsize={24} color="gray.100">
				Hello
			</Text>
		);

		expect(getByText('Hello')).toHaveStyle({
			fontSize: 24,
			color: theme.colors.gray[100],
			backgroundColor: theme.colors.blueGray[100]
		});
	});

	it("Should render prop style correctly", () => {		
		const Text = styled(StyledText, { base :{}, variants :{} });
		const { getByText } = render(
			<Text style={{ color: theme.colors.gray[100] }}>
				Hello
			</Text>
		);

		expect(getByText('Hello')).toHaveStyle({			
			color: theme.colors.gray[100]			
		});
	});

	it("Should render forwardRef as expected", () => {
		const Text = styled(StyledText, { base: { color: theme.colors.gray[200]}, variants: {} });
		const ref = React.createRef()
		const { getByText } = render(
			<Text ref={ref}>
				Hello
			</Text>
		);

		const helloText = getByText('Hello');
		expect(helloText).toBeTruthy();
		expect(ref.current).toBeTruthy();		
	});

});
