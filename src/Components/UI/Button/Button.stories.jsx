import { string } from "prop-types";
import Button from "./Button";

export default {
    title: 'UI/Button',
    component: Button,
    argTypes: {
        variant: {
            name: 'variant',
            type: { name: 'string', required: false },
            defaultValue: 'primary',
            description: 'Define the button color',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'primary' },
            },
            options: [
                'primary',
                'primary-gradient',
                'primary-outline',
                'secondary',
                'secondary-gradient',
                'secondary-outline',
                'danger',
                'danger-gradient',
                'danger-outline',
                'success',
                'success-gradient',
                'success-outline',
                'warning',
                'warning-gradient',
                'warning-outline',
                'info',
                'info-gradient',
                'info-outline',
                'dark',
                'dark-gradient',
                'dark-outline',
                'light',
                'light-gradient',
                'light-outline',
            ],
            control: { type: 'select' },
        },
        disabled: {
            name: 'disabled',
            type: { name: 'string', required: false },
            defaultValue: false,
            description: 'Disable clicking on the button',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            },
            control: { type: 'boolean' },
        },
        block: {
            name: 'block',
            type: { name: 'boolean', required: false },
            defaultValue: false,
            description: 'The button takes a 100% width if set to true',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            },
            control: { type: 'boolean' },
        },
        href: {
            name: 'href',
            type: { name: string, required: false },
            defaultValue: null,
            description: 'Turn the button into a link if precised',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: null }
            },
            control: { type: 'text' },
        },
        type: {
            name: 'type',
            type: { name: 'string', required: false },
            defaultValue: 'button',
            description: 'Define the role of the button',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'button' }
            },
            options: [
                'button',
                'submit'
            ],
            control: { type: 'select' },
        },
        onClick: {
            name: 'onClick',
            type: { name: 'function', required: false },
            defaultValue: null,
            description: 'The click handler',
            table: {
                type: { summary: 'function', required: false },
                defaultValue: { summary: null }
            }
        },
    }
}


export const Default = (args) => (
    <Button {...args}>Button</Button>
);

const Template = (args) => (
    <div style={{display: 'flex', gap: 8}}>
        <Button {...args}>Button</Button>
        <Button {...args} variant={`${args.variant}-gradient`}>Gradient Button</Button>
        <Button {...args} variant={`${args.variant}-outline`}>Outlined Button</Button>
    </div>
);

export const Primary = Template.bind({});
Primary.args = {
    variant: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary'
};

export const Danger = Template.bind({});
Danger.args = {
    variant: 'danger'
};

export const Warning = Template.bind({});
Warning.args = {
    variant: 'warning'
};

export const Success = Template.bind({});
Success.args = {
    variant: 'success'
};

export const Info = Template.bind({});
Info.args = {
    variant: 'info'
};

export const Dark = Template.bind({});
Dark.args = {
    variant: 'dark'
};

export const Light = Template.bind({});
Light.args = {
    variant: 'light'
};
