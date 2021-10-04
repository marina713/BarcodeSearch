import * as React from "react";
import renderer from "react-test-renderer";

import Ingredient, { Props } from "../";

jest.mock("../styles", () => ({
  ListItem: "ListItem",
}));

const initialProps = {
  ingredient: "Red pepper",
};

const testComponent = (props: Props) => {
  return renderer.create(<Ingredient {...props} />);
};

describe("<Header />", () => {
  it("renders correctly with default props", () => {
    const tree = testComponent(initialProps).toJSON();
    expect(tree).toMatchInlineSnapshot();
  });

  it("renders correctly with an empty ingredient", () => {
    const tree = testComponent({ ...initialProps, ingredient: "" }).toJSON();
    expect(tree).toMatchInlineSnapshot();
  });
});
