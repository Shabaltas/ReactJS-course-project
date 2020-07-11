import React from "react";
import ProfileStatus from "./ProfileStatus";
import TestRenderer from 'react-test-renderer';

const initialStatus = "heyheyhey";

test('profile status should be displayed in span', () => {
    const component = TestRenderer.create(<ProfileStatus status={initialStatus} />).root;
    expect(component.findByType("span").children.length).toBe(1);
    expect(component.findByType("span").children[0]).toBe(initialStatus);
});
test('profile status should be displayed in input', () => {
    const component = TestRenderer.create(<ProfileStatus status={initialStatus} />).root;
    const span = component.findByType("span").props.onDoubleClick();
    expect(component.findByType("input").props.value).toBe(initialStatus);
});
