import UILoading from "./UILoading";

export default {
    title: 'Ui Kit/UI Loading',
    component: UILoading
}

const Template = (args) => <UILoading {...args} />;

const props = {
    theme: 'white',
    isShadow: false,
    classes: '',
}

// Светлая тема
export const Black = Template.bind({});
Black.args = {
    ...props,
    theme: 'black',
}

// Темная тема
export const White = Template.bind({});
White.args = {
    ...props,
    theme: 'white',
    isShadow: true
}

// Синяя тема
export const Blue = Template.bind({});
Blue.args = {
    ...props,
    theme: 'blue',
}