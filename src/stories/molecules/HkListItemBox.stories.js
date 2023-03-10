// YourComponent.stories.js

import HkListItemBox from './HkListItemBox.vue';

//π This default export determines where your story goes in the story list
export default {
    /* π The title prop is optional.
    * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Design System/Molecules/HkListItemBox',
    component: HkListItemBox,
};

//π We create a βtemplateβ of how args map to rendering
const Template = (args) => ({
    components: { HkListItemBox },
    setup() {
        //π The args will now be passed down to the template
        return { args };
    },
    template: `<HkListItemBox v-bind="args" />`,
});

export const Prime = Template.bind({});

Prime.args = {
    /* π The args you need here will depend on your component */
    title: 'PENTHOUSE',
    description: 'Stylish and sophisticated, 2000 Sq Penthouse at our hotel feature a generous bedroom with fully functional kitchen, 2 bathrooms and 1000 Sq patio',
    lastRoomAvailable: 'Only 4 remaining',
    background: '#d4dde1'

};

