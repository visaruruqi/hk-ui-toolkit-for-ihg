// YourComponent.stories.js

import HkListItem from './HkListItem.vue';

//π This default export determines where your story goes in the story list
export default {
    /* π The title prop is optional.
    * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Design System/Molecules/HkListItem',
    component: HkListItem,
};

//π We create a βtemplateβ of how args map to rendering
const Template = (args) => ({
    components: { HkListItem },
    setup() {
        //π The args will now be passed down to the template
        return { args };
    },
    template: `<HkListItem v-bind="args" />`,
});

export const Prime = Template.bind({});

Prime.args = {
    /* π The args you need here will depend on your component */
    title: 'PENTHOUSE',
    description: 'Stylish and sophisticated, 2000 Sq Penthouse at our hotel feature a generous bedroom with fully functional kitchen, 2 bathrooms and 1000 Sq patio',
    lastRoomAvailable: 'Only 4 remaining',
    background: '#d4dde1'

};

