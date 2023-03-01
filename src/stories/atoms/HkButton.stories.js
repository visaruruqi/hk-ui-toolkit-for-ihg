// YourComponent.stories.js

import HkButton from './HkButton.vue';

//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Design System/Atoms/HkButton',
    component: HkButton,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
    components: { HkButton },
    setup() {
        //👇 The args will now be passed down to the template
        return { args };
    },
    template: '<HkButton v-bind="args"/>',
});

export const Prime = Template.bind({type:'primary'});
Prime.args = {
    /* 👇 The args you need here will depend on your component */
    type: 'primary',
    title: 'Walk In'
};

export const Secondary = Template.bind({type:'secondary'});

Secondary.args = {
    /* 👇 The args you need here will depend on your component */
    title: 'Walk In',
    type: 'secondary'
};
export const Disabled = Template.bind({type:''});

Disabled.args = {
    title: 'Walk In',
    disabled: true,
}

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button',
};
