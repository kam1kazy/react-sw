import UIButton from "./UIButton";

export default {
    title: 'Ui Kit/UI Button',
    component: UIButton
}

const Template = (args) => <UIButton {...args} />;

const props = {
    text: 'Hello',
    onClick: () => console.log('text text'),
    disabled: false,
    theme: 'light',
    classes: '',
}

// Светлая тема
export const Light = Template.bind({});
Light.args = {
    ...props,
    theme: 'light',
}

// Темная тема
export const Dark = Template.bind({});
Dark.args = {
    ...props,
    theme: 'dark',
}

// Выключенная кнопка
export const Disabled = Template.bind({});
Disabled.args = {
    ...props,
    disabled: true,
}