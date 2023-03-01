// YourComponent.stories.js

import HkSwitch from './HkSwitch.vue';

//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Design System/Atoms/HkSwitch',
    component: HkSwitch,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
    components: { HkSwitch },
    setup() {
        //👇 The args will now be passed down to the template
        return { args };
    },
    template: `<HkSwitch v-bind="args" />`,
});

export const TurnOnState = Template.bind({});

TurnOnState.args = {
    /* 👇 The args you need here will depend on your component */

};

