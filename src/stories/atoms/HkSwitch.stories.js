// YourComponent.stories.js

import HkSwitch from './HkSwitch.vue';

//π This default export determines where your story goes in the story list
export default {
    /* π The title prop is optional.
    * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Design System/Atoms/HkSwitch',
    component: HkSwitch,
};

//π We create a βtemplateβ of how args map to rendering
const Template = (args) => ({
    components: { HkSwitch },
    setup() {
        //π The args will now be passed down to the template
        return { args };
    },
    template: `<HkSwitch v-bind="args" />`,
});

export const TurnOnState = Template.bind({});

TurnOnState.args = {
    /* π The args you need here will depend on your component */

};

