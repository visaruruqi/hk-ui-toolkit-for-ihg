// YourComponent.stories.js

import HkButton from './HkButton.vue';

//π This default export determines where your story goes in the story list
export default {
    /* π The title prop is optional.
    * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Design System/Atoms/HkButton',
    component: HkButton,
};

//π We create a βtemplateβ of how args map to rendering
const Template = (args) => ({
    components: { HkButton },
    setup() {
        //π The args will now be passed down to the template
        return { args };
    },
    template: '<HkButton v-bind="args"/>',
});

export const Prime = Template.bind({type:'primary'});
Prime.args = {
    /* π The args you need here will depend on your component */
    type: 'primary',
    title: 'Walk In'
};

export const Secondary = Template.bind({type:'secondary'});

Secondary.args = {
    /* π The args you need here will depend on your component */
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
